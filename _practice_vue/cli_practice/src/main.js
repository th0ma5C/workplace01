import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
// import PubSub from 'pubsub-js';
import axios from 'axios';
import store from './store';

// const vm = createApp({
//     render: () => h(App),
// });
const vm = createApp(App);

// 將 mitt 添加到全局屬性
vm.config.globalProperties.$mitt = mitt();
// pubsub實現
// vm.config.globalProperties.PubSub = PubSub;
// 添加axios至全局
vm.config.globalProperties.axios = axios;
// 安裝store插件
vm.use(store);
vm.mount("#app");