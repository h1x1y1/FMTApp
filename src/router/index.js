import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../pages/myHome/MyHome.vue'),
        },
        {
            path: '/cart',
            component: () => import('../pages/myCart/MyCart.vue')
        },
        {
            path: '/me',
            component: () => import('../pages/mine/Mine.vue'),
        },
        {
            path: '/order',
            component: () => import('../pages/myOrder/MyOrder.vue'),
        },
    ],
})

export default router;