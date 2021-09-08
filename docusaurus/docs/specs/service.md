---
title: Wechaty Puppet Service
sidebar_label: Service
---

Recently, the Wechaty community has grown fast, we have more and more multi-language Wechaty (Python, Go, .NET, Java, PHP, Scala, etc) and puppet service providers (WXWork, Donut, Rock, PadLocal, etc).

To make our ecosystem keep clean and healthy, I'd like to write this post as a draft specification for the Wechaty Puppet Service Registration & Discovery, which is the core system for support our **token**.

## The Discovery

When a Wechaty user is using a **token** with Wechaty, the Wechaty will use that **token** to connect to the specific puppet service.

The mechanism behind is the **Puppet Service Discovery**, which can resolve the IP of gGRPC service by the token, is implemented by the following steps:

1. construct a URL: `https://api.chatie.io/v0/hosties/${TOKEN}`
1. make a GET request to the URL, and expect to get the following json object:

    ```json
    {"host":"1.2.3.4","port":5678}
    ```

1. the above `1.2.3.4` will be the gRPC server, and the port `5678` is the gRPC port.
1. if the token is not registered, then the GET request will get a HTTP 404 with the below object:

    ```json
    {"host":"0.0.0.0","port":0}
    ```

That's the Wechaty Puppet Service Discovery.

For the Wechaty SDK, we should support the following environment variables so that the users can switch between different languages without any changes:

1. `export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__`

## The Registration

In order to publish a Wechaty Puppet Service Token to the Wechaty community, we need to register this token by following the Wechaty Puppet Service Registration process.

There at least have two way to do the registration to publish tokens:

1. By running a Wechaty docker command
1. By following the Wechaty Puppet Service Registration Protocol

### 1. Registration the Token with Docker

We have an issue describing the steps in details:

1. [How to create your own Wechaty Puppet Service Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/issues/1986)
1. [Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985](https://github.com/wechaty/wechaty/issues/1985)

Through the above steps, you can publish a token with any existing wechaty puppets.

Related issues:

1. <https://github.com/wechaty/python-wechaty/issues/58>
1. <https://github.com/wechaty/wechaty/issues/1984>
1. <https://github.com/wechaty/wechaty/issues/1153>

### 2. Register the Token with Protocol

The current process can be described as the following two steps:

1. The `puppet server` sends a WebSocket connection to `wss://api.chatie.io/v0/websocket`, with an HTTP authorization header  `Token rock_token_here`. After the connection has been established, the `api.chatie.io` service will register your token online. (refer to the source code at <https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236>)
1. When a puppet service discovery query has been sent to `api.chatie.io` like `https://api.chatie.io/v0/hosties/puppet_rock_token` has been visited, the `api.chatie.io` will send a JSONRPC to you via the WebSocket connection, with the method name `hostieGrpcPort`, and you need to return your service port so that it can be returned to the user. (refer to the source code at <https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363>)

You can learn more about the registration protocol via this discussion: [Support rock puppet service provider. #98](https://github.com/wechaty/wechaty-puppet-service/issues/98)

## Registration Process Discussion

The current process can be described as the following two steps:

1. The `Wechaty Puppet Server` sends a WebSocket connection to `wss://api.chatie.io/v0/websocket`, with an HTTP authorization header  `Token puppet_servcie_token_here`. After the connection has been established, the `api.chatie.io` service will register your token online. (refer to the source code at <https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L236>)
1. When a Wechaty Puppet Service Discovery Query has been sent to `api.chatie.io` like `https://api.chatie.io/v0/hosties/puppet_service_token` has been visited, the `api.chatie.io` will send a JSONRPC to you via the WebSocket connection, with the method name `hostieGrpcPort`, and you need to return your service port so that it can be returned to the user. (refer to the source code at <https://github.com/wechaty/wechaty/blob/7e97620e2a92841227a6ae355efa615c5af95b32/src/io.ts#L363>)

The above two steps are the current way we are working with our service. So please feel free to read the source code from the links above, then I believe you can register multiple rock puppet token to our service with the same IP and Port without any problem.

See: <https://github.com/wechaty/wechaty-puppet-service/issues/98>

## Related Resources

1. Wechaty Puppet Service gRPC: <https://github.com/wechaty/grpc>

## Blogs

1. [Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
