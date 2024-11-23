import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一勺时光",
  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '迭代日志', link: '/version' }
    ],

    sidebar: {
      '/': [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '迭代日志',
          link: '/version',
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZRMYDYCG' }
    ],

    footer: {
      message: 'Released under the MIT License.'
    }
  }
})
