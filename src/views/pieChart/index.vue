<!-- 饼图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>饼图</h3>
      <div id="container"></div>
    </div>
    <div class="box">
      <h3>饼图-外部图形标签</h3>
      <div id="containerGs"></div>
    </div>
    <div class="box">
      <h3>饼图-蜘蛛布局标签</h3>
      <div id="containerGz"></div>
    </div>
    <div class="box">
      <h3>四分之一圆</h3>
      <div id="containerpt"></div>
    </div>
    <div class="box">
      <h3>饼图-图例交互</h3>
      <div id="containerGet"></div>
    </div>
    <div class="box">
      <h3>带纹理的饼图</h3>
      <div id="containerTexture"></div>
    </div>
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        { type: '分类一', value: 27 },
        { type: '分类二', value: 25 },
        { type: '分类三', value: 18 },
        { type: '分类四', value: 15 },
        { type: '分类五', value: 10 },
        { type: '其他', value: 5 }
      ],
      Texture: [
        { sex: '男', sold: 0.45 },
        { sex: '女', sold: 0.55 }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const piePlot = new Pie('container', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center'
        }
      },
      interactions: [{ type: 'element-active' }]
    })

    piePlot.render()

    this.containerGs()
    this.containerGz()
    this.containerpt()
    this.containerGet()
    this.containerTexture()
  },
  methods: {
    containerGs () {
      const data = this.data
      const piePlot = new Pie('containerGs', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'outer'
        },
        interactions: [{ type: 'element-active' }]
      })

      piePlot.render()
    },
    containerGz () {
      const data = this.data
      const piePlot = new Pie('containerGz', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        label: {
          type: 'spider',
          labelHeight: 28,
          content: '{name}\n{percentage}'
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }]
      })

      piePlot.render()
    },
    containerpt () {
      const data = this.data
      const piePlot = new Pie('containerpt', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        // 设置圆弧起始角度
        startAngle: Math.PI,
        endAngle: Math.PI * 1.5,
        label: {
          type: 'inner',
          offset: '-8%',
          content: '{name}',
          style: { fontSize: 18 }
        },
        interactions: [{ type: 'element-active' }],
        pieStyle: {
          lineWidth: 0
        }
      })

      piePlot.render()
    },
    containerGet () {
      const data = this.data
      const piePlot = new Pie('containerGet', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}'
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }]
      })

      piePlot.render()
    },
    containerTexture () {
      const data = this.Texture
      const piePlot = new Pie('containerTexture', {
        appendPadding: 10,
        data,
        angleField: 'sold',
        colorField: 'sex',
        radius: 0.8,
        legend: false,
        label: {
          type: 'inner',
          offset: '-50%',
          style: {
            fill: '#fff',
            fontSize: 18,
            textAlign: 'center'
          }
        },
        pieStyle: ({ sex }) => {
          if (sex === '男') {
            return {
              fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png'
            }
          }
          return {
            fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png'
          }
        },
        tooltip: false,
        interactions: [{ type: 'element-single-selected' }]
      })

      piePlot.render()
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
  #containerpt{
    display block
    width 500px
    height 300px
  }
  #containerGet{
    display block
    width 500px
    height 300px
  }
  #containerTexture{
    display block
    width 500px
    height 300px
  }
}
</style>
