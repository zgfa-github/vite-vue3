import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes/index';
console.log('总路由');
console.log(basicRoutes);

// const routes: RouteRecordRaw[] = [
//     {
//         path: '/',
//         name: 'layout',
//         redirect: '/index',
//         component: () => import('../layout/index.vue'),
//         children: [
//             {
//                 path: 'index',
//                 name: 'Home',
//                 component: () => import('../views/Home.vue'),
//             },
//             {
//                 path: 'test',
//                 name: 'Test',
//                 component: () => import('../views/Test.vue'),
//                 children: [],
//             },
//             {
//                 path: 'slot',
//                 name: 'Slot',
//                 component: () => import('../views/Slot.vue'),
//                 children: [],
//             },
//             {
//                 path: 'cart',
//                 name: 'Cart',
//                 component: () => import('../views/Cart.vue'),
//                 children: [],
//             },
//             {
//                 path: 'test/test1',
//                 name: 'Test1',
//                 component: () => import('../views/Test1.vue'),
//             },
//             {
//                 path: 'hello',
//                 name: 'HelloWorld',
//                 component: () => import('../components/HelloWorld.vue'),
//             },
//             {
//                 path: 'less',
//                 name: 'Less',
//                 component: () => import('../views/Less.vue'),
//             },
//         ],
//     },
// ];
const router = createRouter({
    history: createWebHistory(),
    routes: basicRoutes as unknown as RouteRecordRaw[],
});
/**
 * 挂载到vue实例函数
 * @param app vue实例
 */
export function setupRouter(app: App<Element>) {
    app.use(router);
}
export default router;
