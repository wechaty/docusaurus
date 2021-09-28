const redocusaurus = [
  "redocusaurus",
  {
    specs: [
      {
        routePath: "/docs/openapi/",
        specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc/dist/generated/wechaty/puppet.swagger.json",
      },
      {
        routePath: "/docs/openapi@latest",
        specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc@latest/dist/generated/wechaty/puppet.swagger.json",
      },
      {
        routePath: "/docs/openapi@next",
        specUrl: "https://cdn.jsdelivr.net/npm/wechaty-grpc@next/dist/generated/wechaty/puppet.swagger.json",
      },
    ],
    theme: {
      primaryColor: '#1890ff',
      redocOptions: { hideDownloadButton: false },
    },
  },
]

module.exports = redocusaurus
