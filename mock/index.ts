import { MockMethod } from 'vite-plugin-mock';

const arr: any = [];
for (let index = 0; index < 50; index++) {
    arr.push({
        id: index,
        customer_name: 'zgf',
        status_text: '登录成功',
        os: 'window 10',
        browser: 'Chrome',
        ip: '192.168.1.101',
        desc: '快乐学习模式',
    });
}
const logList = {
    total: 51,
    page: 1,
    pageSize: 20,
    list: arr,
};

const statusList = {
    data: [
        { label: '全部', value: 0 },
        { label: '待审核', value: 1 },
    ],
};
export default [
    {
        url: '/mock/api/getList',
        method: 'post',
        response: () => {
            return logList;
        },
    },
    {
        url: '/mock/api/getStatusList',
        method: 'get',
        response: () => {
            return statusList;
        },
    },
] as MockMethod[];
