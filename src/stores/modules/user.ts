import { defineStore } from "pinia";
import type { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore("marker-user", {
  state: (): UserState => ({
    token: "",
    remember: false,
    secretKey: "rep-platform-secret-key",
    userInfo: { name: "rep" },
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
    setRemember(flag: boolean) {
      this.remember = flag;
    },
  },
  persist: piniaPersistConfig("marker-user"),
});
