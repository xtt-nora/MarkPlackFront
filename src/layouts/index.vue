<template>
    <el-container class="h-full w-full">
        <SideBar />
        <el-container direction="vertical" class="h-full w-full">
            <Menu />
            <Main />
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import SideBar from '@/layouts/components/SideBar/index.vue'
import Menu from '@/layouts/components/Menu/index.vue'
import Main from '@/layouts/components/Main/index.vue'
</script>

<style lang="scss" scoped></style>