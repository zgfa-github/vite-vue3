import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/styles/mixins.less';
const app = createApp(App);
app.use(router).use(store).mount('#app');
