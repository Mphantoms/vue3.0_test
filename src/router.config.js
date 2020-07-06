import { createWebHistory,createRouter } from 'vue-router'

import About from './views/About.vue'
import Next from './views/Next.vue'

const RouterHistory = createWebHistory()

const router = createRouter({
    history: RouterHistory,
    routes: [
        {
            path: '/',
            component: About,
        },
        {
            path: '/next',
            component: Next,
        }
    ]
})

export default router