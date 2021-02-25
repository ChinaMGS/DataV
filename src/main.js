import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import { sha256 } from 'js-sha256' // 引入哈希加密
import api from './request/api' // 导入api接口
import '@/common/filter'
import '@/common/style/index.styl' // 引入样式表
import '@/common/iconfont/iconfont.css'
import '@/common/style/theme/index.css' // 引入elementui自定义主题
import ElementUI from 'element-ui'
import '@/common/style/elementui.css' // 初始化elementui样式
import inputFilter from '@/directives/input-filter/index.js' // 引入
import baseJs from './common/js/baseJs'
import regular from './common/js/regular'

// import 'element-ui/lib/theme-chalk/index.css'
// import '@/permission.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(baseJs)

// 声明全局属性
Object.assign(Vue.prototype, {
  $api: api,
  axios: axios,
  $sha256: sha256,
  $regular: regular,
  $baseJs: baseJs
})

// 防重复点击(全局指令)---20200518--dl
Vue.directive('preventReClick', {
  inserted (el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 1500)
      }
    })
  }
})
// console.log(window.location)
// const ipPort = window.location.href
// Vue.prototype.$ipPort = ipPort
// console.log(ipPort)

// 输入框类型指令
// 使用 v-inputFilter:financeMoney   v-inputFilter:名称
Vue.directive('inputFilter', inputFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
