module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '步知公考社区是学习和交流氛围非常好的公务员考试论坛和公务员论坛，你可以在这里和公考领域厉害的大咖老师贴身学习，还可以认识更多志同道合的备考小伙伴，交流学习经验与备考故事' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
  },
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
    'http://ask.gk.buzhi.com/api',
    'http://localhost:3000/api'
  ],
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'index',
        path: '/',
        component: 'pages/index/index/p/_page/index.vue'
      })
    }
  }
}
