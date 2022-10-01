/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { RouteMeta, RouteRecordRaw } from 'vue-router';
import { defineComponent } from 'vue';

// export type Component<T extends any = any> =
//     | ReturnType<typeof defineComponent>
//     | (() => Promise<typeof import('*.vue')>)
//     | (() => Promise<T>);

/**
 * {RouteRecordRaw} 是官方提供的路由对象数据类型
 * Omit 删除指定类型的key，返回删除后的接口类型
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?: AppRouteRecordRaw[];
    props?: any; //Recordable
    fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;
