// Table上方操作区域间距
import React from 'react';
import {
  Layout,
  Card,
  Table,
  Button,
  List,
  Justify,
  SearchBox,
} from 'tea-component';
import { cvmList } from '@/data';

const { Body, Content } = Layout;
const { pageable } = Table.addons;

export default (props) => {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="Table 上方操作区域间距" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>Table上方操作栏 距离下方10px</List.Item>
                  <List.Item>
                    Table上方操作栏 内部元素之间的间距是10px
                  </List.Item>
                  <List.Item>
                    Table上方操作栏
                    一般左边是操作按钮、右边是搜索、下拉、设置或其他icon按钮
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
                    width: 120,
                    render: (record) => (
                      <>
                        <Button type="link">编辑</Button>
                        <Button type="link">移除</Button>
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
