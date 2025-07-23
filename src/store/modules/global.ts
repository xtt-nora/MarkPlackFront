import { defineStore } from 'pinia';
import piniaPersistConfig from '../helper/persist';
import { DEFAULT_PRIMARY } from '@/config';
import { GlobalState } from "@/store/interface";

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState=> ({
    primary: DEFAULT_PRIMARY,
    isCollapse: false,
    isDark: false,
  }),
  actions: {  
     setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch((state) => {
        (state as any)[args[0]] = args[1];
      });
    }
  },
  persist: piniaPersistConfig('global'),  // 使用 piniaPersistConfig
});