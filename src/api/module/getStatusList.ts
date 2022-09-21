import request from '../axios';

export const getStatusList = () => {
    return request({
        url: '/mock/api/getStatusList',
        method: 'get',
    });
};
