import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import axios from 'axios';
import router from './router'

// const vm = createApp({
//     render: () => h(App),a
// });
const vm = createApp(App);

// 將 mitt 添加到全局屬性
vm.config.globalProperties.$mitt = mitt();
// 添加axios至全局
vm.config.globalProperties.axios = axios;
// 應用插件
vm.use(router);

vm.mount("#app");