<!-- 折线 -->

<template>
  <div class="demo">
    <div class="box">
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
import { Line } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = [
      { month: 'Jan', key: 'series1', value: 125 },
      { month: 'Jan', key: 'series2', value: 51 },
      { month: 'Feb', key: 'series1', value: 132 },
      { month: 'Feb', key: 'series2', value: 91 },
      { month: 'Mar', key: 'series1', value: 141 },
      { month: 'Mar', key: 'series2', value: 34 },
      { month: 'Apr', key: 'series1', value: 158 },
      { month: 'Apr', key: 'series2', value: 47 },
      { month: 'May', key: 'series1', value: 133 },
      { month: 'May', key: 'series2', value: 63 },
      { month: 'June', key: 'series1', value: 143 },
      { month: 'June', key: 'series2', value: 58 },
      { month: 'July', key: 'series1', value: 176 },
      { month: 'July', key: 'series2', value: 56 },
      { month: 'Aug', key: 'series1', value: 194 },
      { month: 'Aug', key: 'series2', value: 77 },
      { month: 'Sep', key: 'series1', value: 115 },
      { month: 'Sep', key: 'series2', value: 99 },
      { month: 'Oct', key: 'series1', value: 134 },
      { month: 'Oct', key: 'series2', value: 106 },
      { month: 'Nov', key: 'series1', value: 110 },
      { month: 'Nov', key: 'series2', value: 88 },
      { month: 'Dec', key: 'series1', value: 91 },
      { month: 'Dec', key: 'series2', value: 56 }
    ]
    const line = new Line('container', {
      data,
      xField: 'month',
      yField: 'value',
      legend: false,
      seriesField: 'key',
      stepType: 'hvh'
    })

    line.render()
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
}
</style>
