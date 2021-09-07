---
title: Introduction to gRPC
author: iamrajiv
categories: article
tags:
  - article
  - blog
  - grpc
  - gsod
  - protoc
image: /assets/2021/06-introduction-to-grpc/1.webp
---

## Overview

In gRPC, a client application can directly call a method on a server application on a different machine as if it were a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. On the server-side, the server implements this interface and runs a gRPC server to handle client calls. On the client-side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.

<img src="../assets/2021/06-design-and-document-apis-with-swagger/2.webp" />

gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your desktop - and can be written in any of gRPC’s supported languages. So, for example, you can easily create a gRPC server in Java with clients in Go, Python, or Ruby. In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily build Google functionality into your applications.

### Working with Protocol Buffers

By default, gRPC uses [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview), Google’s mature open source mechanism for serializing structured data (although it can be used with other data formats such as JSON). Here’s a quick intro to how it works. If you’re already familiar with protocol buffers, feel free to skip ahead to the next section.

The first step when working with protocol buffers is to define the structure for the data you want to serialize in a _proto file_: this is an ordinary text file with a `.proto` extension. Protocol buffer data is structured as _messages_, where each message is a small logical record of information containing a series of name-value pairs called _fields_. Here’s a simple example:

```proto
message Person {
 string name = 1;
 int32 id = 2;
 bool has_ponycopter = 3;
```

Then, once you’ve specified your data structures, you use the protocol buffer compiler `protoc` to generate data access classes in your preferred language(s) from your proto definition. These provide simple accessors for each field, like `name()` and `set_name()`, as well as methods to serialize/parse the whole structure to/from raw bytes. So, for instance, if your chosen language is C++, running the compiler on the example above will generate a class called `Person`. You can then use this class in your application to populate, serialize, and retrieve `Person` protocol buffer messages.

You define gRPC services in ordinary proto files, with RPC method parameters and return types specified as protocol buffer messages:

```proto
// The greeter service definition.
service Greeter {
 // Sends a greeting
 rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
 string name = 1;
}

// The response message containing the greetings
message HelloReply {
 string message = 1;
}
```

gRPC uses `protoc` with a special gRPC plugin to generate code from your proto file: you get generated gRPC client and server code, as well as the regular protocol buffer code for populating, serializing, and retrieving your message types. You’ll see an example of this below.

