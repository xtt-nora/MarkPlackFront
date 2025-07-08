import qs from "qs";

export enum ContentTypeMap {
  json = "application/json",
  formUrlencoded = "application/x-www-form-urlencoded",
  formData = "multipart/form-data"
}

export function transformRequestData(requestData: Record<string, any>, contentType?: string) {
  // application/json 数据处理
  let data: string | object = requestData;

  if (contentType) {
    // application/x-www-form-urlencoded 数据处理
    if (contentType.indexOf(ContentTypeMap.formUrlencoded) !== -1) {
      data = qs.stringify(requestData);
    }

    // multipart/form-data 数据处理
    if (contentType.indexOf(ContentTypeMap.formData) !== -1) {
      if (Object.prototype.toString.call(requestData) === "[object Object]") {
        const formData = new FormData();
        Object.keys(requestData).forEach(key => {
          const value = requestData[key];
          if (Array.isArray(value)) {
            value.forEach(item => {
              formData.append(`${key}[]`, item);
            });
            return;
          }
          formData.append(key, requestData[key]);
        });
        data = formData;
      }
    }
  }
  return data;
}
