---
title: Wechaty Puppet Service
sidebar_label: Service
---
This section is all about the Wechaty Puppet Service Registration & Discovery, which is the core system for our **token**.

## The Puppet Service Discovery

When a Wechaty user is using a **token** with Wechaty, the Wechaty will use that **token** to connect to the specific puppet service.

The mechanism behind is the **Puppet Service Discovery**, which can resolve the IP of gGRPC service by the token, is implemented by the following steps:

1. construct a URL: `https://api.chatie.io/v0/hosties/${TOKEN}`
1. make a GET request to the URL, and expect to get the following json object:

    ```json
    {"ip":"1.2.3.4","port":1234}
    ```

**the above `1.2.3.4` will be the gRPC server, and the port `1234` is the gRPC port.**

1. if the token is not registered, then the GET request will get a HTTP 404 with the below object:

    ```json
    {"ip":"0.0.0.0","port":0}
    ```

For the Wechaty SDK, we support the following environment variables so that the users can switch between different languages without any changes:

1. `export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__`

## The Registration

In order to publish a Wechaty Puppet Service Token to the Wechaty community, you need to register this token by following the Wechaty Puppet Service Registration process.

There are two ways to do the registration to publish the tokens:

1. By running a Wechaty docker command
1. By following the Wechaty Puppet Service Registration Protocol

### 1. Registration the Token with Docker

Yoc can visit the links below which gives a more detailed step by step description about registration of token using Docker.

1. [How to create your own Wechaty Puppet Service Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/issues/1986)
1. [Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985](https://github.com/wechaty/wechaty/issues/1985)

 Other Related issues are listed below :

1. <https://github.com/wechaty/python-wechaty/issues/58>
1. <https://github.com/wechaty/wechaty/issues/1984>
1. <https://github.com/wechaty/wechaty/issues/1153>

### 2. Register the Token with Protocol

The current process can be described as the following two steps:

1. The `puppet server` sends a WebSocket connection to `wss://api.chatie.io/v0/websocket`, with an HTTP authorization header  `Token rock_token_here`. After the connection has been established, the `api.chatie.io` service will register your token online
[source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236)
2. When a puppet service discovery query has been sent to `api.chatie.io` like `https://api.chatie.io/v0/hosties/puppet_rock_token` has been visited, the `api.chatie.io` will send a JSONRPC to you via the WebSocket connection, with the method name `hostieGrpcPort`, and you need to return your service port so that it can be returned to the user. [source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363)
3. You can learn more about the registration protocol via this discussion: [Support rock puppet service provider. #98](https://github.com/wechaty/wechaty-puppet-service/issues/98)
Below is a pictorial representation that describes the above process.

[![Sequence Diagram](https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgV2VjaGF0eSBQdXBwZXQgU2VydmVyLT4-K2FwaS5jaGF0aWUuaW86IFNlbmRzIGEgd2Vic29ja2V0IGNvbm5lY3Rpb24gd2l0aCBIdHRwIGF1dGhvcml6YXRpb24gaGVhZGVyKFRva2VuIHB1cHBldF9zZXJ2Y2llX3Rva2VuX2hlcmUpXG4gICAgYXBpLmNoYXRpZS5pby0-PiBXZWNoYXR5IFB1cHBldCBTZXJ2ZXI6IENvbm5lY3Rpb24gZXNhdGJsaXNoZWQgYW5kIHRva2VuIHJlZ2lzdGVyZWRcbiAgICAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgV2VjaGF0eSBQdXBwZXQgU2VydmVyLT4-K2FwaS5jaGF0aWUuaW86IFNlbmRzIGEgd2Vic29ja2V0IGNvbm5lY3Rpb24gd2l0aCBIdHRwIGF1dGhvcml6YXRpb24gaGVhZGVyKFRva2VuIHB1cHBldF9zZXJ2Y2llX3Rva2VuX2hlcmUpXG4gICAgYXBpLmNoYXRpZS5pby0-PiBXZWNoYXR5IFB1cHBldCBTZXJ2ZXI6IENvbm5lY3Rpb24gZXNhdGJsaXNoZWQgYW5kIHRva2VuIHJlZ2lzdGVyZWRcbiAgICAiLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjp0cnVlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

## Related Resources

1. Wechaty Puppet Service gRPC: <https://github.com/wechaty/grpc>

## Blogs

1. [Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
