const NOT_WEBP_TO_BE_FIXED_FILE_LIST = [
  'docusaurus/static/img/docs/architecture.png',
  'docusaurus/static/img/docs/bot5/cui.png',
  'docusaurus/static/img/docs/examples/basic/ding-dong-bot/wechaty-ding-dong-bot-demo.png',
  'docusaurus/static/img/docs/getting-started-qrcode.png',
  'docusaurus/static/img/docs/getting-started/cloud-execution-instructions.png',
  'docusaurus/static/img/docs/getting-started/cloud-npm-installation.png',
  'docusaurus/static/img/docs/getting-started/cloud-scan-QR-whatsapp.png',
  'docusaurus/static/img/docs/getting-started/getting-started-terminal-messages.png',
  'docusaurus/static/img/docs/getting-started/getting-started-tutorial-completion.png',
  'docusaurus/static/img/docs/getting-started/gitpod_2.png',
  'docusaurus/static/img/docs/getting-started/gitpod.png',
  'docusaurus/static/img/docs/getting-started/google-cloud-shell-editor-starting.png',
  'docusaurus/static/img/docs/getting-started/google-cloud-shell-editor-wechaty-tutorial-start-page.png',
  'docusaurus/static/img/docs/getting-started/google-cloud-shell-homepage-selection.png',
  'docusaurus/static/img/docs/getting-started/google-cloud-shell-homepage.png',
  'docusaurus/static/img/docs/getting-started/quick-start/gitpod/create-workspace.png',
  'docusaurus/static/img/docs/getting-started/quick-start/gitpod/ding-dong-output.png',
  'docusaurus/static/img/docs/getting-started/quick-start/gitpod/gitpod-loaded.png',
  'docusaurus/static/img/docs/getting-started/quick-start/gitpod/gitpod-signin.png',
  'docusaurus/static/img/docs/getting-started/running-locally/bot-demo.png',
  'docusaurus/static/img/docs/getting-started/running-locally/hard-way.png',
  'docusaurus/static/img/docs/gsoc/wechaty-gsoc.png',
  'docusaurus/static/img/docs/ospp/ospp-logo.png',
  'docusaurus/static/img/docs/qrcode-bot/output.png',
  'docusaurus/static/img/docs/rui-bot.png',
  'docusaurus/static/img/docs/tutorials/using-vorpal-with-wechaty/vorpal-hn-help-hacker-news.png',
  'docusaurus/static/img/docs/tutorials/using-vorpal-with-wechaty/vorpal-hn-help.png',
  'docusaurus/static/img/docs/tutorials/using-vorpal-with-wechaty/vorpal-hn-length.png',
  'docusaurus/static/img/docs/tutorials/using-vorpal-with-wechaty/wechaty-vorpal-hacker-news-qr.png',
  'docusaurus/static/img/docs/tutorials/using-vorpal-with-wechaty/wechaty-vorpal-hacker-news.png',
  'docusaurus/static/img/icon.png',
]

/**
 * Huan(202107): we forgot to check the limit of gif files before... -_-b
 */
const BIG_SIZE_TO_BE_FIXED_FILE_LIST = [
  /**
   * Images
   */
  'jekyll/assets/2018/birthday-cake-chickens.webp',
  'jekyll/assets/2018/techiefestival-24.webp',
  'jekyll/assets/2020/wechaty-log-monitor/archy-demo.webp',
  'jekyll/assets/2020/your-wechat-bot/demo.webp',
  'jekyll/assets/2021/06-summer-2021-open-source/002.webp',
  'jekyll/assets/2021/07-wechaty-with-paddlepaddle/botbay.webp',
  'jekyll/assets/2021/07-wechaty-with-paddlepaddle/panda_emoji.webp',
  'jekyll/assets/2021/07-wechaty-with-paddlepaddle/pic_mask.webp',
  'jekyll/assets/2021/07-wechaty-with-paddlepaddle/wanderer.webp',
  /**
   * PDFs
   */
  'jekyll/assets/2019/bot5-seminar-2/chatbot-experience-limingth.pdf',
  'jekyll/assets/2020/11-summer-2020-wechaty/wechaty-summer-2020-introduction.pdf',
  'jekyll/assets/2020/qijibot/final.pdf',
  'jekyll/assets/2020/qijibot/talk2.pdf',
  'jekyll/assets/2020/wechaty-plugin-milestone/gcaufy.pdf',
  'jekyll/assets/2020/wechaty-plugin-milestone/yuan.pdf',
  'jekyll/assets/2020/wechaty-words-per-day-plugin-final/presentation.pdf',
  'jekyll/assets/2021/02-summer-wechaty-nanjing-summit-journey/slides.pdf',
  'jekyll/assets/2021/07-gdg-shanghai-wechaty/wechaty-community-talk-live-demo.pdf',
  'jekyll/assets/2021/08-ospp-mid-term-wechaty-itchat-puppet/itchat.pdf',
  'jekyll/assets/2021/08-ospp-mid-term-wechaty-puppet-oa/wechaty-puppet-oa-midterm-ppt.pdf',
]

/**
 * Huan(202107):
 *
 *  Enforce all images in wechaty website to use .webp format #1035
 *    https://github.com/wechaty/wechaty.js.org/issues/1035
 *
 */
const inList = (whitelist: string[]) => (fileName: string) => whitelist.some(
  partial => fileName.includes(partial)
)

export {
  BIG_SIZE_TO_BE_FIXED_FILE_LIST,
  NOT_WEBP_TO_BE_FIXED_FILE_LIST,
  inList,
}
