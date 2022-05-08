import {
  mainBgColor,
  primaryColor,
  tabbarColor,
} from '@/config/vant/themeConfig';

/**
 * @description 自定义 vant css 组件变量 全局变量需要到 src/style/vant.scss 中定义
 * @returns themeVars
 */
export const useThemeVars = () => {
  return {
    // 底部导航栏背景颜色
    tabbarBackgroundColor: tabbarColor,
    // 导航栏项激活时的背景颜色
    tabbarItemActiveBackgroundColor: tabbarColor,
    // 导航栏项激活时的字体和图标颜色
    tabbarItemActiveColor: primaryColor,
    // 首页下拉刷新时的文本颜色
    pullRefreshHeadTextColor: primaryColor,
    // Tab 标签背景颜色
    tabsNavBackgroundColor: mainBgColor,
    // Tab 标签中的文本颜色
    tabTextColor: 'white',
    // Tab 标签中的文本激活时的颜色
    tabActiveTextColor: primaryColor,
    // Tab 标签中底部长条的颜色
    tabsBottomBarColor: primaryColor,
  };
};
