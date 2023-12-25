import { createApp, h } from 'vue';
import App from './App.vue';
import { mixin } from './mixin'

const vm = createApp({
    render: () => h(App),
});
vm.mixin(mixin);
vm.mount("#app");