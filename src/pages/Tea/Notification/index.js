// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import {
	Layout,
	Card,
	Text,
	Button,
	List,
	Icon,
	notification,
} from 'tea-component';

const { Body, Content } = Layout;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (props) => {
	return (
		<Layout>
			<Body>
				<Content className="oit-layout--fixheader">
					<Content.Header title="通知 notification" />
					<Content.Body full>
						<Card style={{ marginBottom: 20 }}>
							<Card.Body title="说明">
								<List type="bullet">
									<List.Item>
										Tea操作提示，有Message（提示） 和
										notification（通知）{' '}
										<Text theme="danger">
											IEGG统一使用notification
										</Text>
									</List.Item>
									<List.Item>
										IEGG的notification只使用内容参数description，其他参数不使用（title、footer、extra）
									</List.Item>
									<List.Item>
										默认只有三种（成功notification.success、失败notification.error、警告notification.warning），
										IEGG的扩展了一种默认的，在notification.warning的基础加上类名oit-notification--normal
									</List.Item>
								</List>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body title="notification">
								<Button
									style={{ marginRight: 20 }}
									onClick={() =>
										notification.success({
											description:
												'文案不限长度，但是展示最大哦显示两行折行的末尾处显示折行的末尾处显示折行的末尾处显示折折行的末尾处显示折折行的末尾处',
										})
									}
								>
									Success
								</Button>
								<Button
									style={{ marginRight: 20 }}
									onClick={() =>
										notification.warning({
											description:
												'文案不限长度，但是展示最大哦显示两行折行的末尾处显示折行的末尾处显示折行的末尾处显示折折行的末尾处显示折折行的末尾处',
										})
									}
								>
									Warn
								</Button>
								<Button
									style={{ marginRight: 20 }}
									onClick={() =>
										notification.error({
											description:
												'文案不限长度，但是展示最大哦显示两行折行的末尾处显示折行的末尾处显示折行的末尾处显示折折行的末尾处显示折折行的末尾处',
										})
									}
								>
									Error
								</Button>
								<Button
									style={{ marginRight: 20 }}
									onClick={() =>
										notification.warning({
											className:
												'oit-notification--normal',
											description:
												'文案不限长度，但是展示最大哦显示两行折行的末尾处显示折行的末尾处显示折行的末尾处显示折折行的末尾处显示折折行的末尾处',
										})
									}
								>
									Normal
								</Button>
								<Button
									style={{ marginRight: 20 }}
									onClick={() => {
										notification.warning({
											className:
												'oit-notification--normal',
											duration: 3000,
											description: (
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
													}}
												>
													<Icon
														type="loading"
														style={{ marginTop: 0 }}
													/>
													正在导出
												</div>
											),
										});
									}}
								>
									Normal - Loading
								</Button>
							</Card.Body>
						</Card>
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
};
