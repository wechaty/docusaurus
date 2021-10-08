function qrCodePlugin (context, options) {
  return {
    async contentLoaded ({ content, actions }) {
      const { addRoute } = actions
      addRoute({
        component: '@site/src/components/qrcode.tsx',
        path: '/qrcode/*',
      })
    },
    name: 'docusaurus-qrcode-plugin',
  }
}

module.exports = qrCodePlugin
