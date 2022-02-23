# Create VitePress Blog
:classical_building: GitHub Pages site is currently being built from the [gh-pages](https://github.com/akram8/akram8.github.io/tree/gh-pages) branch
### Start
1. 创建并进入目录
```shell
mkdir vitepress
cd vitepress
```
2. 初始化目录及 index.md
```shell
yarn init
yarn add --dev vitepress
mkdir && echo '# Hello VitePress' > docs/index.md
```
3. 添加这些脚本到 package.json
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```
4. 本地启动服务
```shell
yarn docs:dev
```

### Config
没有配置，页面就很简单，用户没法导航。 在 docs 目录下创建 .vitepress 目录即可开始设置配置
```shell
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```
.vitepress/config.js 是配置 VitePress 站的必要的文件，其将导出一个 JavaScript 对象：
```js
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  nav: [{
    text: '',
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
```
