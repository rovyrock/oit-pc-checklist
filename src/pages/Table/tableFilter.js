import React, { useState } from 'react';
import {
  Table,
  Button,
  Layout,
  Card,
  Justify,
  SearchBox,
  List,
  Text,
} from 'tea-component';
const { Body, Content } = Layout;

import { data } from '@/data';

const { pageable, sortable, filterable, selectable } = Table.addons;
let testData = [];
for (let i = 0; i < data.data.businessList.length; i++) {
  let item = data.data.businessList[i];
  if (i === 0) {
    // 审批中
    item.status = 1;
  } else if (i === 2) {
    // 不通过
    item.status = 3;
  }
  testData.push(item);
}

export default function TableAddonExample() {
  // 排序
  const [sorts, setSorts] = useState([]);
  // 状态段筛选值
  const ALL_VALUE = '__ALL__';
  const [filter, setFilter] = useState(ALL_VALUE);

  let filteredRecords = testData.slice();

  // 根据状态段筛选
  if (filter !== ALL_VALUE) {
    filteredRecords = filteredRecords.filter(
      (x) => String(x.status) === filter,
    );
  }

  // 当前展开的产品
  const [expandedKeys, setExpandedKeys] = useState([
    // 默认展开第一个产品
    String(filteredRecords[0].name),
  ]);
  const expandedSet = new Set(expandedKeys);

  // 当前选中的消息
  const [selectedKeys, setSelectedKeys] = useState([
    'disabled',
    'disabled',
    'disabled',
    'disabled',
    'disabled',
  ]);

  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="Table 带选择/过滤" />
          <Content.Body full>
            <Card style={{ marginBottom: 20 }}>
              <Card.Body title="说明">
                <List type="bullet">
                  <List.Item>
                    Table带选择/过滤
                    一般默认过滤为全部，避免一进来过滤就是激活态
                  </List.Item>
                </List>
              </Card.Body>
            </Card>
            <Table.ActionPanel>
              <Justify
                left={
                  <>
                    <Button type="primary">新建</Button>
                    <Button>开机</Button>
                  </>
                }
                right={
                  <>
                    <SearchBox />
                    <Button icon="setting" />
                    <Button icon="refresh" />
                    <Button icon="download" />
                  </>
                }
              />
            </Table.ActionPanel>
            <Card>
              <Table
                verticalTop={true}
                records={filteredRecords}
                recordKey="id"
                columns={[
                  {
                    key: 'name',
                    header: '业务名称',
                  },
                  {
                    key: 'game_id', // 测试用
                    header: '申请人',
                  },
                  {
                    key: 'create_time',
                    header: '申请时间',
                  },
                  {
                    key: 'status',
                    header: '状态',
                    render: (cvm) => {
                      if (cvm.status === 1) {
                        return <Text theme="warning">审批中</Text>;
                      }
                      if (cvm.status === 3) {
                        return <Text theme="danger">已拒绝</Text>;
                      }
                      if (cvm.status === 2) {
                        return <Text theme="success">已通过</Text>;
                      }
                      return cvm.status;
                    },
                  },
                  {
                    key: 'id',
                    header: '操作',
                    align: 'left',
                    render: (cvm) =>
                      String(cvm.status) === '1' ? (
                        <Button type="link" onClick={() => {}}>
                          审批
                        </Button>
                      ) : (
                        <Button type="link" onClick={() => {}}>
                          查看详情
                        </Button>
                      ),
                  },
                ]}
                addons={[
                  pageable({
                    pageSizeVisible: filteredRecords.length > 10,
                    pageIndexVisible: filteredRecords.length > 10,
                    jumpVisible: filteredRecords.length > 10,
                    endJumpVisible: filteredRecords.length > 10,
                  }),
                  sortable({
                    // 这两列支持排序，其中 age 列优先倒序
                    columns: [{ key: 'apply_time', prefer: 'desc' }],
                    value: sorts,
                    onChange: (value) => setSorts(value),
                  }),
                  // 对 status 列增加单选过滤支持
                  filterable({
                    type: 'single',
                    column: 'status',
                    value: filter,
                    onChange: (value) => setFilter(value),
                    // 增加 "全部" 选项
                    all: {
                      value: ALL_VALUE,
                      text: '全部',
                    },
                    // 选项列表
                    options: [
                      { value: '1', text: '审批中' },
                      { value: '2', text: '已通过' },
                      { value: '3', text: '已拒绝' },
                    ],
                  }),
                  selectable({
                    // 选框放在「消息类型」列上
                    targetColumnKey: 'name',
                    // 提供子孙关系
                    // relations,
                    // 禁用全选
                    // all: false,
                    // 已选中的键值
                    value: selectedKeys,
                    shouldRecordExcludeFromAll: 'disabled',
                    // 选中键值发生变更
                    onChange: (value) => setSelectedKeys(value),
                  }),
                ]}
              />
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
