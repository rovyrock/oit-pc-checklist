export const cvmList = [
  {
    id: 1,
    key: 'MSDK_LOGING_CHANNELS_LIST',
    defaultValue: '0',
    role: 'pdm',
    status: 'processing',
    keyInfo:
      '可访问工单、搜索及查看交易、导出报告。权限描述现实在这里，方便用户了解角色对应的权限内容，一行不够两行显示',
    modal: '标准型 S1',
    publicIP: '119.28.142.24',
    privateIP: '10.144.77.75',
  },
  {
    id: 2,
    key: 'MSDK_DEBUG',
    defaultValue: '1',
    role: 'owner',
    status: 'running',
    keyInfo: '可查看和编辑所有帐户数据',
    modal: '标准型 S1',
    publicIP: '112.30.42.241',
    privateIP: '10.121.72.123',
  },
  {
    id: 3,
    key: 'MSDK_LOGIN_UI_ENABLE',
    defaultValue: 'others',
    role: 'owner',
    status: 'running',
    keyInfo: '可查看和编辑所有帐户数据',
    modal: '标准型 S1',
    publicIP: '112.30.42.241',
    privateIP: '10.121.72.123',
  },
];

export const TableData = {
  errno: 0,
  errmsg: '',
  data: {
    total: 12,
    list: [
      {
        version_id: 1,
        commit_time: '2021-09-10 15:48:26',
        name: 'demo123',
        version_content: '',
      },
      {
        version_id: 2,
        commit_time: '2021-08-24 10:34:15',
        name: 'test1',
        version_content: '',
      },
      {
        version_id: 3,
        commit_time: '2021-07-02 14:21:37',
        name: 'wechat',
        version_content: '',
      },
      {
        version_id: 4,
        commit_time: '2021-06-15 01:50:57',
        name: 'Test_v0.0.1',
        version_content: '',
      },
      {
        version_id: 5,
        commit_time: '2021-09-10 15:48:26',
        name: 'staging android',
        version_content: '',
      },
      {
        version_id: 6,
        commit_time: '2021-08-24 10:34:15',
        name: 'v1.1',
        version_content: '',
      },
      {
        version_id: 7,
        commit_time: '2021-07-02 14:21:37',
        name: 'ios test 1',
        version_content: '',
      },
      {
        version_id: 8,
        commit_time: '2021-06-15 01:50:57',
        name: 'ios v1.1	',
        version_content: '',
      },
      {
        version_id: 9,
        commit_time: '2021-09-10 15:48:26',
        name: '789',
        version_content: '',
      },
      {
        version_id: 10,
        commit_time: '2021-08-24 10:34:15',
        name: '测试验证	',
        version_content: '',
      },
      {
        version_id: 11,
        commit_time: '2021-07-02 14:21:37',
        name: '测试',
        version_content: '',
      },
      {
        version_id: 12,
        commit_time: '2021-06-15 01:50:57',
        name: '同步',
        version_content: '',
      },
    ],
  },
};
export const TableDataLessThan10 = {
  errno: 0,
  errmsg: '',
  data: {
    total: 7,
    list: [
      {
        version_id: 1,
        commit_time: '2021-09-10 15:48:26',
        name: 'demo123',
        version_content: '',
      },
      {
        version_id: 2,
        commit_time: '2021-08-24 10:34:15',
        name: 'test1',
        version_content: '',
      },
      {
        version_id: 3,
        commit_time: '2021-07-02 14:21:37',
        name: 'wechat',
        version_content: '',
      },
      {
        version_id: 4,
        commit_time: '2021-06-15 01:50:57',
        name: 'Test_v0.0.1',
        version_content: '',
      },
      {
        version_id: 5,
        commit_time: '2021-09-10 15:48:26',
        name: 'staging android',
        version_content: '',
      },
      {
        version_id: 6,
        commit_time: '2021-08-24 10:34:15',
        name: 'v1.1',
        version_content: '',
      },
      {
        version_id: 7,
        commit_time: '2021-07-02 14:21:37',
        name: 'ios test 1',
        version_content: '',
      },
    ],
  },
};
export const TableDataEmpty = {
  errno: 0,
  errmsg: '',
  data: {
    total: 0,
    list: [],
  },
};
