import { createApp } from 'vue';
import '@htfed/base-css';
import '@htfed/ui/dist/index.css';
import App from './App.vue';
import HtUi from '@htfed/ui';
import router from './router';

createApp(App)
    .use(HtUi)
    .use(router)
    .mount('#app');
