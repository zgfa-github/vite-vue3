import request from '../axios';

export const getLogList = () => {
    return request({
        url: '/mock/api/getList',
        method: 'post',
    });
};
