<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Layout from './layout/index.vue';
import { ref } from 'vue';
const isFix = ref(false);
type Fn = () => void;
type timer = null | undefined | number;
const bounce = (delay: number, fn: Fn) => {
    let timer: timer = null;
    return function () {
        if (timer) {
            console.log(1);

            return false;
        }
        timer = setTimeout(function () {
            console.log(this);

            fn.apply(this);
        }, delay);
    };
};
// document.addEventListener('scroll', function () {
//     // console.log(window);

// });

document.addEventListener(
    'scroll',
    bounce(200, function () {
        let scrollTop = window.pageYOffset;
        scrollTop > 50 ? (isFix.value = true) : (isFix.value = false);
    }),
);
</script>

<template>
    <div class="menu" :class="{ topFixed: isFix }">
        <router-link to="/index">Home</router-link>
        <router-link to="/test">test</router-link>
    </div>
    <div class="layout-container">
        <Layout class="main" />
    </div>
</template>

<style scoped>
.topFixed {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
}
.menu {
    background: #5b5a5a;
    display: flex;
    justify-content: space-around;
}
.menu a {
    color: #fff;
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
</style>
