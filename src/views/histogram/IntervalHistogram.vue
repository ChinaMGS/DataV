<!-- 柱状图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>区间柱状图</h3>
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
        { type: '分类一', values: [76, 100] },
        { type: '分类二', values: [56, 108] },
        { type: '分类三', values: [38, 129] },
        { type: '分类四', values: [58, 155] },
        { type: '分类五', values: [45, 120] },
        { type: '分类六', values: [23, 99] },
        { type: '分类七', values: [18, 56] },
        { type: '分类八', values: [18, 34] }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const barPlot = new Column('container', {
      data,
      xField: 'type',
      yField: 'values',
      isRange: true,
      label: {
        position: 'middle',
        layout: [{ type: 'adjust-color' }]
      }
    })

    barPlot.render()
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
