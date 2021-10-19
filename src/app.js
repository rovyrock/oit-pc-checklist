// IEGG风格的Tea组件库样式
import 'oit-style';

// 业务自定义样式
import '@/assets/css/index.css';

import store from './store/global';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
    Object.assign(store, props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};
