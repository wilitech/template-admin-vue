/* 用户管理集合 */
import request from '@/libs/request'

export default {
  getUserList() {
    return request.get('/list')
  }
}
