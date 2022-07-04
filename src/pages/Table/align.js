// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import {
	Layout,
	Card,
	Table,
	Button,
	List,
	Justify,
	SearchBox,
	StatusTip,
} from 'tea-component/lib';
import { alignData } from '@/data';

const { Body, Content } = Layout;
const { pageable, autotip } = Table.addons;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default () => {
	const [, setStatus] = useState('none');
	const [total, setTotal] = useState(0);
	const [data, setData] = useState([]);
	const [getDataSuccess, setGetDataSuccess] = useState(false);

	const getData = async () => {
		setStatus('loading');
		await sleep(1000).then(() => {
			setStatus('none');
			console.log(alignData.data);
			setData(alignData.data.list);
			setTotal(alignData.data.list.length);
			setGetDataSuccess(true);
			if (alignData.data.list.length === 0) setStatus('empty');
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
					<Content.Header title="Table 字段对齐方式" />
					<Content.Body full>
						<Card style={{ marginBottom: 20 }}>
							<Card.Body title="说明">
								<List type="bullet">
									<List.Item>
										Table字段对齐方式 第一栏左对齐
									</List.Item>
									<List.Item>
										Table字段对齐方式
										最后一栏右对齐；如果是带操作的、动态的字段可以左对齐）
									</List.Item>
									<List.Item>
										Table字段对齐方式
										数量右对齐（需区分数量和数字，数量需要右对齐，数字不一定需要，如年龄等）
									</List.Item>
								</List>
							</Card.Body>
						</Card>
						<Table.ActionPanel>
							<Justify
								left={
									<>
										<Button type="primary">新建</Button>
										<Button>开机</Button>
									</>
								}
								right={
									<>
										<SearchBox />
										<Button icon="setting" />
										<Button icon="refresh" />
										<Button icon="download" />
									</>
								}
							/>
						</Table.ActionPanel>
						<Card>
							{getDataSuccess ? (
								<Table
									verticalTop={true}
									records={data}
									recordKey="key"
									columns={[
										{
											key: 'businessId',
											header: '业务ID',
											width: 180,
											render: (cvm) => (
												<span>{cvm.businessId}</span>
											),
										},
										{
											key: 'businessName',
											header: '业务名称',
											width: 140,
											render: (cvm) => (
												<span>{cvm.businessName}</span>
											),
										},
										{
											key: 'roleCount',
											header: '角色数量',
											width: 140,
											align: 'right',
											render: (cvm) => (
												<span>{cvm.roleCount}</span>
											),
										},

										{
											key: 'ip',
											header: '操作',
											align: 'left',
											width: 180,
											render: (record) => (
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
													data.length > 10,
												pageIndexVisible:
													data.length > 10,
												jumpVisible: data.length > 10,
												endJumpVisible:
													data.length > 10,
											}),
										autotip({
											className: 'oit-status',
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
						</Card>
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
};
