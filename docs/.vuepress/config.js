module.exports = {
  title: 'my-blog',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/my-blog/', // 设置站点根路径
  repo: 'https://github.com/Barretem', // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'vue', link: '/vue/' },
      { text: 'css', link: '/css/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    // 路由路径应该跟docs文件夹目录的路径一致
    sidebar: [
        {
            title: 'vue',
            children: [
                '/vue/one',
                '/vue/two'
            ]
        },
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
