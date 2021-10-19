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
          <Content.Header title="左侧菜单栏" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>左侧菜单栏默认宽度 200px</List.Item>
                  <List.Item>左侧菜单栏一级菜单 需要加图标</List.Item>
                  <List.Item>
                    左侧菜单Hover态 <br />
                    ①
                    非选中态菜单，Hover时，加灰底+字色变成品牌色+Icon/小圆点颜色变成品牌色
                    <br />② 选中态菜单，Hover时，无需加灰底、字色不需要变化
                  </List.Item>
                  <List.Item>左侧菜单栏会自动换行</List.Item>
                  <List.Item>
                    上面的这些细节，在oit-style都有覆盖到，只需要正确使用
                  </List.Item>
                  <List.Item>
                    左侧菜单栏的代码实现需要<Text theme="danger">定制</Text>
                    ，以实现视觉效果
                  </List.Item>
                  <List.Item>
                    左侧菜单栏的图标可使用本地SVG-Sprite、使用@ant-design/icons（案例使用），方便项目调整
                  </List.Item>
                </List>
              </Card.Body>
            </Card>

            <Card>
              <img
                style={{ width: '100%', display: 'block' }}
                src={require('@/assets/images/menu.png')}
                alt="menu"
              />
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
};
