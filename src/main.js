import Vue from 'vue';


import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/index.scss';

// 2、按需引入
import Row from '@element/Row/index.js';
import Col from '@element/Col/index.js';
import App from './App.vue';

Vue.use(Row);
Vue.use(Col);

// 1、完整引入
// import element from '@element/index.js';

// Vue.use(element);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
