// ----------------------------------------全局公用的正则表达式--------------------------------------
// -----------------------------使用方法：this.$regular.regPassword
const regPhone = /^[1][3-9][0-9]{9}$/ // 手机号码
const regBank = /^([1-9]{1})(\d{14}|\d{18})$/ // 银行卡号
const regId = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/ // 身份证号
const regSocialCreditCode = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g // 校验社会信用代码
const regUserName = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/ // 姓名校验
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/ // 登录密码校验
const regNoteVerify = /^\d{6}$/ // 6位短信数字验证码
const regImgVerify = /^[a-zA-Z0-9]{4}$/ // 4位图形验证码
const regMoney = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/ // 金额校验
const regIntMoney = /((^[1-9]\d{0,6})|10000000)$/ // 金额校验（单位元 1-1千万） （单位万元 1万元-1千亿）
const regRangeMoney = /((^[1-9]\d{0,7})|100000000)$/ // 金额校验（单位元 1-1亿）

export default {
  regPhone,
  regBank,
  regId,
  regSocialCreditCode,
  regUserName,
  regPassword,
  regNoteVerify,
  regImgVerify,
  regMoney,
  regIntMoney,
  regRangeMoney
}
