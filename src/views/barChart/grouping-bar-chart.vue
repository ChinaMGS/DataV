<!-- 条形图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>分组条形图</h3>
      <div id="container"></div>
    </div>
    <div class="box">
      <h3>圆角条形图</h3>
      <div id="containerGs"></div>
    </div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        {
          label: 'Mon.',
          type: 'series1',
          value: 2800
        },
        {
          label: 'Mon.',
          type: 'series2',
          value: 2260
        },
        {
          label: 'Tues.',
          type: 'series1',
          value: 1800
        },
        {
          label: 'Tues.',
          type: 'series2',
          value: 1300
        },
        {
          label: 'Wed.',
          type: 'series1',
          value: 950
        },
        {
          label: 'Wed.',
          type: 'series2',
          value: 900
        },
        {
          label: 'Thur.',
          type: 'series1',
          value: 500
        },
        {
          label: 'Thur.',
          type: 'series2',
          value: 390
        },
        {
          label: 'Fri.',
          type: 'series1',
          value: 170
        },
        {
          label: 'Fri.',
          type: 'series2',
          value: 100
        }
      ],
      datalist: [
        {
          label: 'Mon.',
          type: 'series1',
          value: 2800
        },
        {
          label: 'Mon.',
          type: 'series2',
          value: 2260
        },
        {
          label: 'Tues.',
          type: 'series1',
          value: 1800
        },
        {
          label: 'Tues.',
          type: 'series2',
          value: 1300
        },
        {
          label: 'Wed.',
          type: 'series1',
          value: 950
        },
        {
          label: 'Wed.',
          type: 'series2',
          value: 900
        },
        {
          label: 'Thur.',
          type: 'series1',
          value: 500
        },
        {
          label: 'Thur.',
          type: 'series2',
          value: 390
        },
        {
          label: 'Fri.',
          type: 'series1',
          value: 170
        },
        {
          label: 'Fri.',
          type: 'series2',
          value: 100
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const bar = new Bar('container', {
      data,
      isGroup: true,
      xField: 'value',
      yField: 'label',
      /** 自定义颜色 */
      // color: ['#1383ab', '#c52125'],
      seriesField: 'type',
      marginRatio: 0,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'left', 'middle', 'right'
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

    bar.render()

    this.containerGs()
  },
  methods: {
    containerGs () {
      const data = this.datalist
      const column = new Bar('containerGs', {
        data,
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        marginRatio: 0,
        label: {
          // 可手动配置 label 数据标签位置
          position: 'right', // 'left', 'middle', 'right'
          offset: 4
        },
        barStyle: { radius: [2, 2, 0, 0] }
      })

      column.render()
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
