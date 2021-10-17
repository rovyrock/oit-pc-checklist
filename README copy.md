# oit-pc
oit pc template

## 内置了几个界面
其中Demo中有几个常用的框架，可以参考使用

## 组件库版本说明

- 组件库
组件参数说明，请参考[Tea 组件库官网](https://tea-design.github.io/componen)

- 样式
组件库样式使用 `oit-style` 不使用Tea自带的样式，工作台的样式是基于tea-component@2.6.9进行fixed的

```bash
# 默认编译样式
yarn theme
# 生成css变量
yarn theme --css-variable
```

```bash
# 每次初始化的时候，都升级下oit-style，避免使用旧版的样式
yarn add oit-style
```

- 菜单图标
使用@ant-design/icons引入左侧导航图标


