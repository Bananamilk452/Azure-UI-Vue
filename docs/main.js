import Vue from 'vue';
import AzureUIVue from '../src/index';
import App from './App.vue';

Vue.use(AzureUIVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
