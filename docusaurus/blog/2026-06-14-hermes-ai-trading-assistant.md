---
title: "Hermes: Building an AI-Powered WeChat Personal Assistant for Energy Trading Operations"
author: DC
categories: project
tags:
  - wechaty
  - padlocal
  - claude
  - chatbot
  - python
  - fastapi
image: /assets/2026/06-hermes-ai-trading-assistant/cover.webp
---

> Hermes is an AI-powered personal assistant that listens to WeChat messages, understands natural language requests, and manages a Kanban task board — purpose-built for a battery energy storage (BESS) trading desk.

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://wechaty.js.org)
[![Wechaty Contributor Program](https://img.shields.io/badge/Wechaty-Contributor%20Program-green.svg)](https://wechaty.js.org/docs/contributing/)

## Background

Running an energy trading desk generates a constant stream of operational tasks: market data anomalies to investigate, settlement figures to verify, reports to send, model parameters to update. These tasks arrive via WeChat messages at all hours.

The existing workflow was: read message → manually create a Kanban card → remember to follow up. It worked, but the friction meant small tasks got lost.

**Hermes** solves this by making WeChat itself the task interface. Send a message like "remind me to check the Inner Mongolia settlement tomorrow morning" and Hermes creates the card, sets the due date, and sends a reminder when it comes due — all without leaving WeChat.

## Architecture

```
WeChat (personal) ──► Wechaty Bridge (Node.js / EC2)
                              │
                              ▼ HTTP POST
                        Hermes Service (Python / FastAPI / ECS Fargate)
                              │
                    ┌─────────┴──────────┐
                    ▼                    ▼
             Claude (Anthropic)    Planka Kanban API
             (intent parsing)      (task CRUD)
```

The system has two main parts:

1. **Wechaty Bridge** — a lightweight Node.js process on EC2 that maintains the WeChat session and forwards inbound messages to the Hermes FastAPI service.
2. **Hermes Service** — a Python/FastAPI application on AWS ECS Fargate. It uses Claude to parse the intent from the message and then executes the appropriate Planka operation.

A background scheduler (APScheduler) runs every 15 minutes to check for cards due within 24 hours and send reminders back via WeChat or WeCom.

## The Wechaty Bridge

The bridge (`apps/hermes-wechaty/index.js`) is intentionally minimal. It handles the WeChat session lifecycle and acts as a dumb HTTP relay:

```javascript
const { WechatyBuilder } = require('wechaty');
const express = require('express');
const axios = require('axios');
const QRCode = require('qrcode');

const HERMES_INBOUND_URL = process.env.HERMES_INBOUND_URL;
const BRIDGE_PORT = parseInt(process.env.BRIDGE_PORT || '3000', 10);
const QR_PORT = parseInt(process.env.QR_PORT || '3001', 10);

let currentQrData = null;

const bot = WechatyBuilder.build({
  name: 'hermes-wechat',
  puppet: 'wechaty-puppet-padlocal',
  puppetOptions: {
    token: process.env.PADLOCAL_TOKEN,
  },
});

bot.on('scan', async (qrcode, status) => {
  console.log(`QR scan required (status=${status})`);
  currentQrData = qrcode;
});

bot.on('login', (user) => {
  console.log(`Logged in as: ${user}`);
  currentQrData = null;
});

bot.on('message', async (message) => {
  if (message.self() || message.room()) return;
  if (!message.text()) return;

  const contact = message.talker();
  const payload = {
    source: 'wechat',
    sender_id: contact.id,
    sender_name: contact.name(),
    text: message.text(),
    timestamp: message.date().toISOString(),
  };

  await axios.post(HERMES_INBOUND_URL, payload, { timeout: 5000 });
});

bot.start();
```

A small Express server on port 3001 serves the QR code as an HTML page during initial setup — useful when running headlessly on a remote server.

## The AI Agent (Python / Claude)

The core of Hermes is a Claude-powered agent that maps natural language to structured Planka operations:

```python
# services/hermes/agent.py
from anthropic import Anthropic
from services.hermes.models import InboundMessage, Action

SYSTEM_PROMPT = """
You are Hermes, an assistant for a trading desk. You help manage tasks on a Kanban board.

Given a message, decide what to do:
- CREATE: create a new card (extract title, description, due date if mentioned)
- LIST: list open cards for a board or user
- DONE: mark a card as complete
- REMIND: set a reminder (due date) on an existing card
- REPLY: just reply with information (no board action needed)

Respond in JSON: {"action": "CREATE|LIST|DONE|REMIND|REPLY", "params": {...}, "reply": "..."}
"""

class HermesAgent:
    def __init__(self, planka: PlankaClient, anthropic_api_key: str):
        self.planka = planka
        self.client = Anthropic(api_key=anthropic_api_key)

    def process(self, msg: InboundMessage) -> Action:
        response = self.client.messages.create(
            model="claude-opus-4-6",
            max_tokens=512,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": msg.text}],
        )
        return Action.model_validate_json(response.content[0].text)

    def execute(self, action: Action) -> None:
        if action.action == "CREATE":
            self.planka.create_card(**action.params)
        elif action.action == "DONE":
            self.planka.complete_card(**action.params)
        # ...
```

## Due-Date Reminders

A scheduler checks Planka for cards due within the next 24 hours and sends reminders back to WeChat:

```python
# services/hermes/scheduler.py
def send_due_reminders(planka, wecom, wechat_bridge, wecom_user_id, wechat_id):
    cards = planka.get_due_soon_cards(within_hours=24)
    for card in cards:
        due_str = card.get("dueDate", "")[:10]
        text = f"Reminder: '{card['name']}' is due on {due_str}"
        if wecom and wecom_user_id:
            wecom.send_text(user_id=wecom_user_id, text=text)
        wechat_bridge.send(to=wechat_id, text=text)
```

The FastAPI app wires everything together:

```python
# services/hermes/app.py
scheduler = BackgroundScheduler()
scheduler.add_job(
    send_due_reminders,
    "interval",
    minutes=15,
    kwargs={"planka": planka, "wecom": wecom, "wechat_bridge": wechat_bridge, ...},
)
scheduler.start()

@app.post("/hermes/inbound/wechat")
async def wechat_inbound(msg: InboundMessage, background: BackgroundTasks):
    background.add_task(_handle_message, msg, agent, wecom, wechat_bridge)
    return {"status": "accepted"}
```

## Deployment

The bridge runs on a `t3.micro` EC2 instance (to maintain a persistent WeChat session), managed by PM2. The Hermes FastAPI service runs on AWS ECS Fargate behind an Application Load Balancer.

```
EC2 (t3.micro)                    ECS Fargate
┌─────────────────┐               ┌──────────────────────┐
│ PM2             │               │ Hermes FastAPI        │
│  hermes-wechaty │──────────────►│  /hermes/inbound/*   │
│  (Node.js)      │               │  /hermes/health      │
└─────────────────┘               └──────────────────────┘
                                           │
                                  ┌────────┴────────┐
                                  ▼                 ▼
                             Planka             Anthropic
                             (Kanban)           (Claude)
```

## What I Learned

**Wechaty makes the WeChat session layer completely transparent.** Without it, maintaining a personal WeChat connection from a server would be the hardest part of the project. With Wechaty + PadLocal, I write zero WeChat protocol code — I just handle `message` events.

**The AI layer is surprisingly thin.** The `process()` method in the agent is ~15 lines. Claude handles the ambiguity of natural language (time expressions, implicit references to existing cards) far better than any hand-written parser would.

**Decoupling the bridge from the logic pays off.** The Node.js bridge has no business logic — it just relays messages. This means I can redeploy the Python service (fix bugs, update the Claude prompt, add new actions) without touching the WeChat session.

## Try It

The project is part of a larger BESS trading platform. The Hermes-specific code lives in:
- `apps/hermes-wechaty/` — Node.js Wechaty bridge
- `services/hermes/` — Python FastAPI agent service

**Example interactions:**

| You send | Hermes does |
|----------|-------------|
| "Add a task: check Inner Mongolia settlement report, due Friday" | Creates Planka card with due date |
| "What's on my list?" | Replies with open cards |
| "Mark the settlement check as done" | Completes the matching card |
| "Remind me about the board meeting tomorrow at 9" | Sets due date on card |

---

*Hermes is built on [Wechaty](https://wechaty.js.org) with [PadLocal](https://github.com/padlocal) puppet. The trading platform it serves processes battery energy storage dispatch data across Inner Mongolia, China.*
