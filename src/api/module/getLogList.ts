import request from '../axios';

export const getLogList = () => {
    return request({
        url: '/getList',
        method: 'post',
    });
};
