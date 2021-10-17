```js

import React from 'react';
import { Layout } from 'tea-component';
// 顶部导航
import NavHeader from '@/components/header';
// 左侧栏
import LeftMenu from '@/components/leftMenu';

const { Body, Header, Content, Sider } = Layout;

export default (props) => {
    return (
        <Layout>
            <Header>
                <NavHeader />
            </Header>
            <Body>
                <Sider>
                    <LeftMenu />
                </Sider>
                <Content>{props.children}</Content>
            </Body>
        </Layout>
    );
};

```