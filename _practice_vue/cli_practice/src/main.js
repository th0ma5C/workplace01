import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

// const vm = createApp({
//     render: () => h(App),
// });
const vm = createApp(App);

// 將 mitt 添加到全局屬性
vm.config.globalProperties.$mitt = mitt();

vm.mount("#app");