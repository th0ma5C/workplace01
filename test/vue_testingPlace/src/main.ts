import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { register } from "swiper/element/bundle"
register()

createApp(App).mount('#app')
