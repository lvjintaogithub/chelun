import Vue from 'vue';
import App from './App.vue';
//引入vue的路由
import router from './router/index';
//引入vuex
import store from './store/index';
//引入common.css公共样式
import './static/styles/common.css';

// 去掉生成环境提示
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  //挂载路由
  router,
  //挂载store
  store,
  render: h => h(App)
});
