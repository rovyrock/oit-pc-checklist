// Table上方操作区域间距
import React from 'react';
import {
	Layout,
	Card,
	List,
	Form,
	Input,
	TextArea,
	DatePicker,
} from 'tea-component';
import moment from 'moment';

const { Body, Content } = Layout;

export default (props) => {
	return (
		<Layout>
			<Body>
				<Content className="oit-layout--fixheader">
					<Content.Header title="样式重置需控制作用域" />
					<Content.Body full>
						<Card style={{ marginBottom: 20 }}>
							<Card.Body title="说明">
								<List type="bullet">
									<List.Item>
										注意控制重置样式的作用域，尤其在重置基础组件样式的时候
									</List.Item>
									<List.Item>
										重置样式后，需要自测，确定重置的样式不会影响其他地方
									</List.Item>
									<List.Item>
										对于基础组件样式的重置必须用业务类名包裹后，再进行重置，避免全局污染
									</List.Item>
								</List>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body title="样式重置（原来）">
								<Form>
									<Form.Item label="名称" required>
										<Input placeholder="请输入" size="l" />
									</Form.Item>
									<Form.Item label="备注信息">
										<TextArea
											placeholder="请输入"
											size="l"
										/>
									</Form.Item>
									<Form.Item label="截止日期">
										<DatePicker
											defaultValue={moment('2020-10-01')}
											onChange={(value) =>
												console.log(
													value.format('YYYY/MM/DD'),
												)
											}
											onOpenChange={(open) =>
												console.log(
													open ? 'open' : 'close',
												)
											}
											style={{ width: 420 }}
										/>
									</Form.Item>
								</Form>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body title="样式重置（重置后，作用域没控制好）">
								<Form className="customize-form">
									<Form.Item label="名称" required>
										<Input placeholder="请输入" size="l" />
									</Form.Item>
									<Form.Item label="备注信息">
										<TextArea
											placeholder="请输入"
											size="l"
										/>
									</Form.Item>
									<Form.Item label="截止日期">
										<DatePicker
											defaultValue={moment('2020-10-01')}
											onChange={(value) =>
												console.log(
													value.format('YYYY/MM/DD'),
												)
											}
											onOpenChange={(open) =>
												console.log(
													open ? 'open' : 'close',
												)
											}
										/>
									</Form.Item>
								</Form>
							</Card.Body>
						</Card>
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
};
