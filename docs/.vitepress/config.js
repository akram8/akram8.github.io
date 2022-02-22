module.exports = {
  lang: 'en-US',
  title: 'Hello, VitePress!',
  description: 'This is my first VitePress site',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // theme and its config
  // theme: '@vitepress/defaultTheme',
  themeConfig: {
    logo: '/favicon.ico',
    // logo: 'https://vuejs.org/images/logo.png',
    darkMode: true,
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    head: [{text: 'Guide', link: '/guide/'}],
    nav: [{
      text: 'aaa',
      link: ''
    }],
    sidebar: [{
      text: 'VitePress',
      link: './guide/index.md',
      children: [{
        text: 'step1',
        link: ''
      }, {
        text: 'step2',
        link: ''
      }]
    }]
  }
}