To learn more about protocol buffers, including how to install `protoc` with the gRPC plugin in your chosen language, see the [protocol buffers documentation](https://developers.google.com/protocol-buffers/docs/overview).

## Protocol buffer versions

While [protocol buffers](https://developers.google.com/protocol-buffers/docs/overview) have been available to open-source users for some time, most examples from this site use protocol buffers version 3 (proto3), which has a slightly simplified syntax, some useful new features, and supports more languages. Proto3 is currently available in Java, C++, Dart, Python, Objective-C, C#, a lite-runtime (Android Java), Ruby, and JavaScript from the [protocol buffers GitHub repo](https://github.com/google/protobuf/releases), as well as a Go language generator from the[golang/protobuf official package](https://pkg.go.dev/google.golang.org/protobuf), with more languages in development. You can find out more in the [proto3 language guide](https://developers.google.com/protocol-buffers/docs/proto3) and the [reference documentation](https://developers.google.com/protocol-buffers/docs/reference/overview) available for each language. The reference documentation also includes a [formal specification](https://developers.google.com/protocol-buffers/docs/reference/proto3-spec) for the `.proto` file format.

In general, while you can use proto2 (the current default protocol buffers version), I will recommend that you use proto3 with gRPC as it lets you use the full range of gRPC-supported languages, as well as avoiding compatibility issues with proto2 clients talking to proto3 servers and vice versa.

### Service definition

Like many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. By default, gRPC uses [protocol buffers](https://developers.google.com/protocol-buffers) as the Interface Definition Language (IDL) for describing both the service interface and the structure of the payload messages. It is possible to use other alternatives if desired.

```proto
service HelloService {
 rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
 string greeting = 1;
}

message HelloResponse {
 string reply = 1;
}
```

gRPC lets you define four kinds of service method:

- Unary RPCs where the client sends a single request to the server and gets a single response back, just like a normal function call.

```proto
rpc SayHello(HelloRequest) returns (HelloResponse);
```

- Server streaming RPCs where the client sends a request to the server and gets a stream to read a sequence of messages back. The client reads from the returned stream until there are no more messages. gRPC guarantees message ordering within an individual RPC call.

```proto
rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse);
```

- Client streaming RPCs where the client writes a sequence of messages and sends them to the server, again using a provided stream. Once the client has finished writing the messages, it waits for the server to read them and return its response. Again gRPC guarantees message ordering within an individual RPC call.

```proto
rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);
```

- Bidirectional streaming RPCs where both sides send a sequence of messages using a read-write stream. The two streams operate independently, so clients and servers can read and write in whatever order they like: for example, the server could wait to receive all the client messages before writing its responses, or it could alternately read a message then write a message, or some other combination of reads and writes. The order of messages in each stream is preserved.

```proto
rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
```

## FAQ

### What is gRPC?

gRPC is a modern, open-source remote procedure call (RPC) framework that can run anywhere. It enables client and server applications to communicate transparently and makes it easier to build connected systems.

Read the longer [Motivation & Design Principles](https://grpc.io/blog/principles/) post for background.

### What does gRPC stand for?

**g**RPC **R**emote **P**rocedure **C**alls.

### Why would I want to use gRPC?

The main usage scenarios:

- Low latency, highly scalable, distributed systems.
- Developing mobile clients which are communicating to a cloud server.
- Designing a new protocol that needs to be accurate, efficient, and language independent.
- Layered design to enable extension eg. authentication, load balancing, logging, and monitoring, etc.

### Who’s using this and why?

gRPC is a [Cloud Native Computing Foundation](https://cncf.io/) (CNCF) project.

Google has been using a lot of the underlying technologies and concepts in gRPC for a long time. The current implementation is being used in several of Google’s cloud products and Google externally facing APIs. It is also being used by [Square](https://corner.squareup.com/2015/02/grpc.html), [Netflix](https://github.com/Netflix/ribbon), [CoreOS](https://blog.gopheracademy.com/advent-2015/etcd-distributed-key-value-store-with-grpc-http2/), [Docker](https://blog.docker.com/2015/12/containerd-daemon-to-control-runc/), [CockroachDB](https://github.com/cockroachdb/cockroach), [Cisco](https://github.com/CiscoDevNet/grpc-getting-started), [Juniper Networks](https://github.com/Juniper/open-nti) and many other organizations and individuals.

### Which programming languages are supported?

See [Officially supported languages and platforms](https://grpc.io/about/#officially-supported-languages-and-platforms).

### How do I get started using gRPC?

You can start with the installation of gRPC by following instructions [here](https://grpc.io/docs/quickstart/). Or head over to the [gRPC GitHub org page](https://github.com/grpc), pick the runtime or language you are interested in and follow the README instructions.

### Which license is gRPC under?

All implementations are licensed under [Apache 2.0](https://github.com/grpc/grpc/blob/master/LICENSE).

### Where is the documentation?

Check out the [documentation](https://grpc.io/docs/) right here on grpc.io.

### What is the road map?

The gRPC project has an RFC process, through which new features are designed and approved for implementation. They are tracked in [this repository](https://github.com/grpc/proposal).

### What is the gRPC versioning policy?

See the gRPC versioning policy [here](https://github.com/grpc/grpc/blob/master/doc/versioning.md).

### When do gRPC releases happen?

The gRPC project works in a model where the tip of the master branch is stable at all times. The project (across the various runtimes) targets to ship checkpoint releases every 6 weeks on the best effort basis. See the release schedule [here](https://github.com/grpc/grpc/blob/master/doc/grpc_release_schedule.md).

### How can I report a security vulnerability in gRPC?

To report a security vulnerability in gRPC, please follow the process documented [here](https://github.com/grpc/proposal/blob/master/P4-grpc-cve-process.md).

### Can I use it in the browser?

The [gRPC-Web](https://github.com/grpc/grpc-web) project is Generally Available.

### Can I use gRPC with my favorite data format (JSON, Protobuf, Thrift, XML)?

Yes. gRPC is designed to be extensible to support multiple content types. The initial release contains support for Protobuf and external support for other content types such as FlatBuffers and Thrift, at varying levels of maturity.

### Can I use gRPC as a service mesh?

Yes. gRPC applications can be deployed in a service mesh like any other application. gRPC also supports [xDS APIs](https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol) which enables deploying gRPC applications in a service mesh without sidecar proxies. The proxy less service mesh features supported in gRPC are listed [here](https://github.com/grpc/grpc/blob/master/doc/grpc_xds_features.md).

### How does gRPC help in mobile application development?

gRPC and Protobuf provide an easy way to precisely define a service and auto-generate reliable client libraries for iOS, Android, and the servers providing the back end. The clients can take advantage of advanced streaming and connection features which help save bandwidth, do moreover fewer TCP connections, and save CPU usage and battery life.

### Why is gRPC better than any binary blob over HTTP/2?

This is largely what gRPC is on the wire. However, gRPC is also a set of libraries that will provide higher-level features consistently across platforms that common HTTP libraries typically do not. Examples of such features include:

- interaction with flow-control at the application layer
- cascading call-cancellation
- load-balancing & failover

### How do you pronounce gRPC?

Jee-Arr-Pee-See.
