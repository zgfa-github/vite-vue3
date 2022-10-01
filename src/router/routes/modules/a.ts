import { AppRouteModule, AppRouteRecordRaw } from '../../type';

export const Router: AppRouteModule = {
    path: '/a',
    name: 'A',
    component: () => import('@/views/A.vue'),
    meta: {
        title: 'aaaa',
    },
};
