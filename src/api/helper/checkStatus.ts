import type { AxiosResponse } from "axios";

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number, response?: AxiosResponse) => {
  switch (status) {
    case 400:
      console.error("请求失败！请您稍后重试");
      break;
    case 4001:
      console.error("登录失效！请您重新登录");
      break;
    case 403:
      console.error("当前账号无权限访问！");
      break;
    case 404:
      console.error("你所访问的资源不存在！");
      break;
    case 405:
      console.error("请求方式错误！请您稍后重试");
      break;
    case 408:
      console.error("请求超时！请您稍后重试");
      break;
    case 480:
      console.error("请联系服务商进行注册！");
      break;
    case 500:
      console.error("服务异常！");
      break;
    case 502:
      console.error("网关错误！");
      break;
    case 503:
      console.error("服务不可用！");
      break;
    case 504:
      console.error("网关超时！");
      break;
    default:
      console.error("请求失败！");
  }
};
