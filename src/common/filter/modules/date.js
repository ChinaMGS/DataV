// 所有的日期过滤器方法

// 年月日时分过滤器
const DateTimeFormat = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
}
// 年月日时分秒过滤器，以'/'划分
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

// 年月日时分秒过滤器，以文字划分
const DateFormatAllText = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取分钟数（0 - 59）
  return year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute + ':' + second
}

// 年月日时分秒过滤器，全以文字划分
const DateFormatAllAllText = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取分钟数（0 - 59）
  return year + '年' + month + '月' + day + '日' + ' ' + hour + '时' + minute + '分' + second + '秒'
}

// 年月日时分过滤器，以文字划分
const YMDHMText = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  return year + '年' + month + '月' + day + '日' + ' ' + hour + '时' + minute + '分'
}

// 年月日时过滤器，以文字划分
const YMDHText = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  return year + '年' + month + '月' + day + '日' + ' ' + hour + '时'
}

// 年月日过滤器
const DateFormat = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return year + '-' + month + '-' + day
}

// 年月日过滤器 /
const DateFormatXie = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return year + '/' + month + '/' + day
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

// 日时分秒过滤器
const DayHourMinuteSecondsFormat = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取秒数（0 - 59）
  return day + '天' + hour + '小时' + minute + '分' + seconds + '秒'
}

// 年过滤器
const YearFormat = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear() // 获取完整的年份（4位，1970）
  return year
}

// 月日过滤器
const MonthDayFormat = timestamp => {
  if (!timestamp) return ''
  const date = new Date(parseInt(timestamp))
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 获取月份（0-11,0代表1月，用的时候记得加上1）
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取日（1 - 31）
  return month + '-' + day
}

// 时分秒过滤器
const houseMiuntesFormat = dateTime => {
  if (!dateTime) return ''
  const date = new Date(parseInt(dateTime))
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 获取分钟数（0 - 23）
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取分钟数（0 - 59）
  return hour + ':' + minute
}

export default {
  DateTimeFormat,
  DateFormat,
  DayHourMinuteSecondsFormat,
  YearFormat,
  MonthDayFormat,
  houseMiuntesFormat,
  DateFormatAll,
  DateFormatAllText,
  YMDHMText,
  DateFormatAllAllText,
  ChineseTimerFilter,
  YMDHText,
  DateFormatXie
}
