import request from '../axios';

export const getList = () => {
    return request({
        url: '/getlist',
        method: 'get',
        data: {},
    });
};
