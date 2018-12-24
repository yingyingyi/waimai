import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import NavHeader from './components/NavHeader/NavHeader.vue'
import Star from './components/Star/Star.vue'


// 注册全局组件
Vue.component('NavHeader', NavHeader)
Vue.component('Star', Star)
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
