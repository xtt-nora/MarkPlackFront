<script setup lang="ts">
import { loginApi } from "@/api/modules/user";
const login = () =>{
  console.log('登录');
  const obj = {
    account:'123456',
    password:'12dhauia'
  }
   loginApi(obj).then(res =>{
    console.log(res);
   })
}
</script>

<template>
  <div>
      <el-button @click="login" type="primary">登录</el-button>
  </div>
</template>

<style scoped lang="scss">

</style>