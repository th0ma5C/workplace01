import { createApp, h } from 'vue'
import App from './App.vue'

// createApp(App).mount('#demo')
const vm = createApp({
    // render() {
    //     return h(App)
    // }
    render: () => h(App)
    // template: `<app></app>`,
    // components: { App }
});
vm.mount("#demo");