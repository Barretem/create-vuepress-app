module.exports = {
  title: 'blog',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/my-blog/', // 设置站点根路径
  repo: 'https://github.com/Barretem', // 添加 github 链接
  head: [
      ['link', { rel: 'icon', href: '/favicons.ico' }]
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
              title: 'vue',
              children: [
                  '/vue/one',
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
