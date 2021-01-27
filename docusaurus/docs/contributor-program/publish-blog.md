---
title: Publish Blog
---

## Tricks

### Hide A Post

If you do not want to list your post on the website, you can add a `published: false` to the front matter YAML.

```yaml
published: false
```

### List on <https://wechaty.js.org/news/>

If a post has a tag named `news` then it will be shown at <https://wechaty.js.org/news/>

```yaml
tags:
  - news
```

All posts will be showed at < <https://wechaty.js.org/blog/>

### Show Big Picture

```yaml
tags:
  - sticky
```

## Submit Blog Post

Submit your blog by creating a Pull Request at <https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts>

Please make sure the CI turns green, and if the CI fail, you need to check the error messages and fix all the problems before we can continue processing it.

## Support

If you need support, please join our Gitter at <https://gitter.im/wechaty/wechaty>
