<script setup lang="ts">
import { ref } from 'vue'

const value = ref(new Date())
</script>

<template>
    <el-aside width="250px" class="border-r border-r-solid border-r-[#e5e5e5] h-full">
        <div class="p-2 h-16 flex flex-row border-b border-b-solid box-border border-b-[#e5e5e5] items-center">
            <el-avatar shape="square" fit="cover"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="flex-1 grid text-left text-sm">
                <span class="font-500 truncate">侧边栏</span>
                <span class="text-[.75rem] text-gray-500 truncate">用户信息</span>
            </div>
            <WindPower style="width: 1em; height: 1em;" />
        </div>
        <div class="p-2 overflow-y-auto box-border">
            <el-date-picker v-model="value" type="date" placeholder="Pick a day" size="small" />
        </div>
    </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
    color: var(--el-text-color-primary);
    background: #FAFAFA;
}
</style>