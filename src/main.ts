import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './router'
import 'virtual:uno.css'
createApp(App).use(pinia).use(router).mount('#app')
