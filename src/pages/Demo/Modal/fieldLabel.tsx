import React, { useState } from 'react';

import {
  Form,
  Button,
  Modal,
  CheckboxGroup,
  Checkbox,
  Select,
  SelectMultiple,
  Input,
  Icon,
  RegionSelect,
  RegionPanel,
  RegionOption,
  Text,
} from 'tea-component/lib';

const options = [
  { value: 'sort1', text: '分类1' },
  { value: 'sort2', text: '分类2' },
  { value: 'sort3', text: '分类3' },
  { value: 'sort4', text: '分类4', disabled: true },
  { value: 'sort5', text: '分类5' },
  { value: 'sort6', text: '分类6' },
];
const options2 = [
  { groupKey: 'personalinfo', value: 'sort1', text: '分类1' },
  { groupKey: 'personalinfo', value: 'sort1-1', text: '分类1-1' },
  { groupKey: 'personalinfo', value: 'sort1-2', text: '分类1-2' },
  { groupKey: 'deviceinfo', value: 'sort2', text: '分类2' },
  { groupKey: 'deviceinfo', value: 'sort2-1', text: '分类2-1' },
  { groupKey: 'manageinfo', value: 'sort3', text: '分类3' },
  { groupKey: 'manageinfo', value: 'sort3-1', text: '分类3-1' },
  { groupKey: 'manageinfo', value: 'sort3-2', text: '分类3-2' },
];
const options3 = [
  { value: 'leavel1', text: '普通' },
  { value: 'leavel2', text: '敏感' },
  { value: 'leavel3', text: '高级' },
];
const groups = {
  personalinfo: '个人信息',
  deviceinfo: '设备信息',
  manageinfo: '管理信息',
};
const options4 = [
  { text: '匿名化', value: 'way1' },
  { text: '加密', value: 'way2' },
  { text: '脱敏', value: 'way3' },
  { text: '控制访问', value: 'way4' },
  { text: '限制访问', value: 'way5' },
  { text: '开放访问', value: 'way6' },
];

export default function ModalDemoExample(props: any) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const [region, setRegion] = useState('');
  const { Head, Column, Group } = RegionPanel;

  return (
    <>
      <Button type="primary" onClick={open} style={{ marginLeft: 20 }}>
        字段标注
      </Button>
      <Modal
        visible={visible}
        caption="字段标注"
        onClose={close}
        className="modal-form"
      >
        <Modal.Body>
          <Form>
            <Form.Item label="数据内容分类">
              <Select
                size="full"
                type="simulate"
                searchable
                boxSizeSync
                appearance="button"
                options={options}
                placeholder="请选择数据内容分类标签"
              />
            </Form.Item>
            <Form.Item label="数据隐私分类" className="dropdown-customize">
              {/* <Input
              size="full"
              placeholder="请选择数据隐私分类"
            />
            <Icon type="arrowdown" style={{ position: "absolute",top: 13, right: 4 }}/> */}
              <RegionSelect
                value={region}
                onChange={(value) => setRegion(value)}
                size="full"
                boxSizeSync
                boxClassName="dropdown-customize-option"
              >
                <RegionPanel>
                  <Head>
                    <RegionOption value="">请选择数据隐私分类</RegionOption>
                  </Head>
                  <Column>
                    <Group name="个人信息">
                      <RegionOption value="info1">背景调差</RegionOption>
                      <RegionOption value="info2">地理位置</RegionOption>
                      <RegionOption value="info3">就业信息</RegionOption>
                      <RegionOption value="info4">生物信息</RegionOption>
                      <RegionOption value="info5">政府识别码</RegionOption>
                      <RegionOption value="info6">家庭信息</RegionOption>
                      <RegionOption value="info7">浏览信息</RegionOption>
                      <RegionOption value="info8">健康保险信息</RegionOption>
                      <RegionOption value="info9">金融信息</RegionOption>
                      <RegionOption value="info10">商业信息</RegionOption>
                      <RegionOption value="info11">个人基础信息</RegionOption>
                      <RegionOption value="info12">遗传信息</RegionOption>
                      <RegionOption value="info13">联系信息</RegionOption>
                      <RegionOption value="info14">专业经验与会员</RegionOption>
                      <RegionOption value="info15">社交信息</RegionOption>
                      <RegionOption value="info16">教育与技能</RegionOption>
                      <RegionOption value="info17">感官与电子信息</RegionOption>
                      <RegionOption value="info18">差旅信息</RegionOption>
                      <RegionOption value="info19">账号信息</RegionOption>
                    </Group>
                    <Group name="设备信息">
                      <RegionOption value="info20">硬件配置</RegionOption>
                      <RegionOption value="info21">硬件配置</RegionOption>
                      <RegionOption value="info22">硬件配置</RegionOption>
                    </Group>
                    <Group name="管理信息">
                      <RegionOption value="info23">财务信息</RegionOption>
                      <RegionOption value="info24">运营信息</RegionOption>
                      <RegionOption value="info25">审计信息</RegionOption>
                    </Group>
                  </Column>
                </RegionPanel>
              </RegionSelect>
              <div></div>
            </Form.Item>
            <Form.Item label="数据敏感分级">
              <Select
                type="simulate"
                appearance="button"
                boxSizeSync
                options={options3}
                size="full"
                placeholder="请选择数据敏感分级"
              />
            </Form.Item>
            <Form.Item label="处理方式分类" className="inputdropdown-customize">
              {/* <SelectMultiple
                placeholder="请选择处理方式标签，支持多选"
                appearance="button"
                boxStyle={{ width:  358 }}
                clearable
                size="full"
                options={[
                  { value: "way1", text: "匿名化" },
                  { value: "way2", text: "加密" },
                  { value: "way3", text: "脱敏" },
                  { value: "way4", text: "控制访问" },
                  { value: "way5", text: "限制访问" },
                  { value: "way6", text: "开放访问" },
                ]}
                allOption={{
                  value: "all",
                  text: "全选",
                }}
              /> */}
              <div className="inputdropdown-customize-box">
                <Input
                  size="full"
                  placeholder="请选择处理方式标签，支持多选"
                  style={{ cursor: 'pointer' }}
                />
                <div className="inputdropdown-customize-inner">
                  <ul>
                    <li>
                      匿名化
                      <Icon type="close" size="s" />
                    </li>
                    <li>
                      加密
                      <Icon type="close" size="s" />
                    </li>
                    <li>
                      控制访问
                      <Icon type="close" size="s" />
                    </li>
                  </ul>
                </div>
              </div>
              <Icon
                type="arrowdown"
                style={{ position: 'absolute', top: 6, right: 4 }}
              />
              <div className="inputdropdown-customize-option">
                <a href="">清空选择</a>
                <Checkbox.Group layout="column" style={{ marginTop: 8 }}>
                  <Checkbox name="type1">匿名化</Checkbox>
                  <Checkbox name="type2">加密</Checkbox>
                  <Checkbox name="type3">脱敏</Checkbox>
                  <Checkbox name="type4">控制访问</Checkbox>
                  <Checkbox name="type5">限制访问</Checkbox>
                  <Checkbox name="type6">开放访问</Checkbox>
                </Checkbox.Group>
              </div>
            </Form.Item>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="primary" onClick={close}>
            确定
          </Button>
          <Button type="weak" onClick={close}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
