// 业务场景：Card内部上方是Tabs组件
import React, { useState, useEffect } from 'react';
import {
	Layout,
	Card,
	List,
	Button,
	Tabs,
	TabPanel,
	Segment,
	Table,
	StatusTip,
	Justify,
} from 'tea-component';
// table数据模拟
import { TableData } from '@/data';
const { pageable, autotip } = Table.addons;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tabs = [
	{ id: 'android', label: '基本信息' },
	{ id: 'ios', label: '弹性网卡' },
	{ id: 'windows', label: '监控信息', disabled: true },
	{ id: 'android2', label: '基本信息2' },
	{ id: 'ios2', label: '弹性网卡2' },
	{ id: 'windows2', label: '监控信息2' },
	// { id: 'android3', label: '基本信息3' },
	// { id: 'ios3', label: '弹性网卡3' },
	// { id: 'windows3', label: '监控信息3' },
	// { id: 'android4', label: '基本信息4' },
	// { id: 'ios4', label: '弹性网卡4' },
	// { id: 'windows4', label: '监控信息4' },
];
const STATUS = [
	{ text: '全部', value: '1' },
	{ text: '待提单', value: '2' },
	{ text: '立项中', value: '3' },
	{ text: '进行中', value: '4' },
	{ text: '已完成', value: '5' },
];

const { Body, Content } = Layout;

export default (props) => {
	const [activeId, setActiveId] = useState('android');
	const [segmentStatus, setSegmentStatus] = useState(1);
	const [status, setStatus] = useState('none');
	const [total, setTotal] = useState(0);
	const [data, setData] = useState([]);
	const [getDataSuccess, setGetDataSuccess] = useState(false);

	const getData = async () => {
		setStatus('loading');
		await sleep(3000).then(() => {
			setStatus('none');
			setGetDataSuccess(true);
			setData(TableData.data.list);
			setTotal(TableData.data.total);
			if (TableData.data.list.length === 0) setStatus('empty');
		});
	};
	useEffect(() => {
		// 请求数据
		getData();
	}, []);

	return (
		<Layout>
			<Body>
				<Content className="oit-layout--fixheader">
					<Content.Header title="业务场景 卡片内顶部是Tabs组件" />
					<Content.Body full>
						<Card>
							<Card.Body title="说明：下面是一个在Card内嵌一个Tabs的案例">
								<List type="bullet">
									<List.Item>
										为了达到跟设计给一致，需要加一个类(例如下面例子的：customize-card__tabs)进行fixed，主要是模块的间距而已
									</List.Item>
									<List.Item>
										其他的地方都是用现有的组件库拼的
									</List.Item>
								</List>
							</Card.Body>
						</Card>
						<Card>
							<Tabs
								tabs={tabs}
								activeId={activeId}
								onActive={(tab) => {
									setActiveId(tab.id);
								}}
								className="customize-card__tabs"
							></Tabs>
							{tabs.map((tab) => {
								return (
									tab.id === activeId && (
										<TabPanel
											key={tab.id}
											id={activeId}
											style={{ padding: '20px 0 0' }}
										>
											<Table.ActionPanel>
												<Justify
													left={
														<>
															<Segment
																value={segmentStatus.toString()}
																onChange={(
																	value,
																) =>
																	setSegmentStatus(
																		parseInt(
																			value,
																			10,
																		),
																	)
																}
																options={STATUS}
																style={{
																	paddingLeft: 20,
																}}
															/>
														</>
													}
												/>
											</Table.ActionPanel>
											{getDataSuccess ? (
												<Table
													verticalTop={true}
													records={data}
													recordKey="key"
													columns={[
														{
															key: 'version_id',
															header: '版本ID',
															width: 100,
															render: (cvm) => (
																<span>
																	{
																		cvm.version_id
																	}
																</span>
															),
														},
														{
															key: 'name',
															header: '版本名称',
															// width: 140,
															render: (cvm) => (
																<span>
																	{cvm.name}
																</span>
															),
														},
														{
															key: 'commit_time',
															header: '提交时间',
															width: 240,
															render: (cvm) => (
																<span>
																	{
																		cvm.commit_time
																	}
																</span>
															),
														},
														{
															key: 'ip',
															header: '操作',
															align: 'left',
															width: 120,
															render: (
																record,
															) => (
																<>
																	<Button type="link">
																		编辑
																	</Button>
																	<Button type="link">
																		移除
																	</Button>
																</>
															),
														},
													]}
													addons={[
														total &&
															pageable({
																pageSizeVisible:
																	data.length >
																	10,
																pageIndexVisible:
																	data.length >
																	10,
																jumpVisible:
																	data.length >
																	10,
																endJumpVisible:
																	data.length >
																	10,
															}),
														autotip({
															className:
																'oit-status',
														}),
													]}
												/>
											) : (
												<StatusTip
													className="oit-status"
													status="loading"
													loadingText={null}
												/>
											)}
										</TabPanel>
									)
								);
							})}
						</Card>
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
};
