<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';
import { storeToRefs } from 'pinia';

const { isCollapse } = storeToRefs(useGlobalStore());
const globalStore = useGlobalStore();
const isColl = () => {
    globalStore.setGlobalState("isCollapse", !isCollapse.value);
};
</script>

<template>
    <el-header style="font-size: 12px"
        class="border-b border-b-solid border-b-[#e5e5e5] box-border flex flex-row justify-between">
        <div class="p-2 line-height-6 flex items-center">
            <el-icon size="1.5em" @click="isColl">
                <Notebook />
            </el-icon>
        </div>
        <div class="toolbar">
            <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px">
                    <setting />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>Tom</span>
        </div>
    </el-header>
</template>

<style scoped lang="scss">
.el-header {
    position: relative;
    background-color: #FAFAFA;
    color: var(--el-text-color-primary);
    width: 100%;
    height: 4rem;
}

.toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
