<script setup lang="ts">
import { ref } from 'vue'
import type { CollapseModelValue } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
const activeNames = ref(['1'])
const handleChange = (val: CollapseModelValue) => {
    console.log(val)
}
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
            <!-- <WindPower style="width: 1em; height: 1em;" /> -->
            <el-icon size="1.5em">
                <Place />
            </el-icon>
        </div>
        <el-carousel trigger="click" height="150px" class="p-2">
            <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="p-2 h-[calc(100%-280px)] overflow-y-auto box-border">
            <el-collapse v-model="activeNames" @change="handleChange" size="small">
                <el-collapse-item title="Consistency" name="1">
                    <div>
                        Consistent with real life: in line with the process and logic of real
                        life, and comply with languages and habits that the users are used to;
                    </div>
                    <div>
                        Consistent within interface: all elements should be consistent, such
                        as: design style, icons and texts, position of elements, etc.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Feedback" name="2">
                    <div>
                        Operation feedback: enable the users to clearly perceive their
                        operations by style updates and interactive effects;
                    </div>
                    <div>
                        Visual feedback: reflect current state by updating or rearranging
                        elements of the page.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3">
                    <div>
                        Simplify the process: keep operating process simple and intuitive;
                    </div>
                    <div>
                        Definite and clear: enunciate your intentions clearly so that the
                        users can quickly understand and make decisions;
                    </div>
                    <div>
                        Easy to identify: the interface should be straightforward, which helps
                        the users to identify and frees them from memorizing and recalling.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Controllability" name="4">
                    <div>
                        Decision making: giving advices about operations is acceptable, but do
                        not make decisions for the users;
                    </div>
                    <div>
                        Controlled consequences: users should be granted the freedom to
                        operate, including canceling, aborting or terminating current
                        operation.
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="p-2">
            <el-button :icon="Plus" class="w-100%" type="primary">新增</el-button>
        </div>
    </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
    color: var(--el-text-color-primary);
    background: #FAFAFA;
}

.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>