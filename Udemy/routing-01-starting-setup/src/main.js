import { createApp } from 'vue'; //importing function

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
