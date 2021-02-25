// 公共方法

/*
  节流函数
  @param {function} fun
  @param {number} delay
*/
const throttle = (fun, delay) => {
  let last, deferTimer
  return function (args) {
    const that = this
    const _args = arguments
    const now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}

/*
  数组转字符串
  @param {array} arr
  @return {string} str
*/
const arrToStr = arr => {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ','
  }
  if (str.length > 0) {
    str = str.substr(0, str.length - 1)
  }
  return str
}

/*
  输入框的价格转为千位加逗号
  @param {number} data
  @return {string} num
*/
const comma = data => {
  var num = data.toString()
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  return num
}
/*
  输入框的价格转为千位加逗号  输入框动态版本
  @param {number} data
  @return {string} num
*/
const commaInput = data => {
  const a = data.toString().split('.')
  const s = a[0]
  var num = ''
  for (var j = 0; j < s.length; j++) {
    num = num + s.substr(j, 1).replace(',', '')
  }
  // console.log(num)
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  if (a.length === 2) {
    return num + '.' + a[1]
  }
  return num
}

/*
  小写金额转大写金额
  @param {number} number
  @return {string} result
*/
const upDigit = n => {
  var fraction = ['角', '分', '厘']
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  // var head = n < 0 ? '欠人民币' : '人民币'
  n = Math.abs(n)
  var s = ''
  for (var z = 0; z < fraction.length; z++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, z)) % 10] + fraction[z]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  // return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

/*
  小写金额转大写金额，以万为单位
  @param {number} number
  @return {string} result
*/
const numToWanText = number => {
  const AA = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const BB = ['', '拾', '佰', '仟', '萬', '亿']
  const reverseStr = number.split('').reverse().join('')
  let result = ''
  let unit = 0
  reverseStr.replace(/\d{1,4}/g, function ($1) {
    if (unit !== 0) {
      if (unit % 2 !== 0) {
        $1 = BB[4] + $1
      } else {
        $1 = BB[5] + $1
      }
    }
    $1 = $1.replace(/\d/g, function (x1, idx) {
      if (x1 !== '0') {
        const idx1 = unit > 0 ? idx - 1 : idx
        return BB[idx1] + AA[x1]
      } else {
        return AA[x1]
      }
    })
    result += $1
    unit += 1
  })
  result = result
    .replace(/[零]{2,}/g, function (x1) {
      return ''
    })
    .split('')
    .reverse()
    .join('')
  result = result
    .replace(/(零仟)|(零拾)/g, function (x1) {
      return ''
    })
    .replace(/(零亿)|(零亿零万)/g, function (x1) {
      return '亿'
    })
    .replace(/(零万)/g, function (x1) {
      return '万'
    })
    .replace(/(亿万)/g, function (x1) {
      return '亿'
    })
    .replace(/万$/, function (x1) {
      return ''
    })
  result += '万元整'
  return result
}

/*
  带逗号金额字符转数字金额
  @param {string} str
  @return {num} number
  @return {strNum} number
*/
const strToNum = str => {
  if (!str) return null
  const strNum = str
  if (strNum.length >= 4) {
    let numArr = []
    let num = ''
    numArr = strNum.split(',')
    for (let i = 0; i < numArr.length; i++) {
      num = num + numArr[i]
    }
    return parseInt(num)
  } else {
    return parseInt(strNum)
  }
}

/*
  年月日转换
  @param {num} timestamp
  @return {strNum} year + '/' + month + '/' + day
*/
const timestampToDate = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return year + '/' + month + '/' + day
}

/*
  格林时间转年月日带'-'
  @param {num} gelingTime
  @return {strNum} year + '-' + month + '-' + day
*/
const gelingTimeToDate = gelingTime => {
  if (!gelingTime) return ''
  const stampTime = gelingTime.getTime()
  const date = new Date(parseInt(stampTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return year + '-' + month + '-' + day
}

/*
  年月日时分转换
  @param {num} dateTime
  @return {strNum} year + '/' + month + '/' + day + ' ' + hour + ':' + minute
*/
const DateTimeFormat = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute
}

/*
  年月日时分转换
  @param {num} dateTime
  @return {strNum} year + '年' + month + '月' + day + '日' + ' ' + hour + '时'
*/
const DateTimeFormatCN = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  return year + '年' + month + '月' + day + '日' + ' ' + hour + '时'
}

/*
  年月日时分秒转换
  @param {num} dateTime
  @return {strNum} year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
*/
const DateFormatAll = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取分钟数（0 - 59）
  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
}
/*
  年月日时分秒转换
  @param {num} dateTime
  @return {strNum} year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
*/
const DateFormatAlls = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取分钟数（0 - 59）
  return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
}

// 年月日转换   dl

const ChineseTimerFilter = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return year + '年' + month + '月' + day + '日'
}

export {
  throttle,
  arrToStr,
  comma,
  numToWanText,
  strToNum,
  timestampToDate,
  DateTimeFormat,
  DateFormatAll,
  gelingTimeToDate,
  DateFormatAlls,
  upDigit,
  ChineseTimerFilter,
  DateTimeFormatCN,
  commaInput
}
