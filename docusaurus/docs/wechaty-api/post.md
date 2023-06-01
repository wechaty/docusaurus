---
title: Post
sidebar_label: ' Post'
---

# Post Class

Post is a class for complicate messages in Wechaty, especially for those containing multiple sayable, or has a tree-like structure.

A post cannot just be created from new. It can either be a post from server, e.g. a message transfer into a post by ```message.toPost()```, or build by a builder. In this case it will be a client-side post.

The differences between client post and server post is

- Client post does not have a id, but server post does.
- Sayables in client post are instances, while sayables in server post are just ids.

## Static Methods

### builder

```ts
static builder (): PostBuilder
```

Get the builder to build a client post. This will be further discussed later this page.

Example:

```ts
const builder = await bot.Post.builder()
```

### create

```ts
static create (payload: PUPPET.payloads.PostClient): PostInterface
```

Create a post from payload.

Example:

```ts
const post = bot.Post.create(payload)
```

### find

```ts
static async find (filter: PUPPET.filters.Post): Promise<undefined | PostInterface>
```

Try to find a post from the puppet. If no post was found, ```undefined``` will be returned. This post is a server post because it's from the puppet.

Example:

```ts
const post = await bot.Post.find({ id: 'postId-1' })
```

### findAll

```ts
static async findAll (
  filter: PUPPET.filters.Post,
  pagination?: PUPPET.filters.PaginationRequest,
): Promise<[
  postList: PostInterface[],
  nextPageToken?: string,
]>
```

Find all posts matching the filter. It can be paged.

Example: Get all comments when receiving a moment.

```ts
bot.on('post', post: PostInterface => {
  if (post.type() === Post.Moment) {
    const comments = await bot.Post.findAll({
      rootId: post.id
    })
  }
})
```

## Instance Methods

### counter

```ts
counter (): PUPPET.payloads.PostServer['counter']
```

Get the tap, children and descendant count of the post if there's any.

Example

```ts
bot.on('post', post: PostInterface => {
  console.log(post.counter())
  // {
  //   children: 0,
  //   descendant: 0,
  //   taps: {
  //     [TapType.Like]: 0,
  //   }
  // }
})
```

### author

```ts
async author (): Promise<ContactInterface>
```

Get the author of the post.

Example

```ts
bot.on('post', post: PostInterface => {
  console.log(await post.author()) // Contact<contact-0>
})
```

### root

```ts
async root (): Promise<undefined | PostInterface>
```

Get the root of the post. If the result is ```undefined```, it means the post is original.

Example

```ts
bot.on('post', post: PostInterface => {
  console.log(await post.root()) // undefined
})
```

### parent

```ts
async parent (): Promise<undefined | PostInterface>
```

Get the parent of the post. If the result is ```undefined```, it means the post is original.

Example

```ts
bot.on('post', post: PostInterface => {
  console.log(await post.parent()) // undefined
})
```

### sync

```ts
async sync (): Promise<void>
```

Force reload data of the post, useful when the info of the post has been modified.

Example

```ts
bot.on('post', post: PostInterface => {
  await post.sync()
})
```

### [Symbol.asyncIterator]

```ts
async * [Symbol.asyncIterator] (): AsyncIterableIterator<Sayable>
```

An async iterator to get the sayable of the post.

Example:

```ts
for await (const sayable of publishedPost[Symbol.asyncIterator]()){
    if (typeof sayable === 'string') {
        // do something
    }
    if (FileBox.validInstance(sayable) {
        // do something
    }
    if (bot.MiniProgram.validInstance(sayable) {
        // do something
    }
}
```

### children

```ts
async * children (filter: PUPPET.filters.Post = {}): AsyncIterableIterator<PostInterface>
```

An async iterator to get the children of the post.

Example:

```ts
for await (const post of publishedPost.children()){
  console.log(post) // child Post Interfaces
}
```

### descendants

