export default [
  // ------------------------------------------物业模块------------------------------------
  // --------------------物业公司接收楼盘 start-----------------
  {
    path: '/receiveBuilding',
    name: 'ReceiveBuilding',
    component: () => import('@/views/property_module/receiveBuilding/index.vue') // 列表页
  },
  {
    path: '/receiveBuildingApproval',
    name: 'ReceiveBuildingApproval',
    meta: {
      routeName: '签约'
    },
    component: () => import('@/views/property_module/receiveBuilding/receiveBuildingApproval.vue') // 签约页
  },
  {
    path: '/receiveBuildingDetails',
    name: 'ReceiveBuildingDetails',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/property_module/receiveBuilding/receiveBuildingApproval.vue') // 详情页
  },
  // --------------------物业公司接收楼盘 end-----------------
  // --------------------物业公司预约验房记录 start-----------------
  {
    path: '/roomReservation',
    name: 'RoomReservation',
    component: () => import('@/views/property_module/roomReservation/index.vue') // 列表页
  },
  // --------------------物业公司预约验房记录 end-----------------
  // ---------------------------物业模块----------------------------
  {
    path: '/housingResources',
    name: 'HousingResources',
    component: () => import('@/views/property_module/housingResources') // 房源物业管理 首页
  },
  {
    path: '/housingResourcesDetail',
    name: 'HousingResourcesDetail',
    component: () => import('@/views/property_module/housingResources/detail') // 房源物业管理 首页
  }
]
