import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './app.vue'
import '/src/assets/style/tailwindcss.css'
import router from './router'
import {createPinia} from 'pinia'
import AppPlugin from '/@/plugin/index'

const app = createApp(App)
app.use(router)
  .use(ElementPlus)
  .use(createPinia())
  .use(AppPlugin)
  .mount('#app')
