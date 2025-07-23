<template>
    <el-container class="h-full w-full">
        <SideBar v-show="!isCollapse" />
        <el-container direction="vertical" class="h-full w-full">
            <Menu />
            <Main />
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SideBar from '@/layouts/components/SideBar/index.vue'
import Menu from '@/layouts/components/Menu/index.vue'
import Main from '@/layouts/components/Main/index.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/store/modules/global';
const globalStore = useGlobalStore();
const { isCollapse } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>