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
    }
  }
})
