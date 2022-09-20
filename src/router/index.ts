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
                path: 'test/test1',
                name: 'Test1',
                component: () => import('../views/Test1.vue'),
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
