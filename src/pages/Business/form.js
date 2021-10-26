// Table上方操作区域间距
import React, { useState } from 'react';
import {
	Layout,
	Card,
	List,
	Form,
	Text,
	TextArea,
	Input,
	Modal,
	Button,
} from 'tea-component';

// https://react-hook-form.com/api/useform/register
import { useForm } from 'react-hook-form';

const { Body, Content } = Layout;
const VALIDATE_MSG = {
	pleaseInput: '请输入',
	onlyAllowNumber: '请输入数字',
	moreThan0: '请输入大于0',
	allow1To10: '长度在 1 到 10 个字符',
};

export default (props) => {
	const [visible, setVisible] = useState(false);
	const {
		register,
		watch,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			// 大区名称
			whitelist_name: props.whitelist_name,
			whitelist_list: props.whitelist_list,
			cache_expire_days: props.cache_expire_days,
		},
	});
	const openModal = () => {
		setVisible(true);
	};
	const onSubmit = (data) => {
		console.log('onSubmit data', data);
		// const { whitelist_name } = data;
		// console.log("onSubmit", props.gameid, whitelist_name, isValid)
	};
	return (
		<Layout>
			<Body>
				<Content className="oit-layout--fixheader">
					<Content.Header title="表单验证（使用：react-hook-form）" />
					<Content.Body full>
						<Card style={{ marginBottom: 20 }}>
							<Card.Body title="说明">
								<List type="bullet">
									<List.Item>依赖：react-hook-form</List.Item>
									<List.Item>
										Demo中包含有：react-hook-form使用方法、验证逻辑（单个、多组验证）、提交信息
									</List.Item>
								</List>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body title="一个表单弹框">
								<Button type="link" onClick={openModal}>
									一个表单弹框
								</Button>
								<Modal
									visible={visible}
									caption="一个表单弹框"
									onClose={() => setVisible(false)}
								>
									<Modal.Body>
										<form
											style={{
												display: 'flex',
												flexDirection: 'column',
											}}
											onSubmit={handleSubmit(onSubmit)}
										>
											<Form>
												<Form.Item
													label="名称"
													required
													message={
														errors.whitelist_name &&
														'长度在 1 到 10 个字符'
													}
													status={
														errors.whitelist_name
															? 'error'
															: ''
													}
												>
													<Input
														size="full"
														{...register(
															'whitelist_name',
															{
																required: true,
																validate: (
																	value,
																) =>
																	value.length >
																		0 &&
																	value.length <=
																		10,
															},
														)}
														value={watch(
															'whitelist_name',
														)}
														onChange={(value) => {
															setValue(
																'whitelist_name',
																value,
																{
																	shouldValidate: true,
																},
															);
														}}
														placeholder="请填写名称"
													/>
												</Form.Item>
												<Form.Item
													required
													label="过期天数"
													message={
														errors.cache_expire_days &&
														VALIDATE_MSG[
															`${errors.cache_expire_days.type}`
														]
														// intl.formatMessage({ id: errors.cache_expire_days.type })
													}
													status={
														errors.cache_expire_days
															? 'error'
															: ''
													}
												>
													<Input
														size="full"
														autoComplete="off"
														{...register(
															'cache_expire_days',
															{
																// required: true,
																// validate: (value: any) => validateExpireDays(value),
																validate: {
																	pleaseInput:
																		(v) =>
																			v &&
																			v !==
																				'0', // 必填
																	onlyAllowNumber:
																		(v) =>
																			/^-?\d*\d*$/.test(
																				v,
																			), // 仅数字
																	moreThan0: (
																		v,
																	) =>
																		parseInt(
																			v,
																			10,
																		) > 0, // 正数
																},
															},
														)}
														value={watch(
															'cache_expire_days',
														)}
														onChange={(value) => {
															setValue(
																'cache_expire_days',
																value,
																{
																	shouldValidate: true,
																},
															);
														}}
														placeholder="数字、大于0"
													/>
												</Form.Item>
												<Form.Item label="用户列表">
													<TextArea
														size="full"
														{...register(
															'whitelist_list',
															{
																// required: true,
																// validate: (value) => value.length > 0 && value.length <= 20,
															},
														)}
														value={watch(
															'whitelist_list',
														)}
														onChange={(value) => {
															setValue(
																'whitelist_list',
																value,
																{
																	// shouldValidate: true,
																},
															);
														}}
														placeholder="请输入用户身份标识，多个用回车分开，最大支持200个用户"
													/>
													<Text
														theme="weak"
														reset
														style={{
															marginTop: 5,
															display: 'block',
														}}
													>
														50个字符以内，支持汉字、英文、标点符号、数字，不含转义符
													</Text>
												</Form.Item>
											</Form>
											<Form.Action>
												<Button
													type="primary"
													htmlType="submit"
												>
													提交
												</Button>
												<Button
													htmlType="button"
													onClick={() => {
														setVisible(false);
													}}
												>
													取消
												</Button>
											</Form.Action>
										</form>
									</Modal.Body>
								</Modal>
							</Card.Body>
						</Card>
					</Content.Body>
				</Content>
			</Body>
		</Layout>
	);
};
