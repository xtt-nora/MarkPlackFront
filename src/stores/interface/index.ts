export interface GlobalState {
  layout: LayoutType;
  assemblySize: AssemblySizeType;
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isHelp: boolean;
  isWeak: boolean;
  asideInverted: boolean;
  headerInverted: boolean;
  isCollapse: boolean;
  accordion: boolean;
  watermark: boolean;
  ribbon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
  guide: boolean;
  isRouterShow: boolean;
  isRegister: boolean;
  registerMessage: string;
}

export interface ChartState {
  option: Record<string, any>;
  nrErData: [];
}
/* UserState */
export interface UserState {
  token: string;
  remember: boolean;
  secretKey: string;
  userInfo: { name: string };
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  name: string;
  close: boolean;
  isKeepAlive: boolean;
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[];
}

/* AuthState */
export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}

/* KeepAliveState */
export interface KeepAliveState {
  keepAliveName: string[];
}

export interface FeatureCurveState {
  comNum: { nr: string; b: string; type: boolean }[];
}
