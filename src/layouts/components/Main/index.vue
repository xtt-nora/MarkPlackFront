<script setup lang="ts">
import { useGlobalStore } from "@/store/modules/global";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
import { storeToRefs } from "pinia";
import { h } from "vue";
const keepAliveStore = useKeepAliveStore();
const { keepAliveName } = storeToRefs(keepAliveStore);
const wrapperMap = new Map();
function createComponentWrapper(component: any, route: any) {
    if (!component) return;
    const wrapperName = route.fullPath;
    let wrapper = wrapperMap.get(wrapperName);
    if (!wrapper) {
        wrapper = { name: wrapperName, render: () => h(component) };
        wrapperMap.set(wrapperName, wrapper);
    }
    return h(wrapper);
}
</script>

<template>
    <el-main>
        <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
                <keep-alive :include="keepAliveName">
                    <component :is="createComponentWrapper(Component, route)" :key="route.fullPath" />
                </keep-alive>
            </transition>
        </router-view>
    </el-main>
</template>

<style scoped lang="scss">
.el-main {
    padding: 0;
    width: 100%;
    height: calc(100% - 60px);
}
</style>