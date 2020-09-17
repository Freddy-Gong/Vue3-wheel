import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/DOC/SwitchDemo.vue'
import Button from './views/DOC/ButtonDemo.vue'
import Dialog from './views/DOC/DialogDemo.vue'
import Tabs from './views/DOC/TabsDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs }
            ]
        }
    ]
})

router.afterEach(() => {

})