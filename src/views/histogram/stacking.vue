<!-- 柱状图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>堆叠柱状图</h3>
      <div id="container"></div>
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
          year: '1991',
          value: 3,
          type: 'Lon'
        },
        {
          year: '1992',
          value: 4,
          type: 'Lon'
        },
        {
          year: '1993',
          value: 3.5,
          type: 'Lon'
        },
        {
          year: '1994',
          value: 5,
          type: 'Lon'
        },
        {
          year: '1995',
          value: 4.9,
          type: 'Lon'
        },
        {
          year: '1996',
          value: 6,
          type: 'Lon'
        },
        {
          year: '1997',
          value: 7,
          type: 'Lon'
        },
        {
          year: '1998',
          value: 9,
          type: 'Lon'
        },
        {
          year: '1999',
          value: 13,
          type: 'Lon'
        },
        {
          year: '1991',
          value: 3,
          type: 'Bor'
        },
        {
          year: '1992',
          value: 4,
          type: 'Bor'
        },
        {
          year: '1993',
          value: 3.5,
          type: 'Bor'
        },
        {
          year: '1994',
          value: 5,
          type: 'Bor'
        },
        {
          year: '1995',
          value: 4.9,
          type: 'Bor'
        },
        {
          year: '1996',
          value: 6,
          type: 'Bor'
        },
        {
          year: '1997',
          value: 7,
          type: 'Bor'
        },
        {
          year: '1998',
          value: 9,
          type: 'Bor'
        },
        {
          year: '1999',
          value: 13,
          type: 'Bor'
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const stackedColumnPlot = new Column('container', {
      data,
      isStack: true,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' }
        ]
      }
    })

    stackedColumnPlot.render()
  },
  methods: {

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
