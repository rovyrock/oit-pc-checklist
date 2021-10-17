## Content（顶部置顶 布局）

```js

import React from 'react';
import { Layout } from 'tea-component';
const { Body, Content } = Layout;

function LayoutFixHeader() {

    return (
        <Layout>
            <Body>
                <Content className="oit-layout--fixheader">
                    <Content.Header title="顶部标题固定 (oit-layout--fixheader)" />
                    <Content.Body full>
                        4、内容区域
                    </Content.Body>
                </Content>
            </Body>
        </Layout>
    )
}
export default LayoutFixHeader;

```

## Content（上下固定 布局）

```js

import React from 'react';
import { Layout, Card, Button } from 'tea-component';

const { Body, Content } = Layout;

function LayoutVertical() {

    return (
        <Layout>
            <Body>
                <Content className="oit-layout--vertical">
                    <Content.Header title="上下固定 (oit-layout--vertical)" />
                    <Content.Body full>
                        4、内容区域
                    </Content.Body>
                    <Content.Footer>
                        <Card>
                            <Card.Body>
                                <Button type="primary">确定</Button>
                                <Button style={{ marginLeft: 20 }}>取消</Button>
                            <Card.Body>
                        </Card>
                    </Content.Footer>
                </Content>
            </Body>
        </Layout>
    )
}

export default LayoutVertical;

```

## Content (顶部置顶带Tabs操作 布局)

```js
import React, { useState } from 'react';
import { Layout, Tabs } from 'tea-component';
const { Body, Content } = Layout;

function Example() {
    const tabs = [
        { id: 'Summary', label: 'Summary' },
        { id: 'NewsActivity', label: 'News&Activity' },
        { id: 'GamesStats', label: 'Games & Stats' },
        { id: 'Financials', label: 'Financials' },
        { id: 'People', label: 'People' },
        { id: 'SimilarCompanies', label: 'Similar Companies' },
    ];
    const [activeId, setActiveId] = useState(id || 'Summary');
    return (
        <Layout>
            <Body>
                <Content className="oit-layout--fixtabs">
                    <Content.Header 
						title="标题+Tabs选项卡置顶 (oit-layout--fixtabs)"
                    >
                        <Tabs
							tabs={tabs}
							activeId={activeId}
                            onActive={(tab) => {
                                setActiveId(tab.id);
                            }}
						></Tabs>
                    </Content.Header>
                    <Content.Body full>
                        4、内容区域
                    </Content.Body>
                </Content>
            </Body>
        </Layout>
    )
}
export default Example;

```
