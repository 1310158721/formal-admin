import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router/router'
import axios from 'axios'
import i18n from '@/i18n/i18n'

// axios 拦截器
import '@/http/interceptors'

// vue 过渡样式
import '@/assets/styles/css/transitions.css'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// mavon-editor 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 指令
import '@/assets/js/directives/directives'

// 全局组件
import '@/components/global/global'
import '@/components/element/element'

Vue.use(ElementUI)
Vue.use(mavonEditor)

// element-ui 兼容 i18n 插件
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
