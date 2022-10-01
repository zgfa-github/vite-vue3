import { RouteRecordRaw } from 'vue-router';
import type { AppRouteModule, AppRouteRecordRaw } from '../type';
import { routes } from './mainRoutes';
//重点是这里（是使用vite时，能批量导入文件）
//globEager 已被废弃使用了，在vite3.0+之后
//const modules = import.meta.globEager('./modules/**/*.ts');
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
console.log('import.meta.globEager 批量导入');
console.log(modules);

const routeModuleList: RouteRecordRaw[] = [];

Object.values(modules).forEach((val) => {
    //console.log(modules[key].default);
    //const mod = modules[key].default || {};
    const mod = val['Router'];
    console.log(mod);
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    //console.log(modList);
    routeModuleList.push(...modList);
});

//export const basicRoutes: RouteRecordRaw[] = routeModuleList;
// const res = routes[0].children;
// const a = [...routeModuleList];
// const arr = res?.concat(a);

export const basicRoutes = [...routes, ...routeModuleList];
