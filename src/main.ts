import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import App from './App.vue';
import router from './router';
import store from './store';
import autoRegister from './components/autoRegister';

const app = createApp(App);
autoRegister(app);
app.use(router);
app.use(store);
app.use(ElementPlus, { zIndex: 3000, locale });
app.mount('#app');
