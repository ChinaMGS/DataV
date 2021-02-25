export default [
  // ---------------------------系统管理模块----------------------------
  // -----------------------------权限分配------------------------
  {
    path: '/jurisDistri',
    name: 'JurisDistri',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/system_management/jurisDistri/index.vue') // 权限分配
  },
  {
    path: '/jurisDistriEdit',
    name: 'JurisDistriEdit',
    meta: {
      routeName: '编辑'
    },
    component: () => import('@/views/system_management/jurisDistri/jurisDistriEdit.vue') // 权限分配编辑
  },
  // -----------------------------角色管理------------------------
  {
    path: '/roleManage',
    name: 'RoleManage',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/system_management/roleManage/index.vue') // 角色管理
  },
  {
    path: '/roleManageAdd',
    name: 'RoleManageAdd',
    meta: {
      routeName: '添加'
    },
    component: () => import('@/views/system_management/roleManage/roleManageAdd.vue') // 角色管理添加
  },
  {
    path: '/roleManageModify',
    name: 'RoleManageModify',
    meta: {
      routeName: '编辑'
    },
    component: () => import('@/views/system_management/roleManage/roleManageModify.vue') // 角色管理修改
  },
  {
    path: '/roleManageDetails',
    name: 'RoleManageDetails',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/system_management/roleManage/roleManageDetails.vue') // 角色管理详情
  },
  // -------------------------------权限管理--------------------------
  {
    path: '/jurisManage',
    name: 'JurisManagement',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/system_management/jurisManage/index.vue') // 权限管理
  },
  {
    path: '/jurisManageAdd',
    name: 'JurisManagementAdd',
    meta: {
      routeName: '添加'
    },
    component: () => import('@/views/system_management/jurisManage/jurisManageAdd.vue') // 权限管理添加
  },
  {
    path: '/jurisManageModify',
    name: 'JurisManagementModify',
    meta: {
      routeName: '编辑'
    },
    component: () => import('@/views/system_management/jurisManage/jurisManageModify.vue') // 权限管理修改
  },
  {
    path: '/jurisManageDetails',
    name: 'JurisManagementDetails',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/system_management/jurisManage/jurisManageDetails.vue') // 权限管理详情
  },
  // --------------------------------机构管理----------------------------
  {
    path: '/organManage',
    name: 'OrganManage',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/system_management/organManage/index.vue') // 机构管理
  },
  {
    path: '/organManageAdd',
    name: 'OrganManageAdd',
    meta: {
      routeName: '添加'
    },

    component: () => import('@/views/system_management/organManage/organManageAdd.vue') // 机构管理添加
  },
  {
    path: '/organManageModify',
    name: 'OrganManageModify',
    meta: {
      routeName: '编辑'
    },

    component: () => import('@/views/system_management/organManage/organManageModify.vue') // 机构管理修改
  },
  {
    path: '/organManageDetails',
    name: 'OrganManageDetails',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/system_management/organManage/organManageDetails.vue') // 机构管理详情
  },
  // --------------------------------用户管理----------------------------
  {
    path: '/UserManagement',
    name: 'UserManagement',
    meta: {
      keepalive: true
    },
    component: () => import('@/views/system_management/userManagement/index.vue') // 用户管理
  },
  {
    path: '/UserManagementAdd',
    name: 'UserManagementAdd',
    meta: {
      routeName: '添加'
    },
    component: () => import('@/views/system_management/userManagement/userManagementAdd.vue') // 用户管理添加
  },
  {
    path: '/UserManagementModify',
    name: 'UserManagementModify',
    meta: {
      routeName: '编辑'
    },
    component: () => import('@/views/system_management/userManagement/userManagementModify.vue') // 用户管理修改
  },
  {
    path: '/UserManagementDetails',
    name: 'UserManagementDetails',
    meta: {
      routeName: '详情'
    },
    component: () => import('@/views/system_management/userManagement/userManagementDetails.vue') // 用户管理详情
  },
  {
    path: '/UserBasicManagement',
    name: 'UserBasicManagement',
    meta: {
      routeName: '基本信息'
    },
    component: () => import('@/views/system_management/userManagement/userBasicManagement.vue') // 用户管理详情
  },
  {
    path: '/UserManagementUpdate',
    name: 'UserManagementUpdate',
    meta: {
      routeName: '基本信息'
    },
    component: () => import('@/views/system_management/userManagement/userManagementUpdate.vue') // 用户管理详情
  },
  {
    path: '/UserManagementAccount',
    name: 'UserManagementAccount',
    meta: {
      routeName: '企业账户管理'
    },
    component: () => import('@/views/system_management/userManagement/userManagementAccount.vue') // 企业账户管理
  },
  {
    path: '/SealRecord',
    name: 'SealRecord',
    component: () => import('@/views/system_management/userManagement/sealRecord.vue') // 盖章记录
  },
  {
    path: '/CreditScore',
    name: 'CreditScore',
    component: () => import('@/views/system_management/userManagement/creditScore.vue') // 信誉分记录
  },
  {
    path: '/NewsManagement',
    name: 'NewsManagement',
    component: () => import('@/views/system_management/userManagement/newsManagement.vue') // 信息管理
  }
]
