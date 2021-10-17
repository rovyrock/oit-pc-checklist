import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Table, Button, Card, Dropdown, List } from 'tea-component/lib';

import Table2 from './TabPanel01';
import TableFixedColumn from './fixedColumn';

const { Body, Content } = Layout;
const { pageable, stylize } = Table.addons;

const cvmList = [
  {
    id: 1,
    key: 'MSDK_LOGING_CHANNELS_LIST',
    defaultValue: '0',
    role: 'pdm',
    status: 'processing',
    keyInfo:
      '可访问工单、搜索及查看交易、导出报告。权限描述现实在这里，方便用户了解角色对应的权限内容，一行不够两行显示',
    modal: '标准型 S1',
    publicIP: '119.28.142.24',
    privateIP: '10.144.77.75',
  },
  {
    id: 2,
    key: 'MSDK_DEBUG',
    defaultValue: '1',
    role: 'owner',
    status: 'running',
    keyInfo: '可查看和编辑所有帐户数据',
    modal: '标准型 S1',
    publicIP: '112.30.42.241',
    privateIP: '10.121.72.123',
  },
  {
    id: 3,
    key: 'MSDK_LOGIN_UI_ENABLE',
    defaultValue: 'others',
    role: 'owner',
    status: 'running',
    keyInfo: '可查看和编辑所有帐户数据',
    modal: '标准型 S1',
    publicIP: '112.30.42.241',
    privateIP: '10.121.72.123',
  },
];
export default function TableExample() {
  const menu = (close) => (
    <List type="option">
      <List.Item onClick={close}>测试</List.Item>
      <List.Item onClick={close}>测试发布</List.Item>
      <List.Item onClick={close}>上线</List.Item>
      <List.Item onClick={close}>下线</List.Item>
      {/* <List.SubMenu label="更多">
			<List type="option">
			  <List.Item disabled>订阅</List.Item>
			  <List.Item onClick={close}>朋友代付</List.Item>
			</List>
		  </List.SubMenu> */}
    </List>
  );

  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="表格 Table（Demo示意）" />
          <Content.Body full>
            <Table.ActionPanel>
              <Button type="primary">新建Key</Button>
            </Table.ActionPanel>
            <Card>
              <Table
                verticalTop={true}
                records={cvmList}
                recordKey="key"
                rowDisabled={(record) => record.status === 'stopped'}
                rowClassName={(record) => record.status}
                columns={[
                  {
                    key: 'key',
                    header: 'Key',
                    width: 180,
                    render: (cvm) => <span>{cvm.key}</span>,
                  },
                  {
                    key: 'defaultValue',
                    header: 'defaultValue',
                    width: 140,
                    render: (cvm) => <span>{cvm.key}</span>,
                  },
                  {
                    key: 'keyInfo',
                    header: '描述',
                    render: (cvm) => (
                      <div
                        style={{
                          height: 50,
                          display: 'flex',
                          alignItems: 'flex-start',
                        }}
                      >
                        {cvm.keyInfo}
                      </div>
                    ),
                  },
                  {
                    key: 'ip',
                    header: '操作',
                    align: 'left',
                    width: 180,
                    render: (record) => (
                      <>
                        <Button type="link">编辑</Button>
                        <Button type="link">移除</Button>
                        <Dropdown
                          className="oit-table-operation-more"
                          clickClose={false}
                          // style={{ marginRight: 10 }}
                          button="更多"
                          appearance="link"
                          placement="bottom"
                        >
                          {menu}
                        </Dropdown>
                      </>
                    ),
                  },
                ]}
                addons={[
                  pageable({
                    pageSizeVisible: cvmList.length > 10,
                    pageIndexVisible: cvmList.length > 10,
                    jumpVisible: cvmList.length > 10,
                    endJumpVisible: cvmList.length > 10,
                  }),
                ]}
              />
            </Card>

            <Table.ActionPanel style={{ marginTop: 20 }}>
              <Button type="primary">带 选择/过滤 表格</Button>
            </Table.ActionPanel>

            <Card>
              <Table2 />
            </Card>
            <Table.ActionPanel style={{ marginTop: 20 }}>
              <Button type="primary">固定列（带选择） 表格</Button>
            </Table.ActionPanel>
            <Card>
              <TableFixedColumn />
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
