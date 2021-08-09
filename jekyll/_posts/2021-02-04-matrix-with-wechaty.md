---
title: "用Matrix和wechaty来聊微信"
author: yswtrue
categories: tutorial
tags:
  - matrix
  - featured
image: /assets/2021/02-matrix-with-wechaty/2020-03-matrix-appservice-wechaty.png
---

[Matrix chat](https://matrix.org/)是一个很不错的聊天软件，它支持了多种聊天协议和聊天机器人。并且支持通过[matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty)来支持微信聊天。
现在我来梳理一下matrix-appservice-wechaty的部署方法。

### 需要准备的东西

1. 域名（假设你的域名是example.com）
2. 服务器，最好国内的

### 配置流程

#### 配置域名解析

| Type  | Host                  | Priority | Weight | Port | Target               |
| ----- | --------------------- | -------- | ------ | ---- | -------------------- |
| A     | matrix                | -        | -      | -    | matrix-server-IP     |
| CNAME | element               | -        | -      | -    | matrix.<your-domain> |
| CNAME | dimension (*)         | -        | -      | -    | matrix.<your-domain> |
| CNAME | jitsi (*)             | -        | -      | -    | matrix.<your-domain> |
| SRV   | _matrix-identity._tcp | 10       | 0      | 443  | matrix.<your-domain> |

#### 配置matrix chat

```bash
git clone https://github.com/spantaleev/matrix-docker-ansible-deploy.git
mkdir inventory/host_vars/example.com/
export MATRIX_REGISTRATION_ADMIN_SECRET=$(pwgen -s 64 1)
echo '
matrix_domain: example.com
matrix_ssl_lets_encrypt_support_email: ${email}
matrix_synapse_enable_registration: true
matrix_registration_admin_secret: "${MATRIX_REGISTRATION_ADMIN_SECRET}"
matrix_postgres_connection_password: 'synapse-password'
matrix_synapse_federation_enabled: true
matrix_ma1sd_enabled: true
' > inventory/host_vars/example.com/vars.yml
echo 'example.com ansible_host=example.com ansible_ssh_user=root' >> inventory/hosts
ansible-playbook -i inventory/hosts setup.yml --tags=setup-all,start
```

等一切部署完之后可以检测一下有没有问题

```bash
ansible-playbook -i inventory/hosts setup.yml --tags=self-check
```

#### 配置matrix-appservice-wechaty

连接远程服务器

新建`docker-compose.yml`并填入如下内容

```yaml
version: '2'
services:
  wechaty-gateway:
      image: wechaty/wechaty:next
      volumes:
        - /matrix/synapse/config:/data
      networks:
        - default
      environment:
        - WECHATY_PUPPET_SERVER_PORT=7777
        - WECHATY_TOKEN={{random_token}}
        - WECHATY_PUPPET=wechaty-puppet-padlocal
        - WECHATY_PUPPET_PADLOCAL_TOKEN={{padlocal_token}}
      ports:
        - 7777:7777
  matrix-appservice-wechaty:
      container_name: matrix-appservice-wechaty
      image: wechaty/matrix-appservice
      volumes:
        - /matrix/synapse/config:/data
      networks:
        - default
      environment:
        - WECHATY_PUPPET_SERVICE_TOKEN=puppet_{{random_token}}
        - WECHATY_PUPPET_SERVICE_ENDPOINT=example.com:7777
        - WECHATY_PUPPET=wechaty-puppet-service
#        - WECHATY_PUPPET=wechaty-puppet-puppeteer
        - WECHATY_LOG=silly
      command: ["--config", "/data/wechaty-config.yaml", "--file", "/data/wechaty-registration.yaml"]
      ports:
        - 8788:8788
```

`padlocal_token`需要[申请](https://wechaty.js.org/docs/puppet-services/)
`random_token`是随机字符串，可以用uuid
如果没有`padlocal_token`可以使用`wechaty-puppet-puppeteer`，把内容改为

```yaml
version: '2'
services:
  matrix-appservice-wechaty:
      container_name: matrix-appservice-wechaty
      image: wechaty/matrix-appservice
      volumes:
        - /matrix/synapse/config:/data
      networks:
        - default
      environment:
        - WECHATY_PUPPET=wechaty-puppet-puppeteer
        - WECHATY_LOG=silly
      command: ["--config", "/data/wechaty-config.yaml", "--file", "/data/wechaty-registration.yaml"]
      ports:
        - 8788:8788
```

然后新增文件`/matrix/synapse/config/wechaty-config.yaml`，并填入如下内容

```properties
domain: example.com
homeserverUrl: https://matrix.example.com
registration: /data/wechaty-registration.yaml
```

运行`docker-compose run --rm matrix-appservice-wechaty --config /data/wechaty-config.yaml --url "http://example:8788" --generate-registration`生成配置文件

然后编辑`/matrix/synapse/config/homeserver.yaml`
修改`app_service_config_files`那一行为`app_service_config_files: ["/data/wechaty-registration.yaml"]`

运行`systemctl restart matrix-*`重启matrix服务

#### 注册并登录

1. 打开`https://example.com`，然后注册账号
2. 点击`People`右边的➕，然后输入`@wechaty:example.com`点击`Go`
3. 在打开的聊天窗口，等出现`This room has been registered as your bridge management/status room.`
4. 然后发送`!login`，如果提示 `You are not enable matrix-appservice-wechaty yet. Please talk to the wechaty bot to check you in.
I had enabled it for you ;-)` 就再发送一遍
5. 扫描二维码登录

### 参考资料

1. [](https://github.com/spantaleev/matrix-docker-ansible-deploy)
2. [](https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/)
3. [](https://github.com/wechaty/wechaty-puppet-puppeteer)

> 作者: [Roy](https://blog.yswtrue.com)。首发于博客: [用Matrix和wechaty来聊微信](https://blog.yswtrue.com/yong-matrix/)
