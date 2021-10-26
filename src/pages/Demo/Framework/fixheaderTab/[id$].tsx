import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
	Tabs,
	TabPanel,
	Layout,
	Card,
	Form,
	InputAdornment,
	Input,
	Tree,
} from 'tea-component';

const tabs = [
	{ id: 'android', label: '基本信息' },
	{ id: 'ios', label: '弹性网卡' },
	{ id: 'windows', label: '监控信息' },
	{ id: 'test', label: '测试', disabled: true },
];
const { Body, Content } = Layout;
export default function App(props) {
	// console.log(props);
	let id = props.match.params?.id || 'android';
	const [activeId, setActiveId] = useState(id || 'android');
	useEffect(() => {
		// 切换/默认为Andriod
		setActiveId(id || 'android');
	}, [id]);

	return (
		<Layout>
			<Body>
				<Content className="oit-layout--fixtabs">
					<Content.Header title="标题+Tabs选项卡置顶 (oit-layout--fixtabs)">
						<Tabs
							tabs={tabs}
							activeId={activeId}
							onActive={(tab) => {
								setActiveId(tab.id);
							}}
						></Tabs>
					</Content.Header>
					<Content.Body full>
						<TabContainer tabs={tabs} topicId={activeId} />
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
}

// tab内容
function TabContainer(props: any) {
	const { tabs, topicId } = props;
	return (
		<>
			{tabs.map((tab: any) => {
				return (
					tab.id === topicId && (
						<TabPanel
							key={tab.id}
							id={tab.id}
							style={{ padding: 0 }}
						>
							{tab.id === 'android' ? (
								<TabAndroid />
							) : tab.id === 'ios' ? (
								<TabIos />
							) : (
								<TabWindows />
							)}
						</TabPanel>
					)
				);
			})}
		</>
	);
}

function TabAndroid(props) {
	const records = getMockRecords();
	const [paymode, setPaymode] = useState([]);
	// 当前选中的消息
	const [selectedKeys, setSelectedKeys] = useState([]);
	// 当前展开的产品
	const [expandedKeys, setExpandedKeys] = useState([
		// 默认展开第一个产品
		String(records[0].fType),
		String(records[1].fType),
		String(records[2].fType),
		String(records[3].fType),
	]);
	const expandedSet = new Set(expandedKeys);
	const collectOptions = [
		{
			name: '',
			label: 'FPS采集',
			list: [
				{
					label: 'FPS相关字段1',
				},
				{
					label: 'FPS相关字段2',
				},
			],
		},
		{
			name: '',
			label: '内容采集',
			list: [
				{
					label: '内容采集相关字段1',
				},
				{
					label: '内容采集相关字段2',
				},
			],
		},
		{
			name: '',
			label: 'RTT采集',
			list: [
				{
					label: 'RTT采集相关字段1',
				},
				{
					label: 'RTT采集相关字段2',
				},
			],
		},
	];

	/**
	 * 生成子孙关系信息
	 */
	const getRecordRelations = useCallback((records) => {
		/**
		 * @type {import('tea-component/lib/checktree').CheckTreeRelation}
		 */
		const relations: any = {};
		for (const record of records) {
			for (const msg of record.msgList) {
				relations[msg.msgType] = record.fType;
			}
		}
		return relations;
	}, []);

	const relations = useMemo(
		() => getRecordRelations(records),
		[getRecordRelations],
	);
	// console.log('records', relations, records, getRecordRelations);
	return (
		<>
			<Card>
				<Card.Body title="字段采集开关">
					<Form>
						<Form.Item label="FPS采集">
							<TreeExample />
						</Form.Item>
						<Form.Item label="内容采集">
							<TreeExample />
						</Form.Item>
						<Form.Item label="RTT采集">
							<TreeExample />
						</Form.Item>
					</Form>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body title="字段采集频率">
					<Form>
						<Form.Item label="RTT采集频率">
							<InputAdornment after="秒">
								<Input placeholder="请输入秒数" size="s" />
							</InputAdornment>
						</Form.Item>
						<Form.Item label="RTT采集频率">
							<InputAdornment after="秒">
								<Input placeholder="请输入秒数" size="s" />
							</InputAdornment>
						</Form.Item>
						<Form.Item label="RTT采集频率">
							<InputAdornment after="秒">
								<Input placeholder="请输入秒数" size="s" />
							</InputAdornment>
						</Form.Item>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
}

function TabWindows(props) {
	return (
		<>
			<Card>
				<Card.Body title="图标" subtitle="(16*16)">
					hello Windows
				</Card.Body>
			</Card>
		</>
	);
}

function TabIos(props) {
	return (
		<>
			<Card>
				<Card.Body title="图标" subtitle="(16*16)">
					hello IOS
				</Card.Body>
			</Card>
		</>
	);
}

function TreeExample() {
	const [selectIds, setSelectIds] = useState(['0-0-0-1']);
	return (
		<Tree
			className="oit-tree--select"
			selectable
			selectedIds={selectIds}
			onSelect={(value, context) => {
				console.log(value, context);
				setSelectIds(value);
			}}
			defaultExpandedIds={['0-0-0', '0-0-1']}
		>
			<Tree.Node id="0-0-0" content="0-0-0">
				<Tree.Node id="0-0-0-1" content="0-0-0-1" />
				<Tree.Node id="0-0-0-2" content="0-0-0-2" />
			</Tree.Node>
			<Tree.Node id="0-0-1" content="0-0-1">
				<Tree.Node id="0-0-1-1" content="0-0-1-1" />
				<Tree.Node id="0-0-1-2" content="0-0-1-2" />
			</Tree.Node>
		</Tree>
	);
}

/**
 * 模拟数据
 */
function getMockRecords() {
	return [
		{
			name: '财务消息',
			displayWeight: 1000,
			msgList: [
				{
					msgType: 213,
					fType: 106,
					name: '账户欠费通知',
				},
				{
					msgType: 268,
					fType: 106,
					name: '余额预警通知',
				},
				{
					msgType: 215,
					fType: 106,
					name: '账户提现通知',
				},
				{
					msgType: 310,
					fType: 106,
					name: '账单出账通知',
				},
			],
			fType: '106',
		},
		{
			name: '产品消息',
			displayWeight: 900,
			msgList: [
				{
					msgType: 217,
					fType: 103,
					name: '产品到期、回收通知',
				},
				{
					msgType: 219,
					fType: 103,
					name: '产品自动续费通知',
				},
				{
					msgType: 283,
					fType: 103,
					name: 'CDM云数据迁移消息通知',
				},
				{
					msgType: 208,
					fType: 103,
					name: 'CDN相关通知',
				},
				{
					msgType: 294,
					fType: 103,
					name: '产品服务相关通知',
				},
				{
					msgType: 267,
					fType: 103,
					name: 'HTTPDNS相关通知',
				},
				{
					msgType: 292,
					fType: 103,
					name: 'DNSPod邮件通知',
				},
				{
					msgType: 233,
					fType: 103,
					name: '天御业务安全防护相关通知',
				},
				{
					msgType: 269,
					fType: 103,
					name: '事件告警通知',
				},
				{
					msgType: 309,
					fType: 103,
					name: '工单服务通知',
				},
				{
					msgType: 222,
					fType: 103,
					name: 'SSL证书相关通知',
				},
				{
					msgType: 232,
					fType: 103,
					name: '官网服务通知',
				},
				{
					msgType: 256,
					fType: 103,
					name: 'URL安全解决方案',
				},
				{
					msgType: 264,
					fType: 103,
					name: '渠道服务通知',
				},
				{
					msgType: 279,
					fType: 103,
					name: '证书两码发放',
				},
				{
					msgType: 302,
					fType: 103,
					name: '云市场服务通知',
				},
			],
			fType: '103',
		},
		{
			name: '安全消息',
			displayWeight: 800,
			msgList: [
				{
					msgType: 207,
					fType: 104,
					name: '安全事件通知',
				},
				{
					msgType: 303,
					fType: 104,
					name: '内容违规通知',
				},
			],
			fType: '104',
		},
		{
			name: '腾讯云动态',
			displayWeight: 700,
			msgList: [
				{
					msgType: 305,
					fType: 102,
					name: '云+社区相关通知',
				},
				{
					msgType: 211,
					fType: 102,
					name: '活动通知',
				},
			],
			fType: '102',
		},
	];
}
