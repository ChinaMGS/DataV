import axios from 'axios' // 引入axios
import router from '../router'
import { Message } from 'element-ui'
// import store from '../store'

// console.info(location.hostname)
if (
  location.hostname === '127.0.0.1' ||
  location.hostname === 'localhost' ||
  location.hostname === '127.0.0.1'
) {
  axios.defaults.baseURL = '/api/yifd'
} else {
  axios.defaults.baseURL = `https://${location.hostname}/proxy`
}

// eslint-disable-next-line no-unused-vars
/* 是否正在刷新的标志 */
window.isRefreshing = false
// token是否过期，默认为否
window.tokenOverdue = false
// /* 存储请求的数组 */
// const refreshSubscribers = []

// /* 将所有的请求都push到数组中 */
// function subscribeTokenRefresh (cb) {
//   refreshSubscribers.push(cb)
// }
// /* 数组中的请求得到新的token之后自执行，用新的token去请求数据 */
// function onRrefreshed (token) {
//   refreshSubscribers.map(cb => cb(token))
// }

function tokenIsOverdue () {
  // token是否过期
  const time = window.sessionStorage.getItem('tokenTime') // token有效期，秒级
  const queryTime = parseInt(window.sessionStorage.getItem('tokenQueryTime')) // token获取时间，秒级
  const nowTime = new Date().getTime()
  const arealyTime = Math.ceil(nowTime / 1000) - queryTime // 已经过去的时间
  if (time - arealyTime < 300) {
    // token五分钟内即将过期时开启替换token，目前后台的token有效期为30分钟。
    return true
  } else {
    return false
  }
}

window.isLoginOverdue = false // 是否已经登录过期
tokenIsOverdue()

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const backLogin = function (response) {
  // 判断接口返回信息
  const token = sessionStorage.getItem('token')
  if (token) {
    if (!window.isLoginOverdue) {
      window.isLoginOverdue = true
      setTimeout(() => {
        window.isLoginOverdue = false
      }, 1500)
    }
    Message.warning('登陆过期请重新登陆！')
    window.sessionStorage.clear() // 清除包括token的所有缓存，让用户重新登录
    window.location = '#/' // 重定向回登录页
  } else {
    window.location = '#/'
  }
}
const errorHandle = response => {
  const status = response.status
  const msg = response.data.msg

  // 状态码判断
  switch (status) {
    // 401：未登录状态或token过期，跳转登录页
    case 401:
      backLogin(response)
      break
    case 403:
      router.push({
        path: '/403'
      })
      break
    // 404：请求不存在
    case 404:
      break
    // 服务器错误
    case 500:
      Message.error(msg)
      break
    default:
      console.log(msg)
  }
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 100
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  request => {
    // // 该位置会获取登陆成功时的token数据
    const token = window.sessionStorage.getItem('token')
    /* 判断用户是否已经登录 */
    if (token) {
      /* 请求头添加token信息 */
      request.headers.Authorization = token
      if (request.url.includes('ossUpload')) {
        request.timeout = 600000
      } else {
        request.timeout = 100000
      }
      /* 判断token是否即将过期 */
      if (tokenIsOverdue() && !request.url.includes('oauth/token')) {
        /* 当前是否正在刷新，如果不是，将刷新的标志置为true并请求刷新token；如果是，将请求存储到数组中 */
        if (!window.isRefreshing) {
          window.isRefreshing = true
        }
      } else {
        return request
      }
    } else {
      /* 如果没有登录直接返回请求 */
      return request
    }
    return request
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    return res
  },
  // 请求失败
  error => {
    const { response } = error
    console.log(error)
    console.log(response)
    if (response) {
      console.log(response)
      // 请求已发出，但是不在2xx的范围
      errorHandle(response)
      return Promise.reject(response)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance
