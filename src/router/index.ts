import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: 'index',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: 'test',
                name: 'Test',
                component: () => import('../views/Test.vue'),
                children: [],
            },
            {
                path: 'slot',
                name: 'Slot',
                component: () => import('../views/Slot.vue'),
                children: [],
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('../views/Cart.vue'),
                children: [],
            },
            {
                path: 'test/test1',
                name: 'Test1',
                component: () => import('../views/Test1.vue'),
            },
            {
                path: 'hello',
                name: 'HelloWorld',
                component: () => import('../components/HelloWorld.vue'),
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
