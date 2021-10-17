module.exports = {
  default: 'theme-default',
  themes: [
    {
      type: 'theme-default',
      name: 'cn',
      alias: '浅色版',
      src: 'src/assets/scss',
      output: 'src/assets/css',
      variables: ['src/assets/scss/tokens/_variables-theme-cn.scss'],
    },
  ],
};
