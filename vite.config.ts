import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcsspresetenv from 'postcss-preset-env';
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
    return {
        base: './',
        plugins: [
            vue({
                // 设置属性为 响应式的
                reactivityTransform: true,
            }),
            // vueSetupExtend(),
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
            preprocessorOptions: {
                /**
                 * 原来这不是一个bug，只有在main.js引入一个其他scss文件或者在.vue文件中使用<style lang="scss"><style>，并且里面有内容，
                 * 则 scss.additionalData 配置的全局scss文件就可以正确引入了，
                 * 还建议我们在 scss.additionalData 引入的文件最好只写scss变量
                 * 别写css变量，因为css变量是运行时属性
                 */
                less: {
                    additionalData: `
                      @import "@/assets/styles/variables.less";
                      @import "@/assets/styles/mixins.less";
                      @import "@/assets/styles/theme.less";
                    `,
                },
                // less: {
                //     javascriptEnabled: true
                //   }
                // less: {
                //     javascriptEnabled: true,
                //     modifyVars: {
                //         hack: `true; @import (reference) "${path.resolve(
                //             'src/assets/styles/variables.less',
                //         )}";`,
                //     },
                // },
            },
            //添加这个报错，暂时不懂什么原因，还没解决
            postcss: {
                plugins: [autoprefixer],
            },
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
        server: {
            host: '',
            port: 8088,
            open: true,
            cors: true, //允许开发时ajax跨域
        },
    };
});
