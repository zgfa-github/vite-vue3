<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Layout from './layout/index.vue';
import { ref } from 'vue';
import { bounce } from './utils/index';
const isFix = ref(false);

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
        <router-link to="/slot">slot</router-link>
        <router-link to="/cart">cart</router-link>
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
    /* justify-content: space-between; */
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
