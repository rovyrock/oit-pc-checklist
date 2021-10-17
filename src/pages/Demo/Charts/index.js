import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Row, Card, Col, StatusTip } from 'tea-component/lib';
import { BasicPie } from 'tea-chart/lib/basicpie';

const { EmptyTip } = StatusTip;

const { Body, Content } = Layout;

export default function ChartsExample() {
  const data = [
    { type: '防止主机瘫痪', value: 183 },
    { type: '避免数据泄露', value: 23 },
    { type: '防止页面篡改', value: 8 },
    { type: '防止DDOS攻击', value: 8 },
    { type: '防止XSS攻击', value: 4 },
  ];
  const dataEmpty = [];

  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="Tea 图表（Demo示意）" />
          <Content.Body full>
            <Card>
              <Card.Body title="总览">
                <Row>
                  <Col span={8}>
                    <BasicPie
                      circle
                      height={200}
                      dataSource={dataEmpty}
                      position="value"
                      color="type"
                      tips={<EmptyTip />}
                      dataLabels={{
                        enable: true,
                        formatter: (value, index, data) => {
                          return `${data.serieName}: ${data.percent}%`;
                        },
                      }}
                    />
                  </Col>
                  <Col span={8}>
                    <div className="">
                      <BasicPie
                        circle
                        height={200}
                        dataSource={data}
                        position="value"
                        color="type"
                        dataLabels={{
                          enable: true,
                          formatter: (value, index, data) => {
                            return `${data.serieName}: ${data.percent}%`;
                          },
                        }}
                      />
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="">
                      <BasicPie
                        circle
                        height={200}
                        dataSource={data}
                        position="value"
                        color="type"
                        dataLabels={{
                          enable: true,
                          formatter: (value, index, data) => {
                            return `${data.serieName}: ${data.percent}%`;
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
