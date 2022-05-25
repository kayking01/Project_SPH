<template>
  <div id="app">
    <div>我是根组件</div>
    <Header></Header> 
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- Footer 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
