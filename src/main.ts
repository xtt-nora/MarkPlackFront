import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
import "@/styles/reset.scss";
import "@/styles/element-dark.scss";
import 'virtual:uno.css'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './styles/element.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia).use(router).use(ElementPlus).use(ElementPlus, {
  locale: zhCn,
}).mount('#app')
