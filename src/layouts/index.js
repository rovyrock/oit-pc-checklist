// 这里是页面要展示的公共部分的内容
// 给个例子，全部注释掉，因为不确定要引入什么版本的tea

import React, { useState, useEffect } from 'react';
import { Layout } from 'tea-component';
import NavHeader from '@/components/header';
import LeftMenu from '@/components/leftMenu';
// 左侧菜单图标
import { createFromIconfontCN } from '@ant-design/icons';
const SvgIcon = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_2452837_5z70tjgmtk2.js', // 在 iconfont.cn 上生成
});

const { Body, Header, Content, Sider } = Layout;

// 直接在这里写路由列表
const routers = [
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-databrain-introdution"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">Framework 框架层</div>
			</div>
		),
		subMenu: [
			{
				title: '框架介绍',
				to: '/Framework/introduce',
			},
			{
				title: '左侧菜单栏',
				to: '/Framework/menu',
			},
		],
	},
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-gdos-deployment"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">Layout 右侧常见布局</div>
			</div>
		),
		tag: '',
		subMenu: [
			{
				title: '右栏标题置顶',
				to: '/Demo/Framework/fixheader',
			},
			{
				title: '右栏标题置顶带Tabs',
				to: '/Demo/Framework/fixheadertab',
			},
			{
				title: '右栏上下固定',
				to: '/Demo/Framework/verticalFixed',
			},
			{
				title: '右栏内容两栏布局',
				to: '/Demo/Framework/twoColumnLayout',
			},
			{
				title: '右栏内容加载中',
				to: '/Demo/Framework/loading',
				className: 'disabled',
			},
		],
	},
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-rule"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">Table 相关</div>
			</div>
		),
		subMenu: [
			{
				title: 'Table 上方操作区域间距',
				to: '/Table/tablePanel',
			},
			{
				title: 'Table 操作项太多',
				to: '/Table/tooManyActions',
			},
			{
				title: 'Table 字段对齐方式',
				to: '/Table/align',
			},
			{
				title: 'Table 数据为空',
				to: '/Table/empty',
			},
			{
				title: 'Table 加载中',
				to: '/Table/loading',
			},
			{
				title: 'Table 数据小于1页',
				to: '/Table/lessThan10',
			},
			{
				title: 'Table 带选择/过滤',
				to: '/Table/tableFilter',
			},
			{
				title: 'Table 固定列',
				to: '/Table/fixedColumn',
			},
		],
	},
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-dmcs-apiManagement"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">Component 特殊用法</div>
			</div>
		),
		tag: '',
		subMenu: [
			{
				title: 'Bubble 气泡',
				to: '/Tea/Bubble',
			},
			{
				title: 'notification 通知',
				to: '/Tea/Notification',
			},
		],
	},
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-rule"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">Style 样式相关</div>
			</div>
		),
		tag: '',
		subMenu: [
			{
				title: '样式重置需控制作用域',
				to: '/Style/resetScope',
			},
		],
	},
	{
		title: (
			<div className="menu-item">
				<SvgIcon
					type="svg-icon-menu-maple-globalconfig"
					className="svg-icon menu-item-icon"
				/>
				<div className="menu-item-text">业务场景参考</div>
			</div>
		),
		subMenu: [
			{
				title: '卡片顶部带Tabs页签',
				to: '/Business/tabs',
			},
			{
				title: '表单验证 react-hook-form',
				to: '/Business/form',
			},
		],
		className: 'disabled',
	},
];

export default (props) => {
	const [withSide, setWithSide] = useState(true);
	useEffect(() => {
		window.scrollTo(0, 0);
		const matches = props.location.pathname.match(
			/\/enterApp|\/enterapp|\/noPermission|\/nopermission/g,
		);
		if (matches !== null && matches.length > 0) {
			setWithSide(false);
		} else {
			setWithSide(true);
		}
	}, [props.location.pathname]);
	return (
		<Layout>
			<Header>
				<NavHeader />
			</Header>
			<Body>
				{withSide && (
					<Sider>
						<LeftMenu
							menuList={routers}
							menuTitle="IEGG项目Checklist（PC）"
							defaultSubSelected="0"
							defaultSelected="0"
						/>
					</Sider>
				)}
				<Content>{props.children}</Content>
			</Body>
		</Layout>
	);
};
