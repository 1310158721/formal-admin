/**
 * 全屏化指令
 * 可接受参数
 * fnCallback 切换全局化状态的回调函数
 * backgroundColor 全局化元素的背景色
 * dom 全屏化元素ID名
 */

import Vue from 'vue'
import screenfull from 'screenfull'

Vue.directive('t-full-screen', {
  inserted (el, binding) {
    const { value } = binding
    const { fnCallback = () => {}, backgroundColor = '#fff', dom = null } = value
    if (screenfull.isEnabled) {
      // 监听切换全屏化
      screenfull.on('change', fnCallback)
    }
    el.addEventListener('click', function () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      const element = dom ? document.getElementById(dom) : null
      const isDom = element instanceof HTMLElement
      if (isDom) {
        element.style.backgroundColor = backgroundColor
      }
      screenfull.toggle(isDom ? element : null)
    }, false)
  }
})
