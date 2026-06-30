import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  lang: 'zh-CN',
  
  title: "devdocs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle/dev-docs/' }
    ],

    externalLinkIcon: true,

    editLink: {
      pattern: 'https://github.com/mcenahle/dev-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: {
      provider: 'local'
    },

    darkModeSwitchLabel: "浅色深色模式切换",
    lightModeSwitchTitle: "浅色模式开关",
    darkModeSwitchTitle: "深色模式开关",
    sidebarMenuLabel: "侧边栏菜单",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "菜单",
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
  }
})
