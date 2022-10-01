import { AppRouteModule, AppRouteRecordRaw } from '../../type';

export const Router: AppRouteModule = {
    path: '/b',
    name: 'B',
    component: () => import('@/views/B.vue'),
    meta: {
        title: 'bbbb',
    },
};
