import { Fn, timer } from '../types/index';
/**
 * 防抖函数 bounce
 * @param delay
 * @param fn
 * @returns fn
 */
export const bounce = (delay: number, fn: Fn) => {
    let timer: timer = null;
    return function () {
        if (timer) {
            console.log(1);
            return false;
        }
        //此处加window是为了解决timer报错"不能将类型“Timeout”分配给类型“timer”"
        timer = window.setTimeout(function (this: any, ...args: any[]) {
            const self = this;
            console.log(self);
            console.log(args);

            fn.apply(self);
        }, delay);
    };
};
