import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决vue-router报NavigationDuplicated的方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

// 不受限的路由，直接挂载
export const constantRoutes = [
  // ----------------------------登录相关------------------------------
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    redirect: '/histogram',
    children: [
      {
        path: '/ss',
        name: 'line_index',
        component: () => import('@/views/line/index.vue')
      },

      {
        path: '/line_index',
        name: 'Line_indexs',
        component: () => import('@/views/line/index.vue')
      },
      {
        path: '/multiLine',
        name: 'MultiLine',
        component: () => import('@/views/line/multiLine.vue')
      },
      {
        path: '/ladderLine',
        name: 'LadderLine',
        component: () => import('@/views/line/ladderLine.vue')
      },

      {
        path: '/area_index',
        name: 'Area_index',
        component: () => import('@/views/area/index.vue')
      },
      {
        path: '/stackingArea',
        name: 'StackingArea',
        component: () => import('@/views/area/stackingArea.vue')
      },
      {
        path: '/percentageHeap',
        name: 'PercentageHeap',
        component: () => import('@/views/area/percentageHeap.vue')
      },

      {
        path: '/histogram',
        name: 'Histogram',
        component: () => import('@/views/histogram/index.vue')
      },
      {
        path: '/histogramStacking',
        name: 'HistogramStacking',
        component: () => import('@/views/histogram/stacking.vue')
      },
      {
        path: '/groupingHistogram',
        name: 'GroupingHistogram',
        component: () => import('@/views/histogram/groupingHistogram.vue')
      },
      {
        path: '/linkageHistogram',
        name: 'LinkageHistogram',
        component: () => import('@/views/histogram/linkageHistogram.vue')
      },
      {
        path: '/intervalHistogram',
        name: 'IntervalHistogram',
        component: () => import('@/views/histogram/IntervalHistogram.vue')
      },
      // 条形图
      {
        path: '/barChart',
        name: 'BarChart',
        component: () => import('@/views/barChart/index.vue')
      },
      {
        path: '/stacked-bar-chart',
        name: 'Stacked-bar-chart',
        component: () => import('@/views/barChart/stacked-bar-chart.vue')
      },
      {
        path: '/grouping-bar-chart',
        name: 'Grouping-bar-chart',
        component: () => import('@/views/barChart/grouping-bar-chart.vue')
      },
      {
        path: '/bar-chart',
        name: 'Bar-chart',
        component: () => import('@/views/barChart/bar-chart.vue')
      },
      {
        path: '/Interval-bar-chart',
        name: 'Interval-bar-chart',
        component: () => import('@/views/barChart/Interval-bar-chart.vue')
      },
      // 饼图
      {
        path: '/pieChart',
        name: 'PieChart',
        component: () => import('@/views/pieChart/index.vue')
      }
    ]
  },
  {
    path: '/demoIndex',
    name: 'demoIndex',
    component: () => import('@/views/demo/index.vue')
  }
]

// 创建一个vue-router 并且每次切换页面都调整滚动条的高度,并且存入固定路由界面
const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

const router = createRouter()

const keepAlive = (routes = [], to) => {
  // 递归菜单路由添加缓存
  for (const i of routes) {
    if (i.path && i.path !== '/' && i.path === to.path) {
      to.meta.keepalive = true
    }
    if (i.children && i.children.length !== 0) {
      keepAlive(i.children, to)
    }
  }
}

router.beforeEach(function (to, from, next) {
  if (sessionStorage.getItem('menuData') && sessionStorage.getItem('menuData') !== 'null') {
    keepAlive(JSON.parse(sessionStorage.getItem('menuData')), to)
  }
  next()
})

// 重置路由方法
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
