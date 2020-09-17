import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/DOC/SwitchDemo.vue'
import Button from './views/DOC/ButtonDemo.vue'
import xxx from './views/DOC/xxx.vue'
import xxxx from './views/DOC/xxxx.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '/Switch', component: Switch },
                { path: '/Button', component: Button },
                { path: '/Dialog', component: xxx },
                { path: '/Tabs', component: xxxx }
            ]
        }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
