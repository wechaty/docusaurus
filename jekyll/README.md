## Jekyll for wechaty.js.org

Wechaty.js.org is using Jekyll for our three parts:

wechaty.js.org/ | Repo Folder
:--- | :---
[News] | [_posts](_posts/) (with `news` tag)
[Blog] | [_posts](_posts/)
[Developers] | [_developers/](_developers/)

## YAML front matter

1. For news posts (will show in `/news/` URL), add `news` to `tags`
1. For sticky posts, add `sticky` to `tags`

## Serve from local

Run the Jekyll at localhost for blog preview.

### 1 Use Docker

This is the recommended way for new users to easy getting started

```sh
make docker-serve
```

### 2 Install Jekyll by Hand

You should not use this way except you are a Ruby expert.

```sh
make install
make serve
```

## Links

- [Jekyll Theme minima](https://github.com/jekyll/minima)

## Maintainers

[wechaty/contributors](https://github.com/orgs/wechaty/teams/contributors/members)
