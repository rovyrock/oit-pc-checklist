import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	history: { type: 'hash' },
	// hash: true,
	fastRefresh: {},
	runtimePublicPath: true,
	// base: '/',
	base: process.env.NODE_ENV === 'production' ? '/' : '/',
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputPath: 'docs',
	qiankun: {
		slave: {},
	},
	dva: {
		// hmr: true,
	},
	// 页面标题
	title: 'OIT PC Checklist',
	// 不引入antd，包括样式
	antd: false,
	chainWebpack(config, { webpack }) {},
});
