function qrCodePlugin (context, options) {
  return {
    async contentLoaded ({ content, actions }) {
      if (context.i18n.currentLocale !== context.i18n.defaultLocale) {
        return // we don't have to create qrcode page for other locales
      }
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
