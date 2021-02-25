<!-- 条形图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>百分百条形图</h3>
      <div id="container"></div>
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
          country: 'Asia',
          year: '1750',
          value: 502
        },
        {
          country: 'Asia',
          year: '1800',
          value: 635
        },
        {
          country: 'Asia',
          year: '1850',
          value: 809
        },
        {
          country: 'Asia',
          year: '1900',
          value: 947
        },
        {
          country: 'Asia',
          year: '1950',
          value: 1402
        },
        {
          country: 'Asia',
          year: '1999',
          value: 3634
        },
        {
          country: 'Asia',
          year: '2050',
          value: 5268
        },
        {
          country: 'Africa',
          year: '1750',
          value: 106
        },
        {
          country: 'Africa',
          year: '1800',
          value: 107
        },
        {
          country: 'Africa',
          year: '1850',
          value: 111
        },
        {
          country: 'Africa',
          year: '1900',
          value: 133
        },
        {
          country: 'Africa',
          year: '1950',
          value: 221
        },
        {
          country: 'Africa',
          year: '1999',
          value: 767
        },
        {
          country: 'Africa',
          year: '2050',
          value: 1766
        },
        {
          country: 'Europe',
          year: '1750',
          value: 163
        },
        {
          country: 'Europe',
          year: '1800',
          value: 203
        },
        {
          country: 'Europe',
          year: '1850',
          value: 276
        },
        {
          country: 'Europe',
          year: '1900',
          value: 408
        },
        {
          country: 'Europe',
          year: '1950',
          value: 547
        },
        {
          country: 'Europe',
          year: '1999',
          value: 729
        },
        {
          country: 'Europe',
          year: '2050',
          value: 628
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const bar = new Bar('container', {
      data,
      xField: 'value',
      yField: 'year',
      seriesField: 'country',
      isPercent: true,
      isStack: true,
      /** 自定义颜色 */
      // color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
      label: {
        position: 'middle',
        content: (item) => {
          return item.value.toFixed(2)
        },
        style: {
          fill: '#fff'
        }
      }
    })

    bar.render()
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
