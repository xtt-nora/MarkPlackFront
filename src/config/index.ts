// ? 全局默认配置项
const { pkg } = __APP_INFO__;
const { version } = pkg;

// 工区版本号
export const APP_VERSION = version;

// 首页地址（默认）
export const HOME_URL: string = "/home/index";
// 登录页地址（默认）
export const LOGIN_URL: string = "/login";

// 默认主题颜色
export const DEFAULT_PRIMARY: string = "#171717";

// 路由白名单地址（本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500"];

// 高德地图 key
export const AMAP_MAP_KEY: string = "";

// 百度地图 key
export const BAIDU_MAP_KEY: string = "";
