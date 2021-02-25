<!-- 首页 -->
<template>
  <div class="demo_index">
    <div class="demo_left">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :default-openeds="defaultOpen"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>折线图</span>
              </template>
              <el-menu-item index="1-1">基础折线图</el-menu-item>
              <el-menu-item index="1-2">多折线图</el-menu-item>
              <el-menu-item index="1-3">阶梯折线图</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu> -->
            <!-- <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>折线图</span>
              </template>
              <el-menu-item index="1-1">基础折线图</el-menu-item>
              <el-menu-item index="1-2">多折线图</el-menu-item>
              <el-menu-item index="1-3">阶梯折线图</el-menu-item>
            </el-submenu> -->

            <el-submenu v-for="(item, indexf) in menuList" :key="indexf" :index="String(indexf)">
              <template slot="title">
                <i
                  :class="
                    item.iconUrl
                      ? 'colorIcon iconfont ' + item.iconUrl
                      : 'colorIcon iconfont icon-mokuaiguanli'
                  "
                ></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="(items, indexs) in item.childMenu"
                :key="indexs"
                @click="menuClick(items.url)"
              >
                {{ items.title }}
              </el-menu-item>
            </el-submenu>

            <!-- <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item> -->
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="demo_right">
      <!-- <transition name="fade" mode="in-out"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultOpen: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ],
      menuList: [
        {
          title: '折线图',
          iconUrl: 'icon-tubiao-zhexiantu',
          childMenu: [
            { title: '基础折线图', url: '/line_index' },
            { title: '多折线图', url: '/multiLine' },
            { title: '阶梯折线图', url: '/ladderLine' }
          ]
        },
        {
          title: '面积图',
          iconUrl: 'icon-duijimianjitu',
          childMenu: [
            { title: '基础面积图', url: '/area_index' },
            { title: '堆积面积图', url: '/stackingArea' },
            { title: '百分比面积图', url: '/percentageHeap' }
          ]
        },
        {
          title: '柱形图',
          iconUrl: 'icon-zhuxingtu',
          childMenu: [
            { title: '基础柱状图', url: '/histogram' },
            { title: '堆叠柱状图', url: '/histogramStacking' },
            { title: '分组柱状图', url: '/groupingHistogram' },
            { title: '百分比柱状图', url: '/linkageHistogram' },
            { title: '区间柱状图', url: '/intervalHistogram' }
          ]
        },
        {
          title: '条形图',
          iconUrl: 'icon-icon-',
          childMenu: [
            { title: '基础条形图', url: '/barChart' },
            { title: '堆叠条形图', url: '/stacked-bar-chart' },
            { title: '分组条形图', url: '/grouping-bar-chart' },
            { title: '百分比条形图', url: '/bar-chart' },
            { title: '区间条形图', url: '/Interval-bar-chart' }
          ]
        },
        {
          title: '饼图',
          iconUrl: 'icon-bingtu',
          childMenu: [
            { title: '饼图', url: '/pieChart' },
            { title: '环图', url: '' }
          ]
        },
        {
          title: '双轴图',
          iconUrl: '',
          childMenu: [
            { title: '双折线图', url: '' },
            { title: '柱线混合图', url: '' },
            { title: '堆叠柱 + 折线混合图表', url: '' },
            { title: '分组柱 + 折线混合图表', url: '' },
            { title: '堆叠分组柱 + 折线混合图表', url: '' }
          ]
        },
        {
          title: '进度图',
          iconUrl: 'icon-jindudengdai',
          childMenu: [
            { title: '仪表盘', url: '' },
            { title: '水波图', url: '' },
            { title: '子弹图', url: '' }
          ]
        },
        {
          title: '散点气泡图',
          iconUrl: 'icon-sandiantu',
          childMenu: [
            { title: '气泡图', url: '' },
            { title: '散点图', url: '' }
          ]
        },
        {
          title: '玫瑰图',
          iconUrl: 'icon-meiguitu',
          childMenu: [
            { title: '基础玫瑰图', url: '' },
            { title: '分组玫瑰图', url: '' },
            { title: '堆叠玫瑰图', url: '' }
          ]
        },
        {
          title: '关系图',
          iconUrl: 'icon-guanxitu',
          childMenu: [
            { title: '桑葚图', url: '' },
            { title: '弦图', url: '' }
          ]
        },
        {
          title: '热力图',
          iconUrl: 'icon-relitu',
          childMenu: [
            { title: '热力图', url: '' },
            { title: '密度热力图', url: '' }
          ]
        },
        {
          title: '迷你图',
          iconUrl: 'icon-mokuaiguanli',
          childMenu: [
            { title: '迷你折线图', url: '' },
            { title: '迷你面积图', url: '' },
            { title: '迷你柱形图', url: '' },
            { title: '进度条图', url: '' },
            { title: '进度环图', url: '' }
          ]
        },
        {
          title: '更多图表',
          iconUrl: 'icon-mokuaiguanli',
          childMenu: [
            { title: '雷达图', url: '' },
            { title: '矩形树图', url: '' },
            { title: '漏斗图', url: '' },
            { title: '瀑布图', url: '' },
            { title: '词云图', url: '' },
            { title: '直方图', url: '' },
            { title: '旭日图', url: '' },
            { title: '对称条形图', url: '' },
            { title: '玉环图', url: '' },
            { title: '箱型图', url: '' },
            { title: '股票图', url: '' }
          ]
        },
        {
          title: '动态交互图',
          iconUrl: 'icon-mokuaiguanli',
          childMenu: [{ title: '动态更新数据', url: '' }]
        }
      ]
    }
  },
  beforeRouteUpdate (to, from, next) {
    const isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    menuClick (url) {
      this.$router.push({ path: url })
    }
  }
}
</script>

<style lang="stylus" scoped>
.demo_index{
  box-sizing border-box
  height 100vh
  padding 0
  display flex
  .demo_left{
    width 250px
    height 100%
    overflow auto
    .tac{
      width 100%
    }
    .colorIcon{
      color #ffffff
    }
  }
  .demo_right{
    flex 1
    height 100vh
    overflow auto
  }
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
