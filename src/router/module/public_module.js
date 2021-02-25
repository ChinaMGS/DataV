export default [
  // 公用模块----如用户中心等，每个机构类型都需要用到的
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/public_module/calendar/index.vue') // 日历
  },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('@/views/public_module/permission/index.vue') // 测试
  },
  {
    path: '/payOrder',
    name: 'payOrder',
    meta: {
      routeName: '支付',
      keepalive: true
    },
    component: () => import('@/views/public_module/payView/payOrder.vue') // 支付订单页面
  },
  // -----------------------------印章管理------------------------
  {
    path: '/sealManagement',
    name: 'SealManagement',
    component: () => import('@/views/public_module/sealManagement/index.vue') // 用户中心印章管理
  }
]
