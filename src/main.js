import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import 'amfe-flexible'; // rem
import { Button , PullRefresh } from 'vant';

app.use(Button).use(PullRefresh)

app.mount('#app')
