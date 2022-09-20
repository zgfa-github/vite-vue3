<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Layout from './layout/index.vue';
</script>

<template>
    <div class="menu">
        <router-link to="/index">Home</router-link>
        <router-link to="/test">test</router-link>
    </div>
    <Layout />
</template>

<style scoped>
.menu {
    background: #000;
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
