<!-- 柱状图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>分组柱状图</h3>
      <div id="container"></div>
    </div>
    <div class="box">
      <h3>堆叠分组柱状图</h3>
      <div id="containerg2"></div>
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
          name: 'London',
          月份: 'Jan.',
          月均降雨量: 18.9
        },
        {
          name: 'London',
          月份: 'Feb.',
          月均降雨量: 28.8
        },
        {
          name: 'London',
          月份: 'Mar.',
          月均降雨量: 39.3
        },
        {
          name: 'London',
          月份: 'Apr.',
          月均降雨量: 81.4
        },
        {
          name: 'London',
          月份: 'May',
          月均降雨量: 47
        },
        {
          name: 'London',
          月份: 'Jun.',
          月均降雨量: 20.3
        },
        {
          name: 'London',
          月份: 'Jul.',
          月均降雨量: 24
        },
        {
          name: 'London',
          月份: 'Aug.',
          月均降雨量: 35.6
        },
        {
          name: 'Berlin',
          月份: 'Jan.',
          月均降雨量: 12.4
        },
        {
          name: 'Berlin',
          月份: 'Feb.',
          月均降雨量: 23.2
        },
        {
          name: 'Berlin',
          月份: 'Mar.',
          月均降雨量: 34.5
        },
        {
          name: 'Berlin',
          月份: 'Apr.',
          月均降雨量: 99.7
        },
        {
          name: 'Berlin',
          月份: 'May',
          月均降雨量: 52.6
        },
        {
          name: 'Berlin',
          月份: 'Jun.',
          月均降雨量: 35.5
        },
        {
          name: 'Berlin',
          月份: 'Jul.',
          月均降雨量: 37.4
        },
        {
          name: 'Berlin',
          月份: 'Aug.',
          月均降雨量: 42.4
        }
      ],
      datalist: [
        {
          product_type: '办公用品',
          sex: '男',
          order_amt: 8,
          product_sub_type: '橡皮擦'
        },
        {
          product_type: '办公用品',
          sex: '男',
          order_amt: 10,
          product_sub_type: '书架'
        },
        {
          product_type: '办公用品',
          sex: '男',
          order_amt: 20,
          product_sub_type: '砚台'
        },
        {
          product_type: '办公用品',
          sex: '女',
          order_amt: 13,
          product_sub_type: '砚台'
        },
        {
          product_type: '办公用品',
          sex: '女',
          order_amt: 21,
          product_sub_type: '橡皮擦'
        },
        {
          product_type: '办公用品',
          sex: '女',
          order_amt: 21,
          product_sub_type: '书架'
        },

        {
          product_type: '家电家具',
          sex: '男',
          order_amt: 13,
          product_sub_type: '洗衣机'
        },
        {
          product_type: '家电家具',
          sex: '女',
          order_amt: 2,
          product_sub_type: '洗衣机'
        },
        {
          product_type: '家电家具',
          sex: '男',
          order_amt: 5,
          product_sub_type: '微波炉'
        },
        {
          product_type: '家电家具',
          sex: '男',
          order_amt: 14,
          product_sub_type: '电磁炉'
        },
        {
          product_type: '家电家具',
          sex: '女',
          order_amt: 23,
          product_sub_type: '微波炉'
        },
        {
          product_type: '家电家具',
          sex: '女',
          order_amt: 23,
          product_sub_type: '电磁炉'
        },

        {
          product_type: '电子产品',
          sex: '男',
          order_amt: 33,
          product_sub_type: '电脑'
        },
        {
          product_type: '电子产品',
          sex: '女',
          order_amt: 4,
          product_sub_type: '电脑'
        },
        {
          product_type: '电子产品',
          sex: '女',
          order_amt: 23,
          product_sub_type: 'switch'
        },
        {
          product_type: '电子产品',
          sex: '男',
          order_amt: 20.9,
          product_sub_type: 'switch'
        },
        {
          product_type: '电子产品',
          sex: '男',
          order_amt: 5.9,
          product_sub_type: '鼠标'
        },
        {
          product_type: '电子产品',
          sex: '女',
          order_amt: 5.9,
          product_sub_type: '鼠标'
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const stackedColumnPlot = new Column('container', {
      data,
      isGroup: true,
      xField: '月份',
      yField: '月均降雨量',
      seriesField: 'name',
      /** 设置颜色 */
      // color: ['#1ca9e6', '#f88c24'],
      /** 设置间距 */
      // marginRatio: 0.1,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'middle', 'bottom'
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

    this.containerg2()
  },
  methods: {
    containerg2 () {
      const data = this.datalist
      const column = new Column('containerg2', {
        data,
        xField: 'product_type',
        yField: 'order_amt',
        isGroup: true,
        isStack: true,
        seriesField: 'product_sub_type',
        groupField: 'sex'
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
  #containerg2{
    display block
    width 500px
    height 300px
  }
}
</style>
