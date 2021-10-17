import classNames from 'classnames';

import { createFromIconfontCN } from '@ant-design/icons';
const SvgIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2452837_5z70tjgmtk2.js', // 在 iconfont.cn 上生成
});

const Icon = (props) => {
  const { type, size, className, tooltip, bubble, link, ...htmlProps } = props;
  const iconName = `#icon-${type}${size === 'l' ? `-${size}` : ''}`;
  const iconClassName = classNames(className, {
    'size-s': size === 's',
    'size-l': size === 'l',
    'svg-icon--large': size === 'l',
  });
  const icon = (
    <SvgIcon type={`svg-icon-${type}`} className={iconClassName}></SvgIcon>
  );

  return icon;
};

export default Icon;
