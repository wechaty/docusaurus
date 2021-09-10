---
title: Wechaty Puppet Service
sidebar_label: Service
---
This section is all about the Wechaty Puppet Service Registration & Discovery, which is the core system for our **token**.

## The Puppet Service Discovery

When a Wechaty user is using a **token** with Wechaty, the Wechaty will use that **token** to connect to the specific puppet service.

The mechanism behind is the **Puppet Service Discovery**, which can resolve the IP of gGRPC service by the token, is implemented by the following steps:

1. construct a URL: `https://api.chatie.io/v0/hosties/${TOKEN}`
2. make a GET request to the URL, and expect to get the following json object:

    ```json
    {"host":"1.2.3.4","port":1234}
    ```

**the above `1.2.3.4` will be the gRPC server, and the port `1234` is the gRPC port.**

3. if the token is not registered, then the GET request will get a HTTP 404 with the below object:

    ```json
    {"ip":"0.0.0.0","port":0}
    ```

For the Wechaty SDK, we support the following environment variables so that the users can switch between different languages without any changes:

4. `export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__`

## The Registration

In order to publish a Wechaty Puppet Service Token to the Wechaty community, you need to register this token by following the Wechaty Puppet Service Registration process.

There are two ways to do the registration to publish the tokens:

1. By running a Wechaty docker command
2. By following the Wechaty Puppet Service Registration Protocol

### 1. Registration the Token with Docker

You can visit the links below which gives a more detailed step by step description about registration of token using Docker.

1. [How to create your own Wechaty Puppet Service Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/issues/1986)
2. [Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985](https://github.com/wechaty/wechaty/issues/1985)

Through the above steps, you can publish a token with any existing wechaty puppets.
Other Related issues are listed below :

1. <https://github.com/wechaty/python-wechaty/issues/58>
2. <https://github.com/wechaty/wechaty/issues/1984>
3. <https://github.com/wechaty/wechaty/issues/1153>

### 2. Register the Token with Protocol

The current process can be described as the following steps:

1. The `puppet server` sends a WebSocket connection to `wss://api.chatie.io/v0/websocket`, with an HTTP authorization header  `Token rock_token_here`. After the connection has been established, the `api.chatie.io` service will register your token online.See the
[source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236)
2. When a puppet service discovery query has been sent to `api.chatie.io` like `https://api.chatie.io/v0/hosties/puppet_rock_token` has been visited, the `api.chatie.io` will send a JSONRPC to you via the WebSocket connection, with the method name `hostieGrpcPort`, and you need to return your service port so that it can be returned to the user.See the [source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363)
3. You can learn more about the registration protocol via this discussion: [Support rock puppet service provider. #98](https://github.com/wechaty/wechaty-puppet-service/issues/98)
The following is a pictorial representation that describes the process above.

[![Sequence Diagram](Link to be added later)

## Registration Process Discussion

The current process can be described as the following two steps:

1. The `Wechaty Puppet Server` sends a WebSocket connection to `wss://api.chatie.io/v0/websocket`, with an HTTP authorization header  `Token puppet_servcie_token_here`. After the connection has been established, the `api.chatie.io` service will register your token online.Refer to the [source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236)
2. When a Wechaty Puppet Service Discovery Query has been sent to `api.chatie.io` like `https://api.chatie.io/v0/hosties/puppet_service_token` has been visited, the `api.chatie.io` will send a JSONRPC to you via the WebSocket connection, with the method name `hostieGrpcPort`, and you need to return your service port so that it can be returned to the user.Refer to the [source code](https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363)
3. Wechaty allows to register multiple rock puppet token to the service with the same IP and Port without any problem.
for more information checkout the [link](https://github.com/wechaty/wechaty-puppet-service/issues/98).

## Related Resources

- [Wechaty Puppet Service gRPC](https://github.com/wechaty/grpc)

## Blogs

- [Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
