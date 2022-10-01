import { RouteRecordRaw } from 'vue-router';
import type { AppRouteModule, AppRouteRecordRaw } from '../type';
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'index',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
            },
            {
                path: 'test',
                name: 'Test',
                component: () => import('@/views/Test.vue'),
                children: [],
            },
            {
                path: 'slot',
                name: 'Slot',
                component: () => import('@/views/Slot.vue'),
                children: [],
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('@/views/Cart.vue'),
                children: [],
            },
            {
                path: 'test/test1',
                name: 'Test1',
                component: () => import('@/views/Test1.vue'),
            },
            {
                path: 'hello',
                name: 'HelloWorld',
                component: () => import('@/components/HelloWorld.vue'),
            },
            {
                path: 'less',
                name: 'Less',
                component: () => import('@/views/Less.vue'),
            },
        ],
    },
];
