// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  Table,
  Button,
  StatusTip,
  List,
  Justify,
  SearchBox,
} from 'tea-component';
import { cvmList, TableData } from '@/data';

const { Body, Content } = Layout;
const { pageable, autotip } = Table.addons;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (props) => {
  const [getDataSuccess, setGetDataSuccess] = useState(false);
  const [status, setStatus] = useState('none');
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

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
          <Content.Header title="Table 数据加载" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>Table数据加载中 显示加载状态</List.Item>
                  <List.Item>
                    插件autotip加类名oit-status，可以显示上下距离200px的效果
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
                      key: 'version_id',
                      header: '版本ID',
                      width: 100,
                      render: (cvm) => <span>{cvm.version_id}</span>,
                    },
                    {
                      key: 'name',
                      header: '版本名称',
                      // width: 140,
                      render: (cvm) => <span>{cvm.name}</span>,
                    },
                    {
                      key: 'commit_time',
                      header: '提交时间',
                      width: 240,
                      render: (cvm) => <span>{cvm.commit_time}</span>,
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
                    total &&
                      pageable({
                        pageSizeVisible: data.length > 10,
                        pageIndexVisible: data.length > 10,
                        jumpVisible: data.length > 10,
                        endJumpVisible: data.length > 10,
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
