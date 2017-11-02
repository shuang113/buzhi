module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'buzhi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '步知社区' }
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
    // vendor: ['axios'],
  },
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'index',
        path: '/',
        component: 'pages/index/index/p/_page'
      })
    }
  }
}
