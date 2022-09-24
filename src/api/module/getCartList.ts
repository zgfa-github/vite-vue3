import request from '../axios';
export const getCartList = () => {
    return request({
        url: '/mock/api/getCartList',
        method: 'get',
    });
};
