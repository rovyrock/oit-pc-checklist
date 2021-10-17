import React, { useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { NavMenu, List, Badge, Button, Icon } from 'tea-component/lib';

// import { Icon } from "../Icon";
import HeaderMsgList from './headerMsgList';
import AppList from './appList';

const user = require('@/assets/svg/avatar-default.svg');
const businessList = [
  { value: 'business1', text: '业务A', tooltip: '业务A' },
  { value: 'business2', text: '业务B', tooltip: '业务B' },
  { value: 'business3', text: '业务C', tooltip: '业务C' },
  { value: 'business4', text: '业务D', tooltip: '业务D' },
];
const systemList = [
  { value: 'system1', text: '子系统A', tooltip: '子系统A' },
  { value: 'system2', text: '子系统B', tooltip: '子系统B' },
  { value: 'system3', text: '子系统C', tooltip: '子系统C' },
  { value: 'system4', text: '子系统D', tooltip: '子系统D' },
];
export default function Header(props) {
  let history = useHistory();
  const msgListRef = useRef();
  const [msgShow, setMsgShow] = useState(false);
  const [, setmsgList] = useState(false);
  const [business, setBusiness] = useState(businessList[0]);
  const [system, setSystem] = useState(systemList[0]);

  const changeMsgShowStat = () => {
    let result = !msgShow;
    const msgList = msgListRef.current.messageModal;
    setMsgShow(result);
    setmsgList(msgList);
    msgListRef.current.showResults();
    console.log(msgListRef.current);
  };

  // app 列表
  const appListRef = useRef();
  const [appListShow, setAppListShow] = useState(false);
  const [, setAppList] = useState(false);
  const changeAppListShowStat = () => {
    let result = !appListShow;
    const msgList = appListRef.current.messageModal;
    setAppListShow(result);
    setAppList(msgList);
    appListRef.current.showResults();
    console.log(appListRef.current);
  };

  return (
    <NavMenu
      className="master-header-nav"
      left={
        <>
          <NavMenu.Item type="logo">
            <Icon type="logo"></Icon>
          </NavMenu.Item>
          <NavMenu.Item
            type="dropdown"
            overlay={(close) => (
              <List type="option">
                {businessList.map((type, key) => (
                  <List.Item
                    key={key}
                    onClick={() => {
                      setBusiness(type);
                      close();
                    }}
                    selected={type.value === business.value}
                  >
                    {type.text}
                  </List.Item>
                ))}
              </List>
            )}
          >
            {business.text}
          </NavMenu.Item>
          <NavMenu.Item
            type="dropdown"
            overlay={(close) => (
              <List type="option">
                {systemList.map((type, key) => (
                  <List.Item
                    key={key}
                    onClick={() => {
                      setSystem(type);
                      close();
                    }}
                    selected={type.value === system.value}
                  >
                    {type.text}
                  </List.Item>
                ))}
              </List>
            )}
          >
            {system.text}
          </NavMenu.Item>

          <NavMenu.Item type="logo"></NavMenu.Item>
          <NavMenu.Item>
            <Link to="/">一站式工作台</Link>
          </NavMenu.Item>

          <NavMenu.Item type="icon">
            <Icon type="plus" className="tea-icon" />
            <AppList isShow={msgShow} ref={msgListRef} />
          </NavMenu.Item>
        </>
      }
      right={
        <>
          <NavMenu.Item type="icon" onClick={changeMsgShowStat}>
            <Icon type="news" className="tea-icon tea-icon-news" />
            <Badge dark theme="danger">
              4
            </Badge>
            <HeaderMsgList isShow={msgShow} ref={msgListRef} />
          </NavMenu.Item>
          <NavMenu.Item
            type="dropdown"
            overlay={(close) => (
              <List
                type="option"
                className="header-dropdownlist"
                style={{ width: 200 }}
              >
                <List.Item
                  onClick={() => history.push('/accountCenter/userInfo')}
                  className="list-item"
                >
                  <div className="list-col">
                    <div className="list-img">
                      {/* <img src={userInfoIcon} alt="" /> */}
                      <Icon type="user"></Icon>
                    </div>
                    <div className="list-info">用户信息</div>
                  </div>
                </List.Item>
                <List.Item
                  onClick={() => history.push('/accountCenter/merchantInfo')}
                  className="list-item"
                >
                  <div className="list-col">
                    <div className="list-img">
                      {/* <img src={merchat} alt="" /> */}
                      <Icon type="user"></Icon>
                    </div>
                    <div className="list-info">商户管理</div>
                  </div>
                </List.Item>
                <List.Item
                  onClick={() =>
                    history.push('/accountCenter/businessListManagment')
                  }
                  className="list-item"
                >
                  <div className="list-col">
                    <div className="list-img">
                      {/* <img src={work} alt="" /> */}
                      <Icon type="user"></Icon>
                    </div>
                    <div className="list-info">业务列表</div>
                  </div>
                </List.Item>
                <List.Item onClick={close} className="list-item">
                  <div className="list-col">
                    <div className="list-img">
                      {/* <img src={work} alt="" /> */}
                      <Icon type="logout"></Icon>
                    </div>
                    <div className="list-info">退出</div>
                  </div>
                </List.Item>
              </List>
            )}
            className="header-avatar"
          >
            <img src={user} alt="" />
          </NavMenu.Item>
        </>
      }
    />
  );
}
