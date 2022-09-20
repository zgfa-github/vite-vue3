import { ILogin, IResponse } from '../../types/login';
import request from '../axios';
/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin): Promise<IResponse> => {
    return request({
        url: '/login',
        method: 'post',
        data: params,
    });
};
