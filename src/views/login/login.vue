<template>
  <div class="flex min-h-svh flex-col items-center justify-center bg-#F5F5F5">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <div class="flex flex-col gap-6">
        <el-card class="rounded-xl">
          <div
            class="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center">
            <div class="font-semibold text-xl">Welcome back</div>
            <div class="text-sm c-#737373">Login with your Google or account</div>
          </div>
          <div class="mt-7">
            <el-form-item>
              <el-button type="primary" @click="login" class="w-100%" :icon="Apple">微信账号登录</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="w-100%" :icon="ChromeFilled">谷歌账号登录</el-button>
            </el-form-item>

            <el-divider>
              <span>Or continue with</span>
            </el-divider>
            <el-form :model="loginData" label-width="auto" labelPosition="top">
              <el-form-item label="账号">
                <el-input v-model="loginData.account" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="loginData.password" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login" class="w-100%">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="login">
import { loginApi } from "@/api/modules/user";
import { ref } from "vue";
import {
  Apple, ChromeFilled
} from '@element-plus/icons-vue'
const loginData = ref({
  account: '123456',
  password: '12dhauia'
})
const login = () => {
  console.log('登录');
  loginApi(loginData.value).then(res => {
    console.log(res);
  })
}
</script>
<style lang="scss" scoped>
.el-card {
  border-radius: 12px;
}

::v-deep(.el-form-item__content) {
  justify-content: center;
}
</style>