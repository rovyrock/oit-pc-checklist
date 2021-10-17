// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import { Layout, Card, StatusTip, List } from 'tea-component';
import { TableDataEmpty } from '@/data';
const { Body, Content } = Layout;

// 模拟数据请求等待
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (props) => {
  const [getDataSuccess, setGetDataSuccess] = useState(false);
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
          <Content.Header title="模块 加载中" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>模块加载中显示loading / loading+文字</List.Item>
                  <List.Item>
                    StatusTip加类名oit-status，可以显示上下距离200px的效果
                  </List.Item>
                </List>
              </Card.Body>
            </Card>
            <Card>
              {getDataSuccess ? (
                '模块内容'
              ) : (
                <StatusTip
                  className="oit-status"
                  status="loading"
                  loadingText={null}
                />
              )}
            </Card>
            <Card>
              {getDataSuccess ? (
                '模块内容'
              ) : (
                <StatusTip className="oit-status" status="loading" />
              )}
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
};
