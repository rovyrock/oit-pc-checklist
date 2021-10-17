import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  fastRefresh: {},
  runtimePublicPath: true,
  // base: '/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  qiankun: {
    slave: {},
  },
  dva: {
    // hmr: true,
  },
  // 页面标题
  title: 'OIT PC Template',
  // 不引入antd，包括样式
  antd: false,
  chainWebpack(config, { webpack }) {},
});
