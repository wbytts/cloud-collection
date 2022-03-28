import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import store from './store';

// 引入ElementUI相关
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局自定义样式CSS
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
