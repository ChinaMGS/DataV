// 缓存
import router from '@/router/index.js'

const state = {
  keepAliveArr: [] // 当前需要缓存的路由数组
}
const mutations = {
  // 增加缓存
  addKeepAliveArr (state) {
    state.keepAliveArr.push(router.currentRoute.name)
  },
  // 移除所有缓存
  removeKeepAliveArr (state) {
    state.keepAliveArr = []
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
