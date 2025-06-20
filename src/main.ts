import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// Vuetify 관련 import
// @ts-ignore
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './style.css'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(createVuetify({ components, directives }))
app.use(router)
app.mount('#app')
