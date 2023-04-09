import Vue from 'vue';
import App from './App.vue';

import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/row.scss';
import '@/assets/theme-chalk/col.scss';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
