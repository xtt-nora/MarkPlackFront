import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { ResultEnum } from "@/enums/httpEnum";
import { AxiosCanceler } from "./helper/axiosCancel";
import { ResultData } from "@/api/interface";
import { transformRequestData } from "./helper/transform";
// import router from "@/router";
// import { LOGIN_URL } from "@/config";
export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    loading?: boolean;
    cancel?: boolean;
    transformDate?: boolean;
  }
  const config = {
    // 默认地址请求地址，可在 .env.** 文件中修改
    baseURL: import.meta.env.VITE_API_URL as string,
    // 设置超时时间
    timeout: ResultEnum.TIMEOUT as number,
    // 跨域时候允许携带凭证
    withCredentials: true,
    headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
  };

  const axiosCanceler = new AxiosCanceler();
  class RequestHttp {
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig) {
      // instantiation
      this.service = axios.create(config);
  
      /**
       * @description 请求拦截器
       * 客户端发送请求 -> [请求拦截器] -> 服务器
       * token校验(JWT) : 接受服务器返回的 token,存储到 vuex/pinia/本地储存当中
       */
      this.service.interceptors.request.use(
        (config: CustomAxiosRequestConfig) => {
           if (config.transformDate !== false) {
          const contentType = config.headers?.["Content-Type"] as string;
          config.data = transformRequestData(config.data, contentType);
        }
          return config;
        },
        (error: AxiosError) => {
          return Promise.reject(error);
        }
      );
  
      /**
       * @description 响应拦截器
       *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
       */
      this.service.interceptors.response.use(
        (response: AxiosResponse & { config: CustomAxiosRequestConfig }) => {
          const { data } = response;
  
          return data;
        },
        async (error: AxiosError) => {
          return Promise.reject(error);
        }
      );
    }
  
    /**
     * @description 常用请求方法封装
     */
    get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
      return this.service.get(url, { params, ..._object });
    }
    post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
      return this.service.post(url, params, _object);
    }
    put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
      return this.service.put(url, params, _object);
    }
    delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
      return this.service.delete(url, { params, ..._object });
    }
    download(url: string, params?: object, _object = {}): Promise<BlobPart> {
      return this.service.post(url, params, { ..._object, responseType: "blob" });
    }
  }
  
  export default new RequestHttp(config);
  