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