import { MockMethod } from 'vite-plugin-mock';
const cartList = [
    {
        id: 1,
        pic: '',
        title: '周黑鸭',
        num: 1,
        price: 1,
        isChecked: false,
    },
    {
        id: 2,
        pic: '',
        title: '三只松鼠真好吃',
        num: 1,
        price: 1,
        isChecked: false,
    },
    {
        id: 3,
        pic: '',
        title: '水果之王榴莲',
        num: 10,
        price: 1,
        isChecked: false,
    },
    {
        id: 4,
        pic: '',
        title: '我爱中国哈哈哈',
        num: 10,
        price: 1,
        isChecked: false,
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
