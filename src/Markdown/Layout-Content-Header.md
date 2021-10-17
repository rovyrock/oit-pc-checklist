Content

```js

import React from 'react';
import { Layout } from 'tea-component';
const { Body, Content } = Layout;

function Example() {

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
export default Example;

```


定制右侧顶栏

```js

import React, { useState } from 'react';
import { Layout, Text, Tabs } from 'tea-component';
const { Body, Content } = Layout;

// 定制的右侧顶部
function CustomizedContentHeader(props) {
	return (
        <section className="databrainheader-info">
            <img
                src={require('@/assets/images/game/1.jpeg')}
                alt="游戏图片"
                className="databrainheader-info-logo"
            />
            <div className="databrainheader-info-right">
                <div className="databrainheader-info-platform">
                    ......
                </div>
                <div className="databrainheader-info-tags">
                    ........
                </div>
            </div>
        </section>
	);
}


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
                        className="databrainheader"
						showBackButton
						title="PC Games"
                    >
                        <CustomizedContentHeader />
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