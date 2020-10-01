import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/DOC/SwitchDemo.vue'
import Button from './views/DOC/ButtonDemo.vue'
import Dialog from './views/DOC/DialogDemo.vue'
import Tabs from './views/DOC/TabsDemo.vue'
import Default from './views/DOC/DefaultDemo.vue'
import { h } from 'vue'
import Markdown from './components/markdown.vue'
import about from './markdown/About.md'
import install from './markdown/Install.md'
import getStarted from './markdown/GetStarted.md'



const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: Default },
                { path: 'about', component: md(about) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'install', component: md(install) },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs }
            ]
        },
        { path: '/about', component: h(Markdown, { path: "../markdown/About.md" }) }
    ]
})
