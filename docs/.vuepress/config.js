module.exports = {
  title: 'blog',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/my-blog/', // 设置站点根路径
  repo: 'https://github.com/Barretem', // 添加 github 链接
  head: [
      ['link', { rel: 'icon', href: '/favicons.ico' }] // 在spa应用头部加入link标签
  ],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'vue', link: '/vue/' },
      { text: 'css', link: '/css/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'Barretem', link: 'https://github.com/Barretem' },
          { text: 'Barretem', link: 'https://github.com/Barretem' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
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
}
