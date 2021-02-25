// 保存文本域1
export function setTextarea1 (textarea1) {
  window.sessionStorage.setItem('textarea1', textarea1)
}

// 保存文本域2
export function setTextarea2 (textarea2) {
  window.sessionStorage.setItem('textarea2', textarea2)
}

// 获取文本域1
export function getTextarea1 () {
  if (window.sessionStorage.getItem('textarea1')) {
    return window.sessionStorage.getItem('textarea1')
  } else {
    return ''
  }
}

// 获取文本域2
export function getTextarea2 () {
  if (window.sessionStorage.getItem('textarea2')) {
    return window.sessionStorage.getItem('textarea2')
  } else {
    return ''
  }
}

// 移除文本域
export function removeTextarea () {
  if (window.sessionStorage.getItem('textarea1')) {
    window.sessionStorage.removeItem('textarea1')
  }
  if (window.sessionStorage.getItem('textarea2')) {
    window.sessionStorage.removeItem('textarea2')
  }
}
