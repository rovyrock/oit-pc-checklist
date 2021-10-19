// Table上方操作区域间距
import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  Table,
  Button,
  StatusTip,
  List,
  Bubble,
  Icon,
} from 'tea-component';
import { TableData } from '@/data';

const { Body, Content } = Layout;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default (props) => {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="气泡 Bubble" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>
                    气泡Bubble使用要求 带操作的提示气泡，使用白色
                  </List.Item>
                  <List.Item>
                    气泡Bubble使用要求 不带操作的提示气泡，使用黑色
                  </List.Item>
                  <List.Item>
                    气泡Bubble使用要求 错误验证信息的提示气泡，使用红色（少用）
                  </List.Item>
                  <List.Item>
                    气泡Bubble一般最大宽度是300px，箭头需要对准提示内容
                  </List.Item>
                </List>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body title="黑色气泡（dark）">
                <Bubble
                  dark
                  placement="top"
                  content="本页面的全局配置情况，将对预发布环境中，区服状态为“自动”上报的全部大区生效；将本页面的设置同步至正式环境后，将对正式环境中，区服状态为“自动”上报的全部大区生效。"
                >
                  <Icon type="info" />
                </Bubble>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="白色气泡">
                <Bubble
                  placement="top"
                  content={
                    <>
                      http://www.google.com <Button type="link">复制</Button>
                    </>
                  }
                >
                  <Icon type="setting" />
                </Bubble>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="红色气泡（error）">
                <Bubble error placement="top" content={<>异常信息</>}>
                  <Icon type="error" />
                </Bubble>
              </Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
};
