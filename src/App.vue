<template>
    <div class="menu" :class="{ topFixed: isFix }">
        <div>
            <router-link to="/index">Home</router-link>
            <router-link to="/test">test</router-link>
            <router-link to="/slot">slot</router-link>
            <router-link to="/cart">cart</router-link>
            <router-link to="/hello">helloworld</router-link>
        </div>
        <div>
            <button @click="changeTheme('default')">默认主题</button>
            <button @click="changeTheme('red')">红色主题</button>
        </div>
    </div>
    <div ref="layoutDom" class="layout-container">
        <Layout class="main" />
    </div>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Layout from './layout/index.vue';
import { ref } from 'vue';
import { bounce } from './utils/index';
const isFix = ref(false);
const layoutDom = ref(null);
const changeTheme = (theme: string) => {
    switch (theme) {
        case 'default':
            document.documentElement.className = 'theme-default';
            layoutDom.value.className = 'layout-container';
            break;
        case 'red':
            document.documentElement.className = 'theme-red';
            console.log(layoutDom);
            layoutDom.value.className = 'layout-container active';

            break;
    }
};
document.addEventListener(
    'scroll',
    bounce(200, function () {
        let scrollTop = window.pageYOffset;
        scrollTop > 50 ? (isFix.value = true) : (isFix.value = false);
    }),
);
</script>
<style lang="less">
.topFixed {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
}
.menu {
    background: #5b5a5a;
    display: flex;
    justify-content: space-between;
    color: #eee;
}
.menu a {
    margin-right: 20px;
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
.layout-container {
    background: @primary-color;
}
</style>
