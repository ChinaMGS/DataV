/**
 *  实现功能
 *  1、默认情况下只禁止空格输入
 *  2、限制只能输入整数
 *  3、限制只能输入整数和小数（价格类）
 */
import { commaInput } from '@/common/js/base.js' // 公共方法，格式转换
const addListener = function (el, type, fn) {
  el.addEventListener(type, fn, false)
}
const spaceFilter = function (el) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/\s+/, '')
  })
}
const intFilter = function (el) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/\D/g, '')
  })
}
const priceFilter = function (el) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/[^\d.]*/g, '')
    if (isNaN(el.value)) {
      el.value = ''
    }
  })
}
const financeMoney = function (el) {
  addListener(el, 'keyup', () => {
    // console.log(typeof el.value === 'number' && !isNaN(el.value))
    // console.log(!isNaN(el.value))
    const a = String(el.value).replace(/[^(\d|.)]/g, '')
    el.value = commaInput(a)
  })
}

export default {
  bind (el, binding) {
    if (el.tagName.toLowerCase() !== 'input') {
      el = el.getElementsByTagName('input')[0]
    }
    spaceFilter(el)
    switch (binding.arg) {
      case 'int':
        intFilter(el)
        break
      case 'price':
        priceFilter(el)
        break
      case 'financeMoney': // 输入框金额 切换 财务计算金额
        financeMoney(el)
        break
      default:
        break
    }
  }
}
