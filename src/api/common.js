/* 通用接口集合 */
import request from '@/libs/request'

export default {
  // getUserInfo() {
  //   return request.get('/userInfo')
  // }
  getUserInfo() {
    return request.get('/get_info')
  }
}
