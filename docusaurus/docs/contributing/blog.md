---
title: Publish blog
---

## Tutorials

1. [零基础小白在Wechaty社区发表自己的第一篇博客, @juzibot, Jul 02, 2021](https://wechaty.js.org/2021/07/02/how-to-publish-blog-on-wechaty/)
2. [入门：小白如何在wechaty社区发布自己的第一篇博客（一）, @atorber, Apr 22, 2021](https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/)

## Tricks

### Hide A Post

If you do not want to list your post on the website,
you can add a `published: false` to the front matter YAML.

```yaml
published: false
```

### List on <https://wechaty.js.org/news/>

If a post has a tag named `news`
then it will be shown at <https://wechaty.js.org/news/>

```yaml
tags:
  - news
```

All posts will be showed at <https://wechaty.js.org/blog/>

### Show Big Picture

```yaml
tags:
  - sticky
```

## Minimizing images

Optimize image compression where possible.

Our limitation for an image is:

1. file size maximum 1MB
1. file resolution maximum 1920x1080

For image files, use `scripts/fit-image.sh`:

```sh
./scripts/fit-image.sh jekyll/assets/2021/03-your-blog-folder/
```

This is based on ImageMagick.

## Submit Blog Post

Submit your blog by creating a Pull Request at <https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts>

Please make sure the CI turns green, and if the CI fails, you need to check the error messages and fix all the problems before we can continue processing it.

## Support

You can [join our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.
