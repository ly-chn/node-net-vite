import {todo} from '/@/plugin/simple'
import {App} from 'vue'

export default {
  install(app: App) {
    app.config.globalProperties.$todo = todo
  }
}