```ts
async * descendants (filter: PUPPET.filters.Post = {}): AsyncIterableIterator<PostInterface>
```

An async iterator to get the descendants of the post.

Example:

```ts
for await (const post of publishedPost.descendants()){
  console.log(post) // descendants Post Interfaces
}
```

### likes

```ts
async * likes (filter: PUPPET.filters.Post = {}): AsyncIterableIterator<TapInterface>
```

An async iterator to get the likes of the post.

Example:

```ts
for await (const like of publishedPost.likes()){
  console.log(like)
  // TapInterface {
  //   contact: Contact<contactId-20>,
  //   type: Tap.Like,
  //   date: 2023-05-22T17:44:21.298Z
  // }
}
```

### taps

```ts
async * taps (filter: PUPPET.filters.Post = {}): AsyncIterableIterator<TapInterface>
```

An async iterator to get the taps of the post.

Example:

```ts
for await (const tap of publishedPost.taps()){
  console.log(tap)
  // TapInterface {
  //   contact: Contact<contactId-20>,
  //   type: Tap.Like,
  //   date: 2023-05-22T17:44:21.298Z
  // }
}
```

### reply

```ts
async reply (
  sayable:
    | Exclude<Sayable, PostInterface>
    | Exclude<Sayable, PostInterface>[],
): Promise<void | PostInterface>
```

Reply to a post. This can be used to quote a message in a conversation, or leave a comment in a moment.

Example: Quote a message

```ts
bot.on('message', message: MessageInterface => {
  const post = await message.toPost()
  post.reply('this is a quote message')
})
```

Example: Comment a moment

```ts
bot.on('post', post: PostInterface => {
  post.reply('comment')
})
```

### like

```ts
async like (status: boolean): Promise<void>
async like (): Promise<boolean>
```

Get or set the like situation of the post.

Example:

```ts
bot.on('post', post: PostInterface => {
  console.log(await post.like()) // false, since it's a new post
  await post.like(true)
  console.log(await post.like()) // true
})
```

### tap

```ts
async tap (type: PUPPET.types.Tap): Promise<boolean>
async tap (type: PUPPET.types.Tap, status: boolean) : Promise<void>
```

Get or set the tap situation of the post. Like is a kind of tap. Current it's also the only tap type.

Example:

```ts
bot.on('post', post: PostInterface => {
  console.log(await post.tap(TapType.Like)) // false, since it's a new post
  await post.tap(TapType.Like， true)
  console.log(await post.tap(TapType.Like)) // true
})
```

### tapFind

```ts
async tapFind (
  filter      : PUPPET.filters.Tap,
  pagination? : PUPPET.filters.PaginationRequest,
): Promise<[
  tapList        : Tap[],
  nextPageToken? : string,
]>
```

Find all the taps on this post with the filter.

Example:

```ts
bot.on('post', post: PostInterface => {
  const [tapList] = await post.tapFind(TapType.Like) // Array of Tap Interfaces
})
```

# PostBuilder Class

PostBuilder is a class for building post from scratch. It will build a client side post that can be published or sent.

## Instance Methods

### add

```ts
add (sayable: Sayable): this
```

Add a sayable to the post.

Example:

```ts
const builder = bot.Post.builder()
builder.add('text content')
```

### type

```ts
type (type: PUPPET.types.Post): this
```

Set the type of a post. e.g. Moment, message.

Example:

```ts
const builder = bot.Post.builder()
builder.type(Post.Moment)
```

### reply

```ts
reply (post: PostInterface): this
```

Set the post to a reply to another post.

Example:

```ts
bot.on('post', post: PostInterface => {
  const builder = bot.Post.builder()
  builder.reply(post)
})
```

### build

```ts
async build (): Promise<PostInterface>
```

Build into actual post.

Example:

```ts
const builder = bot.Post.builder()
builder.add('text content')
const post = await builder.build()
await contact.say(post)
```
