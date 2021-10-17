import React from 'react';
import { Layout, Card, Button } from 'tea-component/lib';

const { Content, Body } = Layout;

export default function App() {
  const style = { marginRight: 20 };
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="按钮 Button" />
          <Content.Body full>
            <Card className="demo-button">
              <Card.Body title="主要按钮">
                <Button type="primary" style={style}>
                  主要按钮
                </Button>
                <Button type="primary" style={style} loading>
                  主要按钮
                </Button>
                <Button type="primary" style={style} disabled>
                  禁用
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="次要按钮">
                <Button type="weak" style={style}>
                  次要按钮
                </Button>
                <Button type="weak" style={style} loading>
                  次要按钮
                </Button>
                <Button type="weak" style={style} disabled>
                  禁用
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="拒绝Decline">
                <Button className="tea-btn tea-btn--decline" style={style}>
                  次要按钮
                </Button>
                <Button
                  className="tea-btn tea-btn--decline"
                  style={style}
                  loading
                >
                  次要按钮
                </Button>
                <Button
                  className="tea-btn tea-btn--decline"
                  style={style}
                  disabled
                >
                  禁用
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body title="文字按钮和链接按钮">
                <Button type="text" style={style}>
                  文本按钮
                </Button>
                <Button type="text" style={style} disabled>
                  文本按钮
                </Button>
                <Button type="link" style={style}>
                  链接按钮
                </Button>
                <Button type="link" style={style} disabled>
                  链接按钮
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="图标类按钮">
                <Button icon="monitor" title="监控" style={style} />
                <Button icon="download" title="下载" style={style} />
                <Button icon="setting" title="设置" style={style} />
                <Button icon="delete" title="删除" style={style} disabled />
              </Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
