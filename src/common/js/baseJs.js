/**
 * 禁止浏览器后退
 */
const forbidRetreat = () => {
  history.pushState(null, null, document.URL)
  window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL)
  })
}

export default {
  forbidRetreat
}
