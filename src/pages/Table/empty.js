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
} from 'tea-component';
import { cvmList, TableDataEmpty } from '@/data';

const { Body, Content } = Layout;
const { pageable, autotip } = Table.addons;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (props) => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState('none');
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    setStatus('loading');
    await sleep(1000).then(() => {
      setStatus('none');

      setData(TableDataEmpty.data.list);
      setTotal(TableDataEmpty.data.total);
      if (TableDataEmpty.data.list.length === 0) setStatus('empty');
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
          <Content.Header title="Table 数据为空" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>Table数据为空 显示为空状态</List.Item>
                  <List.Item>Table数据为空 不显示分页控件</List.Item>
                  <List.Item>
                    autotip加类名oit-status，可以显示上下距离200px的效果
                  </List.Item>
                  <List.Item>
                    加载中/空数据/找到数据/加载失败 这类状态行不需要hover态
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
                records={data}
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
                      </>
                    ),
                  },
                ]}
                addons={[
                  total &&
                    pageable({
                      pageSizeVisible: cvmList.length > 10,
                      pageIndexVisible: cvmList.length > 10,
                      jumpVisible: cvmList.length > 10,
                      endJumpVisible: cvmList.length > 10,
                    }),
                  autotip({
                    className: 'oit-status',
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
