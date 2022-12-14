import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {visitorRoutes} from './routes'
import {App} from 'vue'
import {AppSetting} from '/@/setting/app-setting'

const whiteRouteNameList: string[] = [];
// generate visitor routes
(function createVisitorRoutes(routes: RouteRecordRaw[]) {
  routes.map(it => whiteRouteNameList.push(<string>it.name) && createVisitorRoutes(it.children || []))
})(visitorRoutes)
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: visitorRoutes,
  strict: true,
  scrollBehavior: () => ({left: 0, top: 0})
})

router.beforeEach((to, from, next) => {
  document.title = `${AppSetting.title} - ${to.meta.title || ''}`
  next()
})

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const {name} = route
    if (name && !whiteRouteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default {
  install(app: App) {
    app.use(router)
  }
}
