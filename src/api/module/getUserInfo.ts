import request from '../axios';

export const getUserInfo = () => {
    return request({
        url: '/getUserInfo',
        method: 'get',
    });
};
