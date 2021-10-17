import React, { useState } from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom';

import { Menu } from 'tea-component';
// import { Layout } from 'tea-component/lib';

// 左侧菜单导航的图标需要单独出来，使用svg，保证高清度

// const { Sider } = Layout;

export const DynamicMenu = (props) => {
  const { menuList, menuTitle, defaultSubSelected, defaultSelected } = props;

  const [selected, setSelected] = useState(defaultSelected || -1);
  const [subSelected, setSubSelected] = useState(defaultSubSelected || -1);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const childNavList = menuList[selected]?.subMenu[subSelected]?.subMenu || [];
  const history = useHistory();
  return (
    <>
      <Menu
        theme="light"
        title={menuTitle}
        // 工作台不收起 collapsable为false，icon可以不设置
        collapsable={false}
        // icon={[`${userIcon}`, `${userIconActive}`]} // 收起的时候可以看到图标（一般是logo）
      >
        {menuList.map((item, index) => {
          return (
            <div key={`item-${index}`}>
              {item?.to ? (
                <Menu.Item
                  key={`Menu-${index}`}
                  title={item.title}
                  icon={item.icon}
                  selected={`${selected}` === `${index}`}
                  onClick={() => {
                    setSelected(index);
                    history.push(item.to);
                  }}
                />
              ) : (
                <Menu.SubMenu
                  title={item.title}
                  icon={item.icon}
                  key={`subMenu-${index}`}
                >
                  {item?.subMenu.map((subItem, subIndex) => {
                    return (
                      <Menu.Item
                        key={`itemMenu-${subIndex}`}
                        title={subItem.title}
                        selected={
                          `${selected}-${subSelected}` ===
                          `${index}-${subIndex}`
                        }
                        onClick={() => {
                          setSelected(index);
                          setSubSelected(subIndex);
                          if (subItem?.subMenu) {
                            setIsCollapsed(true);
                            history.push(subItem.to);
                          } else {
                            setIsCollapsed(false);
                            history.push(subItem.to);
                          }
                        }}
                      />
                    );
                  })}
                </Menu.SubMenu>
              )}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default DynamicMenu;
