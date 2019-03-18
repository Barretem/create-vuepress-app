# 利用VuePress构建自己的知识体系

这是一个vuePress脚手架，去除了繁琐的安装，开箱即用。

## Table of Contents

* **[Introduction](#introduction)**
* **[Feature](#feature)**
* **[Install](#install)**
* **[Documentation](#documentation)**
* **[Reference](#reference)**
* **[License](#license)**

## Introduction

本脚手架能够快速生成一个VuePress网站，免除了较为繁琐的安装（踩坑）过程。接下来会详细而有快速介绍常用的API，满足大部分的需求（如果需要更加多的个性自定义，请结合脚手架，参考[VuePress的官方文档](https://vuepress.vuejs.org/zh/guide/)）

[⬆ Back to Top](#table-of-contents)

## Feature
- [ ] 支持部署到 Github pages

[⬆ Back to Top](#table-of-contents)

## Install

1、 将项目clone到本地
```sh
git clone https://github.com/Barretem/create-vuepress-app.git
```
2、 进入项目目录，安装对应的依赖
```sh
cd create-vuepress-app
yarn install
```
3、 启动项目
```sh
yarn run docs:dev
// 然后在浏览器中打开http://localhost:8080即可看到项目
```
4、 构建项目（当文件需要部署到服务器的时候使用）
```sh
yarn run docs:build
```

## Documentation

基本配置在项目代码里面都有说明，这里主要说明一下比较经常修改的配置项

### 头部导航栏
如果你需要修改头部导航栏，你需要在.vuepress/config.js文件中修改themeConfig.nav对象
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }, // text 为导航栏项显示的文字，link为跳转的路由
      {
        text: 'Languages',
        items: [ // 下拉项列表
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }, // 它将显示为一个 下拉列表
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/* 分组项列表 */] },
          { text: 'Group2', items: [/* 分组项列表 */] }
        ]
      }// 它将在 下拉列表 中设置分组
    ]
  }
}
```

### 侧边栏
侧边栏的配置需要跟docs下的文件路径相匹配

如以下文件路径：
```
-- vue // 文件夹名称
    -- README.md
    -- one.md
    -- two.md
-- css // 文件夹名称
    -- README.md
    -- three.md
    -- four.md
```

则对应的配置应该为：（children可多层进行嵌套）
```js
// 为以下路由添加侧边栏
themeConfig: {
    sidebar: {
      '/vue/': [
          {
              title: 'vue', // 显示的节点名称
              children: [
                  ['/vue/one', '我是子节点名称，如果不设置的话，将会从MD文件中读出标题'], // 子节点，不设置的话，将会从MD文件中读出标题
                  '/vue/two'
              ]
          }
      ],
      '/css/': [
          {
              title: 'css',
              children: [
                  '/css/three',
                  '/css/four'
              ]
          }
      ]
    }
}
```

[⬆ Back to Top](#table-of-contents)

## Reference

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
