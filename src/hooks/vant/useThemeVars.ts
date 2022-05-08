/**
 * @description 自定义 vant css 组件变量 全局变量需要到 src/style/vant.scss 中定义
 * @returns themeVars
 */
export const useThemeVars = () => {
  return {
    // 底部导航栏背景颜色
    tabbarBackgroundColor: '#212530',
    // 导航栏项选中时的背景颜色
    tabbarItemActiveBackgroundColor: '#212530',
    // 导航栏项选中时的字体和图标颜色
    tabbarItemActiveColor: '#B8F2E6',
  };
};
