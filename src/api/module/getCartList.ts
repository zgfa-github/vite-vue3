import request from '../axios';
export const getCartList = () => {
    return request({
        url: '/getCartList',
        method: 'get',
    });
};
