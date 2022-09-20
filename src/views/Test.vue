<template>
    <div>
        <h1>test</h1>
        <div>{{ useStore.name }}</div>
        <div @click="handleLogin">登录</div>
        <router-link to="/test/test1">test1</router-link>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/modules/user';
import { API } from '../api';
console.log(API);
const useStore = useUserStore();
// useStore.updated('hhhh')
const handleLogin = async () => {
    let result = await API.login({ username: 'zff', password: 'zzzz' });
    console.log(result);
};
</script>

<style lang="" scoped></style>
