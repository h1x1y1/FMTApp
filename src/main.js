import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index';
// 引入基础样式
import './common/css/base.less'
const app = createApp(App);

import 'amfe-flexible'; // rem
import { Button , PullRefresh ,Icon  } from 'vant';

app.use(Button).use(PullRefresh).use(Icon)
// 使用路由
app.use(router);

app.mount('#app')
