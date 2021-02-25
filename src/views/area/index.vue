<!-- 面积图 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>基础面积图</h3>
      <div id="container"></div>
    </div>

  </div>
</template>

<script>
import { Area } from '@antv/g2plot'

export default {
  components: {},
  data () {
    return {
      data: [
        {
          timePeriod: '2006 Q3',
          value: 1
        },
        {
          timePeriod: '2006 Q4',
          value: 1.08
        },
        {
          timePeriod: '2007 Q1',
          value: 1.17
        },
        {
          timePeriod: '2007 Q2',
          value: 1.26
        },
        {
          timePeriod: '2007 Q3',
          value: 1.34
        },
        {
          timePeriod: '2007 Q4',
          value: 1.41
        },
        {
          timePeriod: '2008 Q1',
          value: 1.52
        },
        {
          timePeriod: '2008 Q2',
          value: 1.67
        },
        {
          timePeriod: '2008 Q3',
          value: 1.84
        },
        {
          timePeriod: '2008 Q4',
          value: 2.07
        },
        {
          timePeriod: '2009 Q1',
          value: 2.39
        },
        {
          timePeriod: '2009 Q2',
          value: 2.71
        },
        {
          timePeriod: '2009 Q3',
          value: 3.03
        },
        {
          timePeriod: '2009 Q4',
          value: 3.33
        },
        {
          timePeriod: '2010 Q1',
          value: 3.5
        },
        {
          timePeriod: '2010 Q2',
          value: 3.37
        },
        {
          timePeriod: '2010 Q3',
          value: 3.15
        },
        {
          timePeriod: '2010 Q4',
          value: 3.01
        },
        {
          timePeriod: '2011 Q1',
          value: 2.8
        },
        {
          timePeriod: '2011 Q2',
          value: 2.8
        },
        {
          timePeriod: '2011 Q3',
          value: 2.84
        },
        {
          timePeriod: '2011 Q4',
          value: 2.75
        },
        {
          timePeriod: '2012 Q1',
          value: 2.64
        },
        {
          timePeriod: '2012 Q2',
          value: 2.55
        },
        {
          timePeriod: '2012 Q3',
          value: 2.46
        },
        {
          timePeriod: '2012 Q4',
          value: 2.45
        },
        {
          timePeriod: '2013 Q1',
          value: 2.57
        },
        {
          timePeriod: '2013 Q2',
          value: 2.68
        },
        {
          timePeriod: '2013 Q3',
          value: 2.8
        },
        {
          timePeriod: '2013 Q4',
          value: 2.89
        },
        {
          timePeriod: '2014 Q1',
          value: 2.85
        },
        {
          timePeriod: '2014 Q2',
          value: 2.73
        },
        {
          timePeriod: '2014 Q3',
          value: 2.54
        },
        {
          timePeriod: '2014 Q4',
          value: 2.32
        },
        {
          timePeriod: '2015 Q1',
          value: 2.25
        },
        {
          timePeriod: '2015 Q2',
          value: 2.33
        },
        {
          timePeriod: '2015 Q3',
          value: 2.53
        },
        {
          timePeriod: '2015 Q4',
          value: 2.74
        },
        {
          timePeriod: '2016 Q1',
          value: 2.76
        },
        {
          timePeriod: '2016 Q2',
          value: 2.61
        },
        {
          timePeriod: '2016 Q3',
          value: 2.35
        },
        {
          timePeriod: '2016 Q4',
          value: 2.11
        },
        {
          timePeriod: '2017 Q1',
          value: 2.08
        },
        {
          timePeriod: '2017 Q2',
          value: 2.2
        },
        {
          timePeriod: '2017 Q3',
          value: 2.38
        },
        {
          timePeriod: '2017 Q4',
          value: 2.59
        },
        {
          timePeriod: '2018 Q1',
          value: 2.63
        },
        {
          timePeriod: '2018 Q2',
          value: 2.67
        },
        {
          timePeriod: '2018 Q3',
          value: 2.64
        },
        {
          timePeriod: '2018 Q4',
          value: 2.5
        },
        {
          timePeriod: '2019 Q1',
          value: 2.31
        },
        {
          timePeriod: '2019 Q2',
          value: 2.04
        },
        {
          timePeriod: '2019 Q3',
          value: 1.83
        },
        {
          timePeriod: '2019 Q4',
          value: 1.71
        },
        {
          timePeriod: '2020 Q1',
          value: 1.65
        },
        {
          timePeriod: '2020 Q2',
          value: 1.59
        },
        {
          timePeriod: '2020 Q3',
          value: 1.58
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const area = new Area('container', {
      data,
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1]
      },
      yAxis: {
        text: 'Y 轴标题',
        nice: true,
        min: 0,
        max: 4,
        tickInterval: 1
      },
      areaStyle: () => { // 上下覆盖面积颜色渐变
        return {
          fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
        }
      }
    })
    area.render()

    const that = this
    setInterval(() => {
      const a = that.data
      const num = Number(a[a.length - 1].timePeriod.slice(0, 4)) + 1
      a.push({
        timePeriod: num + ' Q3',
        value: Number((Math.random() * 3).toFixed(2)) + 1
      })
      that.data = this.curtail(a)
      area.changeData(that.data)
    }, 1000)
  },
  methods: {
    curtail (arr) {
      return arr.filter(function (ele, idx, arr) {
        return idx !== 0
      })
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
}
</style>
