import { createApp, h } from 'vue';
import App from './App.vue';

const vm = createApp({
    render: () => h(App),
    data() {
        return {

        }
    },
});

vm.mount("#app");