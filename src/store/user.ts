import {defineStore} from 'pinia'
import {reactive} from 'vue'
import {userApi} from '/@/api/user-api'
import {fileApi} from '/@/api/file-api'

export const useUserStore = defineStore('user', () => {
  const userStore = reactive({
    // todo: 一个没看懂
    user: {
      // true means has login
      login: false,
      auth: {
        user: '',
        used: 0,
        public: '',
        private: '',
        auth_chain: [],
        trust_list: null,
        black_list: null
      },
      profile: {
        nick_name: '',
        introduce: '',
        portrait: {
          user: '',
          unix: 0,
          number: 0
        },
        portrait_url: ''
      }
    },
    counts: {
      // 已加入的用户
      join: 0,
    }
  })

  /**
   * 更新用户数量
   * @param count 用户数量
   */
  function updateJoinCount(count?: number) {
    userStore.counts.join = count || 0
  }

  /**
   * 获取用户信息
   */
  async function getUserInfo() {
    const res = await userApi.getUserInfo()
    userStore.user = res as any
    if (userStore.user.profile?.portrait) {
      fileApi.getUrl(userStore.user.profile.portrait)
        .then(res => userStore.user.profile.portrait_url = res)
    }
  }

  function logOut() {
    userApi.logOut().then(getUserInfo)
  }

  return {
    userStore,
    updateJoinCount,
    getUserInfo,
    logOut
  }
})
