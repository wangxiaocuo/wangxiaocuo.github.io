export default {
  lang: 'zh-CN',
  title: '王小错',
  description: '王小错的个人站点。',
  head: [['link', { rel: 'shortcut icon', href: '/logo.png' }]],
  markdown: {
    theme: 'dracula-soft'
  },
  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: '更新日期',
    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank">
        <img
          style="
            display: inline-block;
            margin-right: 4px;
            vertical-align: middle;
          "
          src="/beian.png">
        <span style="vertical-align: middle;">苏ICP备18016910号-3</span>
      </a>`,
      copyright: 'Copyright © 2018-present 王小错'
    },
    nav: [{ text: '博客', link: '/blog/18' }],
    sidebar: {
      '/blog/': [
        {
          text: '博客',
          items: [
            {
              text: 'JavaScript 定时器校准',
              link: '/blog/18'
            },
            {
              text: '使用 Husky + Commitlint 规范 Git 提交信息',
              link: '/blog/17'
            },
            {
              text: '浏览器 Console 接口的高级用法',
              link: '/blog/16'
            },
            {
              text: '复习一下 HTML 的 Meta 元素',
              link: '/blog/15'
            },
            {
              text: '用 Java 复刻 NodeJS 中已废弃的加密解密方法',
              link: '/blog/14'
            },
            {
              text: 'MacOS 安装星露谷物语模组',
              link: '/blog/13'
            },
            {
              text: 'Vue2.x 项目优化笔记',
              link: '/blog/12'
            },
            {
              text: 'JavaScript 判断数据类型',
              link: '/blog/11'
            },
            {
              text: 'CentOS7.x 安装 Java 1.8',
              link: '/blog/10'
            },
            {
              text: 'CentOS7.x 升级 gcc 版本',
              link: '/blog/9'
            },
            {
              text: 'Vue 2.x 中配置全局样式变量',
              link: '/blog/8'
            },
            {
              text: 'Vue2.x 渲染函数 & JXS',
              link: '/blog/7'
            },
            {
              text: 'MacOS 安装 nginx-1.18.0',
              link: '/blog/6'
            },
            {
              text: '前端开发中的日期格式',
              link: '/blog/5'
            },
            {
              text: '使用 PhotoShop CC 资源生成器“光速”切图',
              link: '/blog/4'
            },
            {
              text: 'MacOS 中 Oh-My-Zsh 的安装使用',
              link: '/blog/3'
            },
            {
              text: 'Git 中换行符带来的问题',
              link: '/blog/2'
            },
            {
              text: 'VSCode 代码片段配置',
              link: '/blog/1'
            }
          ]
        }
      ]
    }
  }
}
