// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  Table,
  Button,
  Dropdown,
  List,
  Justify,
  SearchBox,
} from 'tea-component';
import { cvmList } from '@/data';

const { Body, Content } = Layout;
const { pageable } = Table.addons;

export default (props) => {
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
          <Content.Header title="Table 操作项太多处理" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>
                    操作项操作3个，一般会把比较不重要的收到更多里面去
                  </List.Item>
                  <List.Item>操作性点击可下拉显示其他操作项</List.Item>
                  <List.Item>
                    更多（Dropdown）需加类名oit-table-operation-more
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
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
};
