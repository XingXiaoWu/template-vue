import Vue from 'vue';
import Element from 'element-ui';
import dayjs from 'dayjs';
import API from '@/api/index';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import '@/utils/routeHooks';
import * as filters from './filters'; // global filters
import '@/styles/element-theme/theme/index.css';
// Vue设置
Vue.config.productionTip = false;
// window挂载
window.dayjs = dayjs;
// 属性挂载
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$API = API;

// 设置elementUI的默认size
Vue.use(Element, {
  size: 'medium',
});
// 设置全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// 引入store
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
