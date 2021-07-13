Please make sure to check the following boxes creating your pull request, thank you very much!

- [ ] Add Blog Header, including title, author, image, categories, tags, etc.  

    For example:  

    ```md
    ---
    title: Your Great Blog Title
    author: your_github_id
    categories: project
    tags:
      - python
      - padlocal
    image: /assets/2021/02-your-blog-slug/teaser.jpg
    ---

    One line bio

    Your blog post content Your blog post content
    Your blog post content Your blog post content
    Your blog post content Your blog post content
    ```

    > It will be easier to start drafting your post by using a existing post file as your template, for example, [this one](https://github.com/wechaty/wechaty.js.org/blob/master/jekyll/_posts/2021-01-14-wechaty-puppet-service.md)

- [ ] Keep all filenames lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor.md` instead of `2017-10-06-WeChat PC Impactor.md`
- [ ] Embed video/pdf from YouTube/Bilibili/local (if there's any) by using `{% include iframe.html src="URL_or_PATH" %}`. (Learn more about how to embed file/url in the post by reading this [blog post](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)
- [ ] Save photo to local before publishing, to a folder named by `${MONTH}-${YOUR_BLOG_SLUG}/` under `/assets/2021/` directory.
- [ ] Select a beautiful and meaningful teaser image for your blog
- [ ] Create your contributor profile (if you are a first time contributor)

    For excample:

    > jekyll/_contributors/lijiarui.md

    ```yaml
    ---
    name: Jiarui LI (李佳芮)
    site: https://lijiarui.github.io
    bio: 句子互动创始人 & CEO，微软人工智能最具价值专家 (AI MVP)
    avatar: /jekyll/assets/contributors/lijiarui/avatar.png
    email: rui@juzi.bot
    twitter: https://weibo.com/u/2175505900
    ---
    ```

  Here is the example file:

  - lijiarui.md: <https://github.com/wechaty/wechaty.js.org/blob/master/jekyll/_contributors/lijiarui.md>
  - It will shown like this on wechaty website: <https://wechaty.js.org/contributors/lijiarui/>

To learn more about the contribute guideline, visit: <https://wechaty.js.org/docs/contributor-program/>
