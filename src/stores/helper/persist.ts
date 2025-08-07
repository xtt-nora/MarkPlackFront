/**
 * @description pinia 持久化参数配置 (v4.x 适用)
 * @param key 本地存储的 key
 * @param paths 要持久化的字段数组
 * @param storage localStorage / sessionStorage
 */
const piniaPersistConfig = (key: string, paths?: string[], storage: Storage = localStorage) => {
  return {
    key,
    storage,
    ...(paths ? { paths } : {}),
  };
};

export default piniaPersistConfig;
