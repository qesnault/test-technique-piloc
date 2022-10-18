import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import { makeServer } from "./server.js"
import store from './store'


import './assets/main.css'

makeServer()

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
