// 所有的价格过滤器

// 价格过滤器
const MoneyFormat = money => {
  if (money && money != null) {
    const numberMoney = Number(money)
    if (typeof numberMoney === 'number' && numberMoney !== 0) {
      money = numberMoney.toFixed(2)
    }
    money = String(money)
    var left = money.split('.')[0]
    if (money.split('.')[1]) {
      var right = money.split('.')[1]
    }
    var temp = left
      .split('')
      .reverse()
      .join('')
      .match(/(\d{1,3})/g)
    if (money.split('.')[1]) {
      return (
        (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + '.' + right
      )
    } else {
      return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('')
    }
  } else if (money === 0) {
    // 注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
    return '0'
  } else {
    return ''
  }
}

// 以万为单位的价格过滤器
const WanMoneyFormat = money => {
  if (money && money != null) {
    // money = parseInt(money / 10000)
    money = Math.ceil(money / 1000) / 10
    money = String(money)
    var left = money.split('.')[0]
    if (money.split('.')[1]) {
      var right = money.split('.')[1]
    }
    var temp = left
      .split('')
      .reverse()
      .join('')
      .match(/(\d{1,3})/g)
    if (money.split('.')[1]) {
      return (
        (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + '.' + right
      )
    } else {
      return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('')
    }
  } else if (money === 0) {
    // 注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
    return '0'
  } else {
    return ''
  }
}

// 小写金额转大写金额
const numToText = number => {
  if (number && number != null) {
    const AA = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    const BB = ['', '拾', '佰', '仟', '萬', '亿']
    const reverseStr = number.toString().split('').reverse().join('')
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
        return '零'
      })
      .split('')
      .reverse()
      .join('')
    result = result
      .replace(/(零仟)|(零拾)/g, function (x1) {
        return ''
      })
      .replace(/(零亿)|(零亿零萬)/g, function (x1) {
        return '亿'
      })
      .replace(/(零萬)/g, function (x1) {
        return '萬'
      })
      .replace(/(亿萬)/g, function (x1) {
        return '亿'
      })
      .replace(/零$/, function (x1) {
        return ''
      })
    if (result) {
      result += '元整'
    }
    return result
  } else if (number === 0) {
    return '零元整'
  } else {
    return ''
  }
}

export default {
  MoneyFormat,
  WanMoneyFormat,
  numToText
}
