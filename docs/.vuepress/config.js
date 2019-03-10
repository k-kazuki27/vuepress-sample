module.exports = {
    locales: {
      '/': {
        lang: 'ja',
        title: 'タイトル',
        description: '説明'
      }
    },
    markdown: {
      config: (md) => {
        md.options.linkify = true
      }
    },
    themeConfig: {
        nav: [],
        sidebarDepth: 2,
        sidebar: [
          ["/", "HOME"],
          "archive"
        ],
        lastUpdated: 'Last Updated'
    }
}