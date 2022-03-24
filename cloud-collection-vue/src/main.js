import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/common.scss';

Vue.config.productionTip = false;

// ElementUI 完整引入
Vue.use(ElementUI);

// 创建路由对象
const router = createRouter();
Vue.$router = router;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
