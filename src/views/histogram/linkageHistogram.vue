<!-- 柱状图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>带联动区域的百分比柱状图</h3>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
import { Column, G2 } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        { year: '2013', type: 'Kernenergie', value: 92.1 },
        { year: '2013', type: 'Braunkohle', value: 145.1 },
        { year: '2013', type: 'Steinkohle', value: 110.6 },
        { year: '2013', type: 'Gas', value: 39.4 },
        { year: '2013', type: 'Wasserkraft', value: 21.0 },
        { year: '2013', type: 'Biomasse', value: 48.3 },
        { year: '2013', type: 'Wind', value: 47.2 },
        { year: '2013', type: 'Solar', value: 29.7 },
        { year: '2014', type: 'Kernenergie', value: 91.8 },
        { year: '2014', type: 'Braunkohle', value: 140.9 },
        { year: '2014', type: 'Steinkohle', value: 99.0 },
        { year: '2014', type: 'Gas', value: 33.2 },
        { year: '2014', type: 'Wasserkraft', value: 18.5 },
        { year: '2014', type: 'Biomasse', value: 53.9 },
        { year: '2014', type: 'Wind', value: 51.4 },
        { year: '2014', type: 'Solar', value: 32.8 },
        { year: '2015', type: 'Kernenergie', value: 87.1 },
        { year: '2015', type: 'Braunkohle', value: 139.4 },
        { year: '2015', type: 'Steinkohle', value: 103.9 },
        { year: '2015', type: 'Gas', value: 30.0 },
        { year: '2015', type: 'Wasserkraft', value: 20.2 },
        { year: '2015', type: 'Biomasse', value: 56.5 },
        { year: '2015', type: 'Wind', value: 84.6 },
        { year: '2015', type: 'Solar', value: 36.8 },
        { year: '2016', type: 'Kernenergie', value: 80.0 },
        { year: '2016', type: 'Braunkohle', value: 134.8 },
        { year: '2016', type: 'Steinkohle', value: 100.0 },
        { year: '2016', type: 'Gas', value: 45.2 },
        { year: '2016', type: 'Wasserkraft', value: 20.8 },
        { year: '2016', type: 'Biomasse', value: 49.3 },
        { year: '2016', type: 'Wind', value: 77.8 },
        { year: '2016', type: 'Solar', value: 37.5 }
      ]
    }
  },
  mounted () {
    G2.registerInteraction('element-link', {
      start: [{ trigger: 'interval:mouseenter', action: 'element-link-by-color:link' }],
      end: [{ trigger: 'interval:mouseleave', action: 'element-link-by-color:unlink' }]
    })
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const columnPlot = new Column('container', {
      data,
      xField: 'year',
      yField: 'value',
      seriesField: 'type', // 拆分字段，在分组柱状图下同 groupField、colorField，在堆积柱状图下同 stackField、colorField。
      isPercent: true, // 是否堆积百分比柱状图
      isStack: true, // 是否堆积柱状图。
      meta: {
        value: {
          min: 0,
          max: 1
        }
      },
      label: {
        position: 'middle',
        content: (item) => {
          return `${(item.value * 100).toFixed(2)}%`
        },
        style: {
          fill: '#fff'
        }
      },
      tooltip: false,
      interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }]
    })

    columnPlot.render()
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
