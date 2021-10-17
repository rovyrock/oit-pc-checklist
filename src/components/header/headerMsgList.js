import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

import { CollapseTransition } from 'tea-component/lib/transition';
import { List, Icon, Button, Justify, Text, H3 } from 'tea-component/lib';

export default forwardRef(function HeaderMsgList({ isShow }, ref) {
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
        <div className="header-msglist">
          <Justify
            className="header-msglist-hd"
            left={<H3>消息中心</H3>}
            right={
              <Icon
                type="close"
                // size="l"
                style={{ cursor: 'pointer' }}
                onClick={changeStat}
              />
            }
          />

          <List className="header-msglist-bd">
            {list.map((item, index) => {
              return (
                <List.Item
                  className="header-msglist-item"
                  onClick={() => {
                    showResults();
                  }}
                  key={index}
                >
                  <Justify
                    className="header-msglist-item-hd"
                    left={
                      <>
                        <Text reset theme="label">
                          {item.title}
                        </Text>
                      </>
                    }
                    right={
                      <>
                        <Text reset theme="label">
                          {item.time}
                        </Text>
                      </>
                    }
                  />
                  <Justify
                    left={
                      <>
                        <Text reset overflow theme="strong">
                          {item.message}
                        </Text>
                      </>
                    }
                    right={
                      <>
                        <Button type="link">{item.details}</Button>
                      </>
                    }
                  />
                </List.Item>
              );
            })}
          </List>
        </div>
      </CollapseTransition>
    </div>
  );
});
