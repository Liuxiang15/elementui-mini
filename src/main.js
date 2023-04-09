import Vue from 'vue';

import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/index.scss';

import Row from '@element/Row/index.js';
import Col from '@element/Col/index.js';
import App from './App.vue';

Vue.use(Row);
Vue.use(Col);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
