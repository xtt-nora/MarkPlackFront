<template>
    <el-container class="layout-container-demo" style="height: 500px">
        <SideBar />

        <el-container>
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

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>