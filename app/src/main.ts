import axios from 'axios'
import * as Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = Vue.createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
  