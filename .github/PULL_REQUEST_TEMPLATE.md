Fixes # .

Make sure these boxes are checked before creating your pull request -- thank you!

- [ ] Add Blog Header, including title, author, date.  
    For example:  

    ``` md
    ---
    title: "Your Great Blog Title"
    author: your_github_id
    image: /assets/2020/08-your-blog-slug/teaser.jpg
    ---

    YOUR_FIRST_SENTENCE_SHOULD_BE_A_SUMMARY_FOR_YOUR_POST
    ```

- [ ] Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-wechat-pc-impactor` instead of `2017-10-06-WeChat PC Impactor`,
- [ ] Embed the photo & video before publishing, save all external file to a folder named by `${MONTH}-${YOUR_BLOG_SLUG}/` under `/assets/2020` directory.
- [ ] Add teaser image for the blog
- [ ] Add your self as an author to the author data file at <https://github.com/wechaty/wechaty.js.org/blob/master/_contributors/__your_github_username__.md> with your GitHub username in all lowercase. And please also remember to reference yourself with the Github username (in lowercase) in your blog post, so that we can have nice author information besides your blog after we published it!

  For excample:
  ```md
  ---
  name: Jiarui LI (李佳芮)
  site: https://lijiarui.github.io
  bio: 句子互动创始人 & CEO，微软人工智能最具价值专家 (AI MVP)
  avatar: /assets/contributors/lijiarui/avatar.png
  email: rui@juzi.bot
  twitter: https://weibo.com/u/2175505900
  ---
  ```
  Here is the example file:
  - lijiarui.md: https://github.com/wechaty/wechaty.github.io/blob/master/_contributors/lijiarui.md
  - It will shown like this on wechaty blog: https://wechaty.github.io/contributors/lijiarui/

To read more about the contribute guideline, visit: <https://github.com/wechaty/wechaty.js.org#contribute-guideline>
