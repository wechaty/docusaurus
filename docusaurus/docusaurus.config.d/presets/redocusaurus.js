const redocusaurus = [
  "redocusaurus",
  {
    specs: [
      {
        route: "/docs/openapi/",
        spec: "https://cdn.jsdelivr.net/npm/wechaty-grpc/dist/esm/out/wechaty/puppet.swagger.json",
      },
      {
        route: "/docs/openapi@latest",
        spec: "https://cdn.jsdelivr.net/npm/wechaty-grpc@latest/dist/esm/out/wechaty/puppet.swagger.json",
      },
      {
        route: "/docs/openapi@next",
        spec: "https://cdn.jsdelivr.net/npm/wechaty-grpc@next/dist/esm/out/wechaty/puppet.swagger.json",
      },
    ],
    theme: {
      primaryColor: '#1890ff',
      redocOptions: { hideDownloadButton: false },
    },
  },
]

module.exports = redocusaurus
