import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一勺时光",
  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '迭代日志', link: '/version' },
      {
        text: '前端开发基础',
        items: [
          {
            text: 'TypeScript', 
            link: '/basic/Typescript/index.md'
          },
          {
            text: 'JavaScript', 
            link: '/basic/JavaScript/index.md'
          },
          {
            text: 'Node.js',
            items: [
              {
                text: 'Express',
                link: '/basic/Node/Express/index.md'
              },
              {
                text: 'Koa',
                link: '/basic/Node/Koa/index.md'
              },
              {
                text: 'Nest',
                link: '/basic/Node/Nest/index.md'
              },
            ]
          },
          {
            text: 'React',
            link: '/basic/React/index.md'
          },
          {
            text: 'Vue.js',
            link: '/basic/Vue/index.md'
          },
          {
            text: 'Vite',
            link: '/basic/Vite/index.md'
          },
          {
            text: 'SSR',
            items: [
              {
                text: 'Nuxt.js',
                link: '/basic/SSR/Nuxt/index.md'
              },
              {
                text: 'Next.js',
                link: '/basic/SSR/Next/index.md'
              }
            ]
          },
        ]
      },
      { text: '前端开发日常', link: '/daily/index.md' },
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
        },
        {
          text: '前端开发日常',
          items: [
          ]
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
