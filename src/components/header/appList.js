import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

import { CollapseTransition } from 'tea-component/lib/transition';
import { List, H3 } from 'tea-component/lib';

export default forwardRef(function AppList({ isShow }, ref) {
  const [listShow, setListShow] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  // let { setModalInfo } = useContext(MessageInfo)
  useImperativeHandle(ref, () => ({
    showResults,
    messageModal,
  }));
  useEffect(() => {
    setListShow(isShow);
  }, [isShow]);
  const changeStat = () => {
    isShow = false;
    setListShow(isShow);
  };
  // 结果展示控制
  const showResults = () => {
    let showMessageModal = !messageModal;
    setMessageModal(showMessageModal);
  };
  const list = [
    {
      id: 1,
      title: '商户绑定申请结果',
      time: '2020-07-24 09:00:00',
      details: '查看详情',
      message: '【腾讯云】重装云服务器操作系sfsdfdsfds统后的初始密码',
    },
    {
      id: 2,
      title: '商户绑定申请结果',
      time: '2020-07-24 09:00:00',
      details: '查看详情',
      message: '【腾讯云2】重装云服务器操作系sfsdfdsfds统后的初始密码',
    },
    {
      id: 3,
      title: '商户绑定申请结果',
      time: '2020-07-24 09:00:00',
      details: '查看详情',
      message: '【腾讯云3】重装云服务器操作系sfsdfdsfds统后的初始密码',
    },
  ];
  return (
    <div>
      <CollapseTransition in={listShow}>
        <div className="header-applist">
          <div className="header-applist-bd">
            <H3>我的服务</H3>
            <List>
              <List.Item className="header-applist-item">打开冰箱</List.Item>
              <List.Item className="header-applist-item">
                把大象放到冰箱里
              </List.Item>
              <List.Item className="header-applist-item">关闭冰箱门</List.Item>
              <List.Item className="header-applist-item">打开冰箱2</List.Item>
              <List.Item className="header-applist-item">
                把大象放到冰箱里2
              </List.Item>
              <List.Item className="header-applist-item">关闭冰箱门2</List.Item>
            </List>
            <H3>全部服务</H3>
            <List>
              <List.Item className="header-applist-item">打开冰箱</List.Item>
              <List.Item className="header-applist-item">
                把大象放到冰箱里
              </List.Item>
              <List.Item className="header-applist-item">关闭冰箱门</List.Item>
              <List.Item className="header-applist-item">打开冰箱2</List.Item>
              <List.Item className="header-applist-item">
                把大象放到冰箱里2
              </List.Item>
              <List.Item className="header-applist-item">关闭冰箱门2</List.Item>
            </List>
          </div>
        </div>
      </CollapseTransition>
    </div>
  );
});
