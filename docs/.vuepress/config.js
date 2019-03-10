module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      lang: 'ja',
      title: 'タイトル',
      description: '説明'
    }
  },
  markdown: {
    config: md => {
      md.options.linkify = true;
    }
  },
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'HELP', link: '/help' }],
    sidebarDepth: 2,
    sidebar: [['/', 'HOME'], 'archive'],
    displayAllHeaders: true,
    lastUpdated: 'Last Updated'
  }
};
