import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'
import router from './router'

import 'primeicons/primeicons.css'
const app =createApp(App)

app.use(router).mount('#app')
