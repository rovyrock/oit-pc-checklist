// Table上方操作区域间距
import React from 'react';
import { Layout, Card, List, Form, Input, TextArea, Text } from 'tea-component';
import { Link } from 'umi';
import moment from 'moment';

const { Body, Content } = Layout;

export default (props) => {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="框架介绍" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>
                    框架划分为：①顶部导航、②左侧菜单栏、右侧内容(③+④)
                  </List.Item>
                  <List.Item>右侧内容可以分为：③右侧顶栏、④右侧内容</List.Item>
                  <List.Item>
                    右侧内容的常用布局：
                    <Link to="/Demo/Framework/fixheader">右侧标题置顶</Link>、
                    <Link to="/Demo/Framework/fixheadertab">
                      右侧标题置顶（带Tabs）
                    </Link>
                    、
                    <Link to="/Demo/Framework/verticalFixed">右侧上下固定</Link>
                    、
                    <Link to="/Demo/Framework/twoColumnLayout">
                      右栏内容两栏布局
                    </Link>
                    、<Link to="/Demo/Framework/loading">右栏内容加载中</Link>
                  </List.Item>
                  <List.Item>
                    框架样式使用： oit-style，不使用Tea原来的样式
                  </List.Item>
                </List>
              </Card.Body>
            </Card>

            <Card>
              <img
                style={{ width: '100%', display: 'block' }}
                src={require('@/assets/images/framework.png')}
                alt="framework"
              />
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
};
