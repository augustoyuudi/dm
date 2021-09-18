import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Shared styles
import './assets/styles/shared/index.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
