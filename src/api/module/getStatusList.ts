import request from '../axios';

export const getStatusList = () => {
    return request({
        url: '/getStatusList',
        method: 'get',
    });
};
