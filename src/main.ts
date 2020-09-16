import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/Doc', component: Doc }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
