import Vue from 'vue';
import App from './modules/app/ui/App.vue';
import router from './modules/app/router';
import store from './modules/app/store';

import './modules/app/ui/components';
import './plugins';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
