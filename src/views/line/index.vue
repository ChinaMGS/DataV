<!-- 折线图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>带有辅助标记的折线图</h3>
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
        { year: '1992', value: 6 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 3 },
        { year: '1999', value: 13 }
      ]
    }
  },
  mounted () {
    this.lineFun()
    // this.pointFun()
  },
  methods: {
    lineFun () {
      // 在 mounted 中构建，防止created 中无法获取标签元素
      const data = this.data
      const line = new Line('container', {
        data,
        xField: 'year',
        yField: 'value',
        // 自定义折线颜色
        // color: '#FE740C',
        // 更改辅助数据点大小及样式
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            stroke: '#FE740C',
            lineWidth: 2,
            fillOpacity: 0.6
          }
        },
        yAxis: {
          // 格式化 y 轴标签加单位，自定义 labal 样式
          label: {
            formatter: v => {
              return v + 'k'
            },
            style: {
              fill: '#FE740C'
            }
          }
        },
        // 添加label
        label: {
          fill: '#FE740C'
        },
        // 添加辅助文本、辅助线
        annotations: [
          {
            type: 'regionFilter',
            start: ['min', 'median'],
            end: ['max', '0'],
            color: '#F4664A'
          },
          {
            type: 'text',
            position: ['min', 'median'],
            content: '辅助标记',
            offsetY: -4,
            style: {
              textBaseline: 'bottom'
            }
          },
          {
            type: 'line',
            start: ['min', 'median'],
            end: ['max', 'median'],
            style: {
              stroke: '#F4664A',
              lineDash: [2, 2]
            }
          }
        ]
      })

      // element 添加点击事件
      line.on('element:click', e => {
        console.log(e)
      })

      // annotation 添加点击事件
      line.on('annotation:click', e => {
        console.log(e)
      })

      // axis-label 添加点击事件
      line.on('axis-label:click', e => {
        console.log(e)
      })

      line.render()
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
  #containerG2{
    display block
    width 500px
    height 300px
  }
}
</style>
