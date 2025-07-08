import { defineStore } from 'pinia';
import piniaPersistConfig from '../helper/persist';


export const useUserStore = defineStore('user', {
  state: () => ({
    token: "",
    userInfo: { name: "admin" }
  }),
  persist: piniaPersistConfig('user'),  // 使用 piniaPersistConfig
});