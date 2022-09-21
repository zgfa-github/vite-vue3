import request from '../axios';

export const getUserInfo = () => {
    return request({
        url: '/mock/api/getUserInfo',
        method: 'get',
    });
};
