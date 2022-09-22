import { ILogin, IResponse } from '../../types/login';
import request from '../axios';
/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin) => {
    return request({
        url: '/mock/api/login',
        method: 'post',
        data: params,
    });
};

export const logout = () => {
    return request({
        url: '/mock/api/logout',
        method: 'get',
    });
};
