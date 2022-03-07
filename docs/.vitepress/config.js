module.exports = {
  lang: 'en-US',
  title: 'Hello, World!',
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
    // nav: [{
    //   text: 'aaa',
    //   link: ''
    // }],
    sidebar: [{
      text: 'Notes',
      link: '/guide/notes/index',
      children: [{
        text: 'Books',
        link: '/guide/notes/books/'
      }, {
        text: 'Git',
        link: '/guide/notes/git/'
      }, {
        text: 'JS',
        children: [{
          text: '常用方法',
          link: '/guide/notes/js/常用方法'
        }]
      }, {
        text: '产品相关',
        link: '/guide/product/',
        children: [{
          text: 'Axure',
          link: '/guide/product/axure/'
        }]
      }]
    }, {
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