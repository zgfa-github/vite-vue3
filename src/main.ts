import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/styles/mixins.less';
import global from './components/global.vue';
const app = createApp(App);
//全局注册变量
app.config.globalProperties.global = global;
console.log(global.url);

app.use(router).use(store).mount('#app');
