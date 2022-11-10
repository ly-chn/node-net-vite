import {RouteRecordRaw} from 'vue-router'

export const PageLayout = () => import('/@/layouts/page-layout/page-layout.vue')
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: PageLayout,
  redirect: '/forum',
  meta: {
    title: 'Root'
  },
  children: [{
    path: 'forum',
    name: 'Forum',
    component: () => import('/@/views/forum/forum-home.vue'),
    meta: {
      title: '论坛'
    }
  }, {
    path: 'contact',
    name: 'Contact',
    component: () => import('/@/views/contact/contact-home.vue'),
    meta: {
      title: '消息'
    }
  }]
}
// Basic routing without permission
export const visitorRoutes = [
  RootRoute
]
