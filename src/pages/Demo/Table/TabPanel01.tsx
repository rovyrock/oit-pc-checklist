import React, { useState } from 'react';
import { Card, Table, Button, Text } from 'tea-component/lib';

import { useHistory } from 'react-router-dom';

// 重构测试数据
import RES, { TYPE } from './data';

const { pageable, sortable, filterable, selectable } = Table.addons;
let testData: any = [];
for (let i = 0; i < RES.data.businessList.length; i++) {
  let item = RES.data.businessList[i];
  if (i === 0) {
    // 审批中
    item.status = 1;
  } else if (i === 2) {
    // 不通过
    item.status = 3;
  }
  // item.apply_time = "2020-10-02 12:12:12";
  testData.push(item);
}

// 全部的 业务权限审批列表
export default function BusinessAuthList() {
  interface pageInfoType {
    PageNum: number;
    PageSize: number;
    Total?: number;
  }
  interface resObjType {
    code: number;
    data: any;
    msg?: any;
  }
  let history = useHistory();

  // 排序
  const [sorts, setSorts] = useState<any>([]);
  // 状态段筛选值
  const ALL_VALUE = '__ALL__';
  const [filter, setFilter] = useState<any>(ALL_VALUE);

  let filteredRecords = testData.slice();

  // 根据状态段筛选
  if (filter !== ALL_VALUE) {
    filteredRecords = filteredRecords.filter(
      (x: any) => String(x.status) === filter,
    );
  }

  // console.log("测试数据", filteredRecords);

  // 当前展开的产品
  const [expandedKeys, setExpandedKeys] = useState([
    // 默认展开第一个产品
    String(filteredRecords[0].name),
  ]);
  const expandedSet = new Set(expandedKeys);

  // 当前选中的消息
  const [selectedKeys, setSelectedKeys] = useState<any>([
    'disabled',
    'disabled',
    'disabled',
    'disabled',
    'disabled',
  ]);
  console.log('selectedKeys', selectedKeys);

  // 详情弹框
  const businessDetail = (record: any, action: any) => {
    history.push('/merchantManager/businessDetail', {
      records: record,
      titleMs: 'see',
      action: action,
    });
  };

  return (
    <Card className="business-table">
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
            render: (cvm: any) => {
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
            render: (cvm: any) =>
              String(cvm.status) === '1' ? (
                <Button
                  type="link"
                  onClick={() => {
                    // businessDetail(cvm, 2);
                  }}
                >
                  审批
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={() => {
                    // businessDetail(cvm, 1);
                  }}
                >
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
  );
}
