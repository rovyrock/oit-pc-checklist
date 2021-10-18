import React, { useState } from 'react';
import { Table, Button } from 'tea-component';

const { sortable, selectable, scrollable, stylize } = Table.addons;

const records = [
  { name: 'Mario', age: 48, stage: 'teenager', marriage: 0 },
  { name: 'Luigi', age: 38, stage: 'youth', marriage: 0 },
  { name: 'Koopa', age: 28, stage: 'youth', marriage: 1 },
  { name: 'Yoshi', age: 18, stage: 'youth', marriage: 0 },
  { name: 'Link', age: 8, stage: 'middle-aged', marriage: 2 },
  { name: 'Zelda', age: 58, stage: 'middle-aged', marriage: 1 },
  { name: 'Wario', age: 68, stage: 'elder', marriage: 3 },
  { name: 'Pikachu', age: 78, stage: 'elder', marriage: 4 },
];
const MARRIAGE_TEXT = ['未婚', '已婚', '离异', '再婚', '丧偶'];
const STAGE_TEXT: any = {
  teenager: '少年',
  youth: '青年',
  'middle-aged': '中年',
  elder: '老年',
};

export default function TableAddonExample() {
  // 当前排序列
  const [sorts, setSorts] = useState([]);
  // 多选
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <Table
      verticalTop={true}
      records={[...records].sort(sortable.comparer(sorts))}
      recordKey="name"
      columns={[
        // { key: "select", header: null, width: 36, fixed: "left" },
        { key: 'name', header: '姓名', width: 120, fixed: 'left' },
        { key: 'age', header: '年龄', width: 100 },
        {
          key: 'stage',
          header: '年龄段',
          render: (x) => STAGE_TEXT[x.stage],
        },
        {
          key: 'marriage',
          header: '婚姻状态',
          render: (x) => MARRIAGE_TEXT[x.marriage],
        },
        {
          key: 'desc',
          header: '描述',
          width: 2400,
          render: () =>
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          key: 'opts',
          header: '操作',
          align: 'left',
          width: 100,
          render: () => <Button type="link">修改</Button>,
          fixed: 'right',
        },
      ]}
      addons={[
        selectable({
          value: selectedKeys,
          onChange: (keys: any) => setSelectedKeys(keys),
          targetColumnKey: 'name',
        }),
        sortable({
          // 这两列支持排序，其中 age 列优先倒序
          columns: ['name', { key: 'age', prefer: 'desc' }],
          value: sorts,
          onChange: (value: any) => setSorts(value),
        }),
        scrollable({
          maxHeight: 192,
          minWidth: 3200,
        }),
        stylize({
          // className: "table--fixedcolumn",
        }),
      ]}
    />
  );
}
