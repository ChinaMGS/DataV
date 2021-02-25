<!-- 折线 -->

<template>
  <div class="demo">
    <div class="box">
      <h3>多折线动画</h3>
      <div id="container"></div>
    </div>
    <div class="box">
      <h3>带标注点的折线图</h3>
      <div id="containerG2"></div>
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
        {
          name: 'China',
          year: '2000',
          gdp: 1211346869605.24
        },
        {
          name: 'China',
          year: '2001',
          gdp: 1339395718865.3
        },
        {
          name: 'China',
          year: '2002',
          gdp: 1470550015081.55
        },
        {
          name: 'China',
          year: '2003',
          gdp: 1660287965662.68
        },
        {
          name: 'China',
          year: '2004',
          gdp: 1955347004963.27
        },
        {
          name: 'China',
          year: '2005',
          gdp: 2285965892360.54
        },
        {
          name: 'China',
          year: '2006',
          gdp: 2752131773355.16
        },
        {
          name: 'China',
          year: '2007',
          gdp: 3550342425238.25
        },
        {
          name: 'China',
          year: '2008',
          gdp: 4594306848763.08
        },
        {
          name: 'China',
          year: '2009',
          gdp: 5101702432883.45
        },
        {
          name: 'China',
          year: '2010',
          gdp: 6087164527421.24
        },
        {
          name: 'China',
          year: '2011',
          gdp: 7551500425597.77
        },
        {
          name: 'China',
          year: '2012',
          gdp: 8532230724141.76
        },
        {
          name: 'China',
          year: '2013',
          gdp: 9570405758739.79
        },
        {
          name: 'China',
          year: '2014',
          gdp: 10438529153237.6
        },
        {
          name: 'China',
          year: '2015',
          gdp: 11015542352468.9
        },
        {
          name: 'China',
          year: '2016',
          gdp: 11137945669350.6
        },
        {
          name: 'China',
          year: '2017',
          gdp: 12143491448186.1
        },
        {
          name: 'China',
          year: '2018',
          gdp: 13608151864637.9
        },
        {
          name: 'United States',
          year: '2000',
          gdp: 10252345464000
        },
        {
          name: 'United States',
          year: '2001',
          gdp: 10581821399000
        },
        {
          name: 'United States',
          year: '2002',
          gdp: 10936419054000
        },
        {
          name: 'United States',
          year: '2003',
          gdp: 11458243878000
        },
        {
          name: 'United States',
          year: '2004',
          gdp: 12213729147000
        },
        {
          name: 'United States',
          year: '2005',
          gdp: 13036640229000
        },
        {
          name: 'United States',
          year: '2006',
          gdp: 13814611414000
        },
        {
          name: 'United States',
          year: '2007',
          gdp: 14451858650000
        },
        {
          name: 'United States',
          year: '2008',
          gdp: 14712844084000
        },
        {
          name: 'United States',
          year: '2009',
          gdp: 14448933025000
        },
        {
          name: 'United States',
          year: '2010',
          gdp: 14992052727000
        },
        {
          name: 'United States',
          year: '2011',
          gdp: 15542581104000
        },
        {
          name: 'United States',
          year: '2012',
          gdp: 16197007349000
        },
        {
          name: 'United States',
          year: '2013',
          gdp: 16784849190000
        },
        {
          name: 'United States',
          year: '2014',
          gdp: 17521746534000
        },
        {
          name: 'United States',
          year: '2015',
          gdp: 18219297584000
        },
        {
          name: 'United States',
          year: '2016',
          gdp: 18707188235000
        },
        {
          name: 'United States',
          year: '2017',
          gdp: 19485393853000
        },
        {
          name: 'United States',
          year: '2018',
          gdp: 20544343456936.5
        },
        {
          name: 'United Kingdom',
          year: '2000',
          gdp: 1657816613708.58
        },
        {
          name: 'United Kingdom',
          year: '2001',
          gdp: 1640246149417.01
        },
        {
          name: 'United Kingdom',
          year: '2002',
          gdp: 1784473920863.31
        },
        {
          name: 'United Kingdom',
          year: '2003',
          gdp: 2053018775510.2
        },
        {
          name: 'United Kingdom',
          year: '2004',
          gdp: 2416931526913.22
        },
        {
          name: 'United Kingdom',
          year: '2005',
          gdp: 2538680000000
        },
        {
          name: 'United Kingdom',
          year: '2006',
          gdp: 2713749770009.2
        },
        {
          name: 'United Kingdom',
          year: '2007',
          gdp: 3100882352941.18
        },
        {
          name: 'United Kingdom',
          year: '2008',
          gdp: 2922667279411.76
        },
        {
          name: 'United Kingdom',
          year: '2009',
          gdp: 2410909799034.12
        },
        {
          name: 'United Kingdom',
          year: '2010',
          gdp: 2475244321361.11
        },
        {
          name: 'United Kingdom',
          year: '2011',
          gdp: 2659310054646.23
        },
        {
          name: 'United Kingdom',
          year: '2012',
          gdp: 2704887678386.72
        },
        {
          name: 'United Kingdom',
          year: '2013',
          gdp: 2786022872706.81
        },
        {
          name: 'United Kingdom',
          year: '2014',
          gdp: 3063803240208.01
        },
        {
          name: 'United Kingdom',
          year: '2015',
          gdp: 2928591002002.51
        },
        {
          name: 'United Kingdom',
          year: '2016',
          gdp: 2694283209613.29
        },
        {
          name: 'United Kingdom',
          year: '2017',
          gdp: 2666229179958.01
        },
        {
          name: 'United Kingdom',
          year: '2018',
          gdp: 2855296731521.96
        },
        {
          name: 'Russian',
          year: '2000',
          gdp: 259710142196.94
        },
        {
          name: 'Russian',
          year: '2001',
          gdp: 306602070620.5
        },
        {
          name: 'Russian',
          year: '2002',
          gdp: 345470494417.86
        },
        {
          name: 'Russian',
          year: '2003',
          gdp: 430347770731.79
        },
        {
          name: 'Russian',
          year: '2004',
          gdp: 591016690742.8
        },
        {
          name: 'Russian',
          year: '2005',
          gdp: 764017107992.39
        },
        {
          name: 'Russian',
          year: '2006',
          gdp: 989930542278.7
        },
        {
          name: 'Russian',
          year: '2007',
          gdp: 1299705764823.62
        },
        {
          name: 'Russian',
          year: '2008',
          gdp: 1660846387624.78
        },
        {
          name: 'Russian',
          year: '2009',
          gdp: 1222644282201.86
        },
        {
          name: 'Russian',
          year: '2010',
          gdp: 1524917468442.01
        },
        {
          name: 'Russian',
          year: '2011',
          gdp: 2051661732059.78
        },
        {
          name: 'Russian',
          year: '2012',
          gdp: 2210256976945.38
        },
        {
          name: 'Russian',
          year: '2013',
          gdp: 2297128039058.21
        },
        {
          name: 'Russian',
          year: '2014',
          gdp: 2059984158438.46
        },
        {
          name: 'Russian',
          year: '2015',
          gdp: 1363594369577.82
        },
        {
          name: 'Russian',
          year: '2016',
          gdp: 1282723881134.01
        },
        {
          name: 'Russian',
          year: '2017',
          gdp: 1578624060588.26
        },
        {
          name: 'Russian',
          year: '2018',
          gdp: 1657554647149.87
        },
        {
          name: 'Japan',
          year: '2000',
          gdp: 4887519660744.86
        },
        {
          name: 'Japan',
          year: '2001',
          gdp: 4303544259842.72
        },
        {
          name: 'Japan',
          year: '2002',
          gdp: 4115116279069.77
        },
        {
          name: 'Japan',
          year: '2003',
          gdp: 4445658071221.86
        },
        {
          name: 'Japan',
          year: '2004',
          gdp: 4815148854362.11
        },
        {
          name: 'Japan',
          year: '2005',
          gdp: 4755410630912.14
        },
        {
          name: 'Japan',
          year: '2006',
          gdp: 4530377224970.4
        },
        {
          name: 'Japan',
          year: '2007',
          gdp: 4515264514430.57
        },
        {
          name: 'Japan',
          year: '2008',
          gdp: 5037908465114.48
        },
        {
          name: 'Japan',
          year: '2009',
          gdp: 5231382674593.7
        },
        {
          name: 'Japan',
          year: '2010',
          gdp: 5700098114744.41
        },
        {
          name: 'Japan',
          year: '2011',
          gdp: 6157459594823.72
        },
        {
          name: 'Japan',
          year: '2012',
          gdp: 6203213121334.12
        },
        {
          name: 'Japan',
          year: '2013',
          gdp: 5155717056270.83
        },
        {
          name: 'Japan',
          year: '2014',
          gdp: 4850413536037.84
        },
        {
          name: 'Japan',
          year: '2015',
          gdp: 4389475622588.97
        },
        {
          name: 'Japan',
          year: '2016',
          gdp: 4926667087367.51
        },
        {
          name: 'Japan',
          year: '2017',
          gdp: 4859950558538.97
        },
        {
          name: 'Japan',
          year: '2018',
          gdp: 4971323079771.87
        }
      ],
      datalist: [
        {
          year: '2004',
          value: 3043,
          category: 'Liquid fuel'
        },
        {
          year: '2004',
          value: 2906,
          category: 'Solid fuel'
        },
        {
          year: '2004',
          value: 1443,
          category: 'Gas fuel'
        },
        {
          year: '2004',
          value: 298,
          category: 'Cement production'
        },
        {
          year: '2004',
          value: 54,
          category: 'Gas flarinl'
        },
        {
          year: '2005',
          value: 3068,
          category: 'Liquid fuel'
        },
        {
          year: '2005',
          value: 3108,
          category: 'Solid fuel'
        },
        {
          year: '2005',
          value: 1485,
          category: 'Gas fuel'
        },
        {
          year: '2005',
          value: 320,
          category: 'Cement production'
        },
        {
          year: '2005',
          value: 60,
          category: 'Gas flarinl'
        },
        {
          year: '2006',
          value: 3091,
          category: 'Liquid fuel'
        },
        {
          year: '2006',
          value: 3293,
          category: 'Solid fuel'
        },
        {
          year: '2006',
          value: 1534,
          category: 'Gas fuel'
        },
        {
          year: '2006',
          value: 356,
          category: 'Cement production'
        },
        {
          year: '2006',
          value: 62,
          category: 'Gas flarinl'
        },
        {
          year: '2007',
          value: 3071,
          category: 'Liquid fuel'
        },
        {
          year: '2007',
          value: 3422,
          category: 'Solid fuel'
        },
        {
          year: '2007',
          value: 1562,
          category: 'Gas fuel'
        },
        {
          year: '2007',
          value: 382,
          category: 'Cement production'
        },
        {
          year: '2007',
          value: 66,
          category: 'Gas flarinl'
        },
        {
          year: '2008',
          value: 3103,
          category: 'Liquid fuel'
        },
        {
          year: '2008',
          value: 3587,
          category: 'Solid fuel'
        },
        {
          year: '2008',
          value: 1630,
          category: 'Gas fuel'
        },
        {
          year: '2008',
          value: 388,
          category: 'Cement production'
        },
        {
          year: '2008',
          value: 69,
          category: 'Gas flarinl'
        },
        {
          year: '2009',
          value: 3042,
          category: 'Liquid fuel'
        },
        {
          year: '2009',
          value: 3590,
          category: 'Solid fuel'
        },
        {
          year: '2009',
          value: 1584,
          category: 'Gas fuel'
        },
        {
          year: '2009',
          value: 415,
          category: 'Cement production'
        },
        {
          year: '2009',
          value: 66,
          category: 'Gas flarinl'
        },
        {
          year: '2010',
          value: 3107,
          category: 'Liquid fuel'
        },
        {
          year: '2010',
          value: 3812,
          category: 'Solid fuel'
        },
        {
          year: '2010',
          value: 1696,
          category: 'Gas fuel'
        },
        {
          year: '2010',
          value: 446,
          category: 'Cement production'
        },
        {
          year: '2010',
          value: 67,
          category: 'Gas flarinl'
        },
        {
          year: '2011',
          value: 3134,
          category: 'Liquid fuel'
        },
        {
          year: '2011',
          value: 4055,
          category: 'Solid fuel'
        },
        {
          year: '2011',
          value: 1756,
          category: 'Gas fuel'
        },
        {
          year: '2011',
          value: 494,
          category: 'Cement production'
        },
        {
          year: '2011',
          value: 64,
          category: 'Gas flarinl'
        },
        {
          year: '2012',
          value: 3200,
          category: 'Liquid fuel'
        },
        {
          year: '2012',
          value: 4106,
          category: 'Solid fuel'
        },
        {
          year: '2012',
          value: 1783,
          category: 'Gas fuel'
        },
        {
          year: '2012',
          value: 519,
          category: 'Cement production'
        },
        {
          year: '2012',
          value: 65,
          category: 'Gas flarinl'
        },
        {
          year: 2012,
          value: 3200,
          category: 'Liquid fuel'
        },
        {
          year: 2012,
          value: 4106,
          category: 'Solid fuel'
        },
        {
          year: 2012,
          value: 1783,
          category: 'Gas fuel'
        },
        {
          year: 2012,
          value: 519,
          category: 'Cement production'
        },
        {
          year: 2012,
          value: 65,
          category: 'Gas flarinl'
        },
        {
          year: 2013,
          value: 3220,
          category: 'Liquid fuel'
        },
        {
          year: 2013,
          value: 4126,
          category: 'Solid fuel'
        },
        {
          year: 2013,
          value: 1806,
          category: 'Gas fuel'
        },
        {
          year: 2013,
          value: 554,
          category: 'Cement production'
        },
        {
          year: 2013,
          value: 68,
          category: 'Gas flarinl'
        },
        {
          year: 2014,
          value: 3280,
          category: 'Liquid fuel'
        },
        {
          year: 2014,
          value: 4117,
          category: 'Solid fuel'
        },
        {
          year: 2014,
          value: 1823,
          category: 'Gas fuel'
        },
        {
          year: 2014,
          value: 568,
          category: 'Cement production'
        },
        {
          year: 2014,
          value: 68,
          category: 'Gas flarinl'
        }
      ]
    }
  },
  mounted () {
    // 在 mounted 中构建，防止created 中无法获取标签元素
    const data = this.data
    const linePlot = new Line('container', {
      data,
      xField: 'year',
      yField: 'gdp',
      seriesField: 'name',
      yAxis: {
        label: {
          formatter: v => `${(v / 10e8).toFixed(1)} B`
        }
      },
      legend: {
        position: 'top'
      },
      smooth: true,
      // @TODO 后续会换一种动画方式
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000
        }
      }
    })

    linePlot.render()

    this.pointFun()
  },
  methods: {
    pointFun () {
      // 网格填充
      const data = this.datalist
      const line = new Line('containerG2', {
        data: data
          .slice(data.length - 90, data.length)
          .filter(item => item.category === 'Gas fuel' || item.category === 'Cement production'),
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        // X 轴相关配置
        xAxis: {
          nice: true,
          // tickCount: 8,
          // 文本标签
          label: {
            // autoRotate: false,
            rotate: Math.PI / 6,
            offset: 10,
            style: {
              fill: '#aaa',
              fontSize: 12
            },
            formatter: name => name
          },
          title: {
            text: '年份',
            style: {
              fontSize: 16
            }
          },
          // 坐标轴线的配置项 null 表示不展示
          line: {
            style: {
              stroke: '#aaa'
            }
          },
          tickLine: {
            style: {
              lineWidth: 2,
              stroke: '#aaa'
            },
            length: 5
          },
          grid: {
            line: {
              style: {
                stroke: '#ddd',
                lineDash: [4, 2]
              }
            },
            alternateColor: 'rgba(0,0,0,0.05)'
          }
        },
        // Y 轴相关配置
        yAxis: {
          // max: 3000,
          // 文本标签
          label: {
            autoRotate: false,
            style: {
              fill: '#aaa',
              fontSize: 12
            },
            // 数值格式化为千分位
            formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`)
          },
          title: {
            text: '排放量(顿)',
            style: {
              fontSize: 16
            }
          },
          // 坐标轴线的配置项 null 表示不展示
          line: {
            style: {
              stroke: '#aaa'
            }
          },
          tickLine: {
            style: {
              lineWidth: 2,
              stroke: '#aaa'
            },
            length: 5
          },
          grid: {
            line: {
              style: {
                stroke: '#ddd',
                lineDash: [4, 2]
              }
            },
            alternateColor: 'rgba(0,0,0,0.05)'
          }
        },
        // label
        label: {
          layout: [{ type: 'hide-overlap' }], // 隐藏重叠label
          style: {
            textAlign: 'right'
          },
          formatter: item => item.value
        },
        // point
        point: {
          size: 5,
          style: {
            lineWidth: 1,
            fillOpacity: 1
          },
          shape: item => {
            if (item.category === 'Cement production') {
              return 'circle'
            }
            return 'diamond'
          }
        },
        annotations: [
          // 辅助线
          {
            type: 'line',
            start: ['0%', '10%'],
            end: ['100%', '10%'],
            top: true,
            style: {
              stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
              lineWidth: 2
            }
          },
          // 辅助区域
          {
            type: 'region',
            start: ['0%', '0%'],
            end: ['20%', '10%'],
            top: true,
            style: {
              fill: '#1890ff',
              fillOpacity: 1,
              opacity: 1
            }
          },
          // 辅助文本
          {
            type: 'text',
            position: ['10%', '5%'],
            content: '二氧化碳排放量来源',
            style: {
              fill: '#fff',
              fontSize: 12,
              textAlign: 'center',
              textBaseline: 'middle',
              shadowColor: '#fff',
              shadowOffsetX: 12,
              shadowOffsetY: 12,
              shadowBlur: 2
            }
          }, // 辅助线
          {
            type: 'line',
            start: ['min', 'median'],
            end: ['max', 'median'],
            style: {
              stroke: 'Turquoise',
              lineDash: [4, 2]
            }
          }
        ],
        legend: {
          position: 'top-right',
          itemName: {
            style: {
              fill: '#000'
            },
            formatter: name => name
          }
        },
        // 度量相关配置
        meta: {
          // year 对应 xField || yField
          year: {
            range: [0, 1]
          }
        }
      })

      line.render()
    }
  },
  created () {
    // var wrapperElement = '<div style=position:relative;></div>'
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
