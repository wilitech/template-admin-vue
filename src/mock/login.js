/* eslint-disable */
import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return {token: USER_MAP[req.userName].token}
}

export const getUserInfo = req => {
  return {
    "data": {
      name: 'admin',
      user_id: '2',
      token: 'admin',
      avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
      menuList: [
        {
          "title": "用户管理",
          "access": "user",
          "expand": true,
          "checked": true,
          "icon": "ios-people",
          "isGroup": true,
          "children": [
            {
              "title": "用户管理",
              "access": "user.users",
              "expand": true,
              "checked": true,
              "path": "/user/users",
              "isGroup": false
            },
            {
              "title": "入驻申请",
              "access": "user.entering",
              "expand": true,
              "checked": true,
              "path": "/user/entering",
              "isGroup": false
            }
          ]
        },
        {
          "title": "系统管理",
          "access": "sys",
          "expand": true,
          "checked": true,
          "icon": "ios-paper",
          "isGroup": true,
          "children": [{
              "title": "角色管理",
              "access": "sys.roles",
              "expand": true,
              "checked": true,
              "path": "/sys/roles",
              "isGroup": false,
              "children": [{
                  "title": "添加角色",
                  "access": "sys.role.add",
                  "checked": true
                },
                {
                  "title": "删除角色",
                  "access": "sys.role.delete",
                  "checked": false
                }
              ]
            },
            {
              "title": "管理员管理",
              "access": "sys.admins",
              "expand": true,
              "checked": false,
              "path": "/sys/admins",
              "isGroup": false,
              "children": [{
                  "title": "添加管理员",
                  "access": "sys.admin.add",
                  "checked": false
                },
                {
                  "title": "删除管理员",
                  "access": "sys.admin.delete",
                  "checked": false
                }
              ]
            },
            {
              "title": "二级菜单",
              "access": "sys.test",
              "expand": true,
              "checked": true,
              "isGroup": true,
              "icon": "ios-paper",
              "children": [{
                  "title": "三级菜单1",
                  "access": "sys.test.1",
                  "checked": true,
                  "path": "/sys/test/1",
                },
                {
                  "title": "三级菜单2",
                  "access": "sys.test.2",
                  "path": "/sys/test/2",
                  "checked": false
                }
              ]
            }
          ]
        },
        {
          "title": "用户管理",
          "access": "users",
          "checked": true,
          "path": "/userd",
        }
      ]
    },
    code: 200,
    message: ""
  }
}

export const logout = req => {
  return null
}
