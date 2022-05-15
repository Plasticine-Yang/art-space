import {
  mainBgColor,
  mainTextColor,
  primaryColor,
  primaryDarkColor,
  tabbarColor,
} from '@/config/vant/themeConfig';

/**
 * @description 自定义 vant css 组件变量 全局变量需要到 src/style/vant.scss 中定义
 * @returns themeVars
 */
export const useThemeVars = () => {
  return {
    // 按钮 primary 文本颜色
    buttonPrimaryColor: tabbarColor,
    // 按钮 primary 背景颜色
    buttonPrimaryBackgroundColor: primaryColor,
    // 底部导航栏高度
    tabbarHeight: '80px',
    // 底部导航栏背景颜色
    tabbarBackgroundColor: tabbarColor,
    // 导航栏项激活时的背景颜色
    tabbarItemActiveBackgroundColor: tabbarColor,
    // 导航栏项激活时的字体和图标颜色
    tabbarItemActiveColor: primaryColor,
    // 首页下拉刷新时的文本颜色
    pullRefreshHeadTextColor: primaryColor,
    // Tab 标签文本字体大小
    tabFontSize: '1rem',
    // Tab 标签背景颜色
    tabsNavBackgroundColor: mainBgColor,
    // Tab 标签中的文本颜色
    tabTextColor: 'white',
    // Tab 标签中的文本激活时的颜色
    tabActiveTextColor: primaryColor,
    // Tab 标签中底部长条的颜色
    tabsBottomBarColor: primaryColor,
    // NavBar 的背景颜色
    navBarBackgroundColor: tabbarColor,
    // NavBar 文字颜色
    navBarTextColor: primaryColor,
    // NavBar 标题颜色
    navBarTitleTextColor: primaryColor,
    // NavBar 图标颜色
    navBarIconColor: primaryColor,
    // SubmitBar 高度
    submitBarHeight: '80px',
    // SubmitBar 背景颜色
    submitBarBackgroundColor: tabbarColor,
    // SubmitBar 价格颜色
    submitBarPriceColor: primaryColor,
    // SubmitBar 标签颜色
    submitBarTextColor: primaryColor,
    // SubmitBar 按钮宽度
    submitBarButtonWidth: '220px',
    // Cell 背景颜色
    cellBackgroundColor: tabbarColor,
    // Cell 字体颜色
    cellTextColor: mainTextColor,
    // Cell active 颜色
    cellActiveColor: mainBgColor,
    // CellGroup inset padding
    cellGroupInsetPadding: '0',
    // CellGroup 背景颜色
    cellGroupBackgroundColor: tabbarColor,
    // Field label 文本颜色
    fieldLabelColor: mainTextColor,
    // Field input 文本颜色
    fieldInputTextColor: mainTextColor,
    // Checkbox checked 颜色
    checkboxCheckedIconColor: primaryDarkColor,
    // Radio checked 颜色
    radioCheckedIconColor: primaryDarkColor,
    // Dropdown 背景颜色
    dropdownMenuBackgroundColor: mainBgColor,
    // 关闭 Dropdown 的阴影
    dropdownMenuBoxShadow: 'none',
    // Dropdown 文本颜色
    dropdownMenuTitleTextColor: mainTextColor,
    // GridItem 背景颜色
    gridItemContentBackgroundColor: mainBgColor,
  };
};
