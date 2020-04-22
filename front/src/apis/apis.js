import axios from 'axios'

// 是否开启本地 mock 模式
const isMock = false

// 登录接口(记得修改成 Post 请求)
export const login = async (params) => {
  return await isMock ? axios.get(`../mock/login.json?t=${Date.now()}`, { params }) : axios.post('/login', params)
}

// base-layout 的权限菜单接口
export const getMenuList = async (params) => {
  const url = isMock ? `../mock/menu.json?t=${Date.now()}` : '/checkUserPermissionMenuList'
  return await axios.get(url, { params })
}
