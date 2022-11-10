import request from '../util/request.js'
import {ApiEnum} from '/@/api/api-enum'

export const userApi = {
  /**
   * 登录/获取用户信息
   */
  getUserInfo() {
    return request.get('user/mine')
  },
  logOut() {
    return request.get(ApiEnum.AuthLogout)
  }
}
