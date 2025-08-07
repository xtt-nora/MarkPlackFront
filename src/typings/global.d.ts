/* Menu */
declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
    size?: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    iconBase64: string;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
    isCheck: boolean;
    dataType?: string;
    dataScopeType?: string | null;
  }
}

/* Module */
declare namespace Module {
  interface ModuleOptions {
    chartDescribe: string;
    chartName: string;
    chartOption: string;
    fkFormulaId: string;
    id: string;
    isDefault: boolean;
    isDel: boolean;
  }
}

/* FileType */
declare namespace File {
  type ImageMimeType =
    | "image/apng"
    | "image/bmp"
    | "image/gif"
    | "image/jpeg"
    | "image/pjpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/tiff"
    | "image/webp"
    | "image/x-icon";

  type ExcelMimeType = "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  type ArchiveMimeType = "application/x-zip-compressed" | "application/zip";
}

/* Vite */
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USER_NODE_ENV: "development" | "production" | "test";
  VITE_GLOB_APP_TITLE: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_REPORT: boolean;
  VITE_ROUTER_MODE: "hash" | "history";
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "gzip,brotli" | "none";
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_PWA: boolean;
  VITE_DEVTOOLS: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_API_URL: string;
  VITE_PROXY: [string, string][];
  VITE_CODEINSPECTOR: boolean;
}

declare namespace Form {
  type dateType =
    | "year"
    | "years"
    | "month"
    | "months"
    | "date"
    | "dates"
    | "datetime"
    | "week"
    | "datetimerange"
    | "daterange"
    | "monthrange"
    | "yearrange"
    | "emptyFormula";

  type defaultType =
    | "password"
    | "text"
    | "textarea"
    | "radio"
    | "radioButton"
    | "checkbox"
    | "select"
    | "proSelect"
    | "quarter"
    | "title"
    | "cascader"
    | "inputNumber"
    | "colorpicker"
    | "switch"
    | "slot"
    | "divider";
  type itemType = dateType | defaultType | string;
  // 当FiledItem的type === 'radio' | 'checkbox'时，options的参数类型
  interface IFieldOptions {
    labelKey?: string;
    valueKey?: string;
    placeholder?: string;
    data: any[];
    change?: (value: any) => void;
  }
  interface Options {
    labelWidth?: string | number;
    labelPosition?: "left" | "right" | "top";
    disabled?: boolean;
    size?: "large" | "small" | "default";
    showResetButton?: boolean; // 是否展示重置按钮
    showCancelButton?: boolean; // 是否展示取消按钮
    showSubmitButton?: boolean; // 是否展示提交按钮
    submitButtonText?: string;
    resetButtonText?: string;
    cancelButtonText?: string;
    toolSpan?: number; // 操作按钮所占宽度
    rules?: any; // 表单校验规则
    colProps?: any; // 公共col属性
  }
  interface FieldItem {
    label?: string;
    labelWidth?: string | number; // 标签宽度，例如 '50px'。 可以使用 auto。
    field?: string;
    type?: itemType;
    value?: any;
    placeholder?: string;
    format?: string;
    disabled?: boolean;
    readonly?: boolean;
    options?: IFieldOptions;
    rules?: import("element-plus").FormItemRule[];
    clearable?: boolean; // 是否可清空
    showPassword?: boolean; // 是否显示切换密码图标
    enterable?: boolean; // 当为输入框时，是否启用回车触发提交功能
    span?: number;
    show?: boolean;
    offset?: number;
    min?: number;
    max?: number;
    suffix?: string;
    step?: any;
    fixed?: boolean; // 在用表单生成表格时需要使用
    multiple?: boolean;
    allowCreate?: boolean; // 当type为select时，是否允许创建新选项
    filterable?: boolean; // 当type为select时，是否启用搜索功能
    render?: (scope: RenderScope<T>) => VNode | string;
    change?: (param: any) => void;
  }
  interface FormType {
    fieldList: Form.FieldItem[];
    model?: Record<Form.FieldItem["field"], Form.FieldItem["value"]>;
    options?: Form.Options;
    onSubmit?: (model: any) => void;
  }
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};
