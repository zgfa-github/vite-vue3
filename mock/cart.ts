import { MockMethod } from 'vite-plugin-mock';
const cartList = [
    {
        id: 1,
        pic: '',
        title: '周黑鸭',
        num: 1,
        price: 1,
    },
    {
        id: 2,
        pic: '',
        title: '三只松鼠真好吃',
        num: 1,
        price: 1,
    },
    {
        id: 3,
        pic: '',
        title: '水果之王榴莲',
        num: 10,
        price: 1,
    },
];
export default [
    {
        url: '/mock/api/getCartList',
        method: 'get',
        response: () => {
            return cartList;
        },
    },
] as MockMethod[];
