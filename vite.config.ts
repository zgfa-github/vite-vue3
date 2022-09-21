import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
    return {
        base: './',
        plugins: [
            vue(),
            //mock
            viteMockServe({
                mockPath: 'mock', //mock文件地址
                localEnabled: command === 'serve',
                //localEnabled: !!process.env.USE_MOCK, // 开发打包开关
                //prodEnabled: !!process.env.USE_CHUNK_MOCK, // 生产打包开关
                logger: false, //是否在控制台显示请求日志
                supportTs: true,
            }),
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: '/src',
                },
            ],
        },
        css: {
            preprocessorOptions: {},
        },
        build: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
        outDir: 'dist', //指定输出路径
        assetsDir: 'assets', //指定生成静态资源的存放路径
    };
});
