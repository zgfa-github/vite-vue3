# 技术栈：Vue3 + TypeScript + Vite + vue-router + pinia + husky + mock

## vue3是什么？

- 是vue2的升级版，源码用ts重构，解决vue2在很多场景的不足之处，优化挺多

- 写法上有不同，采用组合式API方式，业务逻辑可以单独抽离为一个模块，不再像选项式臃肿冗余，统一方便管理维护

- 数据响应式改进，采用了proxy模式

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Vite是什么？

- 新的脚手架工具，初始化命令行（npm init vue@latest）,然后傻瓜式选择所要的框架语言，包括vue3, react等等

- 比webpack更加轻量级，构建开发快的体验感，热更新hmr快

- 打包思路也不同了
- 先运行 npm run build 生成dist  然后在 npm run preview，就在本地产生一个服务器，dist静态文件在服务器上运行，可以预览效果

## TypeScript是什么？

- 是js超集，静态编译为js再执行，编译过程中有错就提示，类似后端语言写法，规范约束性很好

## vue-router是什么？

- 这里所说的路由是指4.0版本以上的，和之前版本写法有所区别
- 增加了路由的声明文件,更加的规范


## pinia是什么？

- 是新的状态管理器方式，相对于vuex，进一步优化不少

- 写法上和vuex 感觉大同小异

## husky是什么？

- 是为了更好把控代码质量，上线之前检查发现问题，避免上线后带来的bug后果

- 省去 git commit -m '注释'这一步， 通过在package.json文件中配置选项,执行npm run commit

## CI/CD是什么？

- CI是持续集成
- CD是持续部署
- 两者的目的：简化了很多手动重复性工作，让代码自动化完成手动的操作步骤，即是自动部署过程

## vite-plugin-mock   模拟后端返回数据

- 解决了什么？可以模仿后端接口返回数据，解决了前端前期开发无数据的等待局面，只需前期和后端商量好接口字段就好

- 先模拟，后期再和后端接口联调测试，这样达到效率更高

## 也可以通过apiFox接口平台实现mock模拟数据

- 就不需要在项目新建mock目录，直接在平台模拟，生成接口地址在项目中调用就可以了，这样统一管理接口

## 解决构建npm run build 报错问题：找不到类型声明文件 estree
- 安装 yarn add @typescript-eslint/typescript-estree -D
- 很奇怪它就解决了，一脸懵逼

## 奇怪问题
- 有时候删除node_modules 重新安装又解决了很多问题

## postcss的安装和配置
- 安装 npm i postcss 
- 再安装 npm i postcss-preset-env或者autoprefixer   都可以实现css前面加前缀
- 需要在vite.config.js里面配置，不需要在根目录新建postcss.config.js文件，可能版本原因，没有深入研究，总之在vite.config.js配置就可以了

### vue3+vite+ts+pinia+elplus那些不得不填的坑

- 我在实践过程中的确也遇上这些问题，一模一样

```
转载自：https://juejin.cn/post/7135696241245028382
```
## Recommended IDE Setup

## 学习，加油，不忘初心，方得始终

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


