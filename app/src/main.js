import Vue from 'vue'
import App from './App.vue'

import router from './router'

new Vue({
  render: h => h(App),

  //注册路由 ： 底下的写法 k-v 一致省略 v 【router小写的】
  // 注册路由信息：当这里写router时，组件身上都拥有$route,$router属性
  router
}).$mount('#app')
