<template>
  <nav>
    <div class="text-2xl text-black mr-4">{{ title }}</div>
    <router-link :to="{name: 'Forum'}"
                 active-class="text-gray-900"
                 class=" hover:text-gray-400 pr-2">论坛
    </router-link>
    <router-link :to="{name: 'Contact'}"
                 active-class="text-gray-900"
                 class=" hover:text-gray-400 pr-2">消息
    </router-link>
    <div class="flex-1"></div>
    <div class="relative">
      <div class="flex">
        <div v-if="!hasLogin">未登录</div>
        <div v-else>
          <img :src="userStore.user.profile.portrait_url" alt="头像">
          {{ userStore.user.profile.nick_name }}
        </div>
        <span class="badge badge-red">{{ userStore.counts.join }}</span>
        <span class="caret"></span>
      </div>
      <div class="dropdown-menu mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute right-0">
        <!-- 未登录时显示 -->
        <template v-if="!hasLogin">
          <div @click="$todo">上传登录文件</div>
          <div @click="$todo">发送加入申请</div>
        </template>

        <!-- 已登录时显示 -->
        <template v-if="hasLogin">
          <div v-if="hasLogin" @click="$todo">用户信息</div>
          <div v-if="hasLogin" @click="$todo">下载登录文件</div>
          <div v-if="hasLogin" @click="$todo">下载推荐文件</div>
          <div v-if="hasLogin" @click="$todo">处理加入申请 <span class="badge badge-red">{{ 0 }}</span></div>
          <div v-if="hasLogin">退出登录</div>

          <div class="divider" role="separator"></div>
          <div>用户指南</div>
          <div>高级设置</div>
        </template>
      </div>

    </div>
  </nav>
  <main>
    <div class="tips">

    </div>
  </main>
  <router-view />
</template>

<script setup>
import { AppSetting } from '/@/setting/app-setting'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useUserStore } from '../../store/user'


const title = AppSetting.title

const route = useRoute()
const currentRouteName = computed(() => route.name)

const {userStore, updateJoinCount, getUserInfo, logOut} = useUserStore()
onMounted(() => {
  getUserInfo()
})

const hasLogin = computed(() => userStore.user.login)
</script>

<style scoped>
nav {
  @apply relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  px-4
}
</style>

