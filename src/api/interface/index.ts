// 请求响应参数（不包含data）
export interface Result {
  errcode: number;
  errmsg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageCode: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageCode: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    account: string;
    password: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    avatar?: string;
    id?: number;
    nickName?: string;
    pageCode?: number;
    pageSize?: number;
    phoneNumber?: string;
    sex?: string;
    szEmail?: string;
    szPassword?: string;
    szRemark?: string;
    userName?: string;
    deptId: number;
    roleNames?: Array<string>;
    roleIds: Array<number>;
    [property: string]: any;
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}

// 工区管理模块
export namespace Project {
  export interface ResProjectList {
    createTime?: Date;
    createUserId?: number;
    deptId?: number;
    id?: number;
    ntStatus?: number;
    projectName: string;
    updateTime?: Date;
    [property: string]: any;
  }
}
// 井模块
export namespace Well {
  export interface ResWellList {
    createTime?: Date;
    commonName?: string;
    id?: number;
    levelId?: number;
    levelName?: string;
    uwi?: string;
    projectId?: number;
    updateTime?: Date;
  }
}

// 用户管理模块
export namespace Dept {
  export interface ReqDeptParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResDeptList {
    id?: number;
    iparentId?: number;
    pageCode?: number;
    pageSize?: number;
    szRemark?: string;
    deptName?: string;
    orderNum?: number;
    [property: string]: any;
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
