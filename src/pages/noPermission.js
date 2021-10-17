import React from 'react';
import { H3, Text, Button } from 'tea-component';
// 无权限组件
import Permission from 'oit-permission';
// 无权限组件（样式）
import 'oit-permission/dist/index.css';
const thumb = require('oit-permission/dist/f0984492bd5f035d.svg');

export default () => {
  function handleApply() {
    const { hostname, protocol, port } = window.location;
    console.log('提交申请');
  }
  return (
    <Permission
      thumb={thumb}
      title={<H3>暂无权限，申请后即可使用XXXX服务。</H3>}
      description={
        <Text theme="label">
          XXXX服务，可以提供游戏运营者一个可视化的方式来配置服务器结构和状态，以便可以快速指引玩家选择服务器并开始玩游戏。
        </Text>
      }
      style={{ width: '550px' }}
      operation={
        <div>
          <Button type="primary" onClick={() => handleApply()}>
            提交申请
          </Button>
        </div>
      }
    />
  );
};
