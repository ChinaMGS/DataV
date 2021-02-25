<!-- 柱状图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>基础柱状图</h3>
      <div id="container"></div>
    </div>
    <div class="box">
      <h3>自定义柱状图颜色</h3>
      <div id="containerGs"></div>
    </div>
    <div class="box">
      <h3>带转化率柱状图</h3>
      <div id="containerGz"></div>
    </div>
  </div>
</template>

<script>
import { Column } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        {
          type: '家具家电',
          sales: 38
        },
        {
          type: '粮油副食',
          sales: 52
        },
        {
          type: '生鲜水果',
          sales: 61
        },
        {
          type: '美容洗护',
          sales: 145
        },
        {
          type: '母婴用品',
          sales: 48
        },
        {
          type: '进口食品',
          sales: 38
        },
        {
          type: '食品饮料',
          sales: 38
        },
        {
          type: '家庭清洁',
          sales: 38
        }
      ],
      datalist: [
        { type: '1-3秒', value: 0.16 },
        { type: '4-10秒', value: 0.125 },
        { type: '11-30秒', value: 0.24 },
        { type: '31-60秒', value: 0.19 },
        { type: '1-3分', value: 0.22 },
        { type: '3-10分', value: 0.05 },
        { type: '10-30分', value: 0.01 },
        { type: '30+分', value: 0.015 }
      ],
      dataPrice: [
        { action: '浏览网站', pv: 50000 },
        { action: '放入购物车', pv: 35000 },
        { action: '生成订单', pv: 25000 },
        { action: '支付订单', pv: 15000 },
        { action: '完成交易', pv: 8500 }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const columnPlot = new Column('container', {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 0.6
        }
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false
        }
      },
      meta: {
        type: {
          alias: '类别'
        },
        sales: {
          alias: '销售额'
        }
      }
    })

    columnPlot.render()

    this.containerGs()
    this.containerGz()
  },
  methods: {
    containerGs () {
      const paletteSemanticRed = '#F4664A'
      const brandColor = '#5B8FF9'
      const data = this.datalist
      const columnPlot = new Column('containerGs', {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: ({ type }) => {
          if (type === '10-30分' || type === '30+分') {
            return paletteSemanticRed
          }
          return brandColor
        },
        label: {
          content: (originData) => {
            const val = parseFloat(originData.value)
            if (val < 0.05) {
              return (val * 100).toFixed(1) + '%'
            }
          },
          offset: 10
        },
        legend: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false
          }
        }
      })

      columnPlot.render()
    },
    containerGz () {
      const data = this.dataPrice
      const columnPlot = new Column('containerGz', {
        data,
        xField: 'action',
        yField: 'pv',
        conversionTag: {},
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false
          }
        }
      })

      columnPlot.render()
    }
  },
  created () {
    // var wrapperElement = '<div style="position:relative;"></div>'
    // console.log(document.getElementById('container'))
    // document.getElementById('container').appendChild(wrapperElement)
    // setTimeout(() => {
    // }, 2000)
  }
}
</script>

<style lang="stylus" scoped>
.demo{
  display flex
  flex-flow wrap
  .box{
    box-shadow: 0px 2px 25px 0px rgba(133, 153, 181, 0.2);
    border-radius: 10px;
    display inline-block
    padding 0 20px 20px
    margin 20px
    h3{
      line-height 50px
      height 50px
      text-align center
    }
  }
  #container{
    display block
    width 500px
    height 300px
  }
  #containerGs{
    display block
    width 500px
    height 300px
  }
  #containerGz{
    display block
    width 500px
    height 300px
  }
}
</style>
