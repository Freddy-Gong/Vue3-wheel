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

const history = createWebHashHistory()
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: Default },
                { path: 'about', component: md("About") },
                { path: 'get-started', component: md("GetStarted") },
                { path: 'install', component: md("Install") },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs }
            ]
        },
        { path: '/about', component: h(Markdown, { path: "../markdown/About.md" }) }
    ]
})
