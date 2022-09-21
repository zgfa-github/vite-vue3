<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>test</h1>
        <div>{{ useStore.name }}</div>
        <div @click="handleLogin">登录</div>
        <div @click="getUser">获取用户</div>
        <img :src="src ? src : '../assets/vue.svg'" alt="" />
        <router-link to="/test/test1">test1</router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/modules/user';
import { API } from '../api';
import { getUserInfo } from '../api/module/getUserInfo';
console.log(API);
const useStore = useUserStore();
// useStore.updated('hhhh')
const src = ref('');
const handleLogin = async () => {
    let res = await API.login({ username: 'vben', password: '123456' });
    console.log('前端终端获取数据成功');
    console.log(res);
    if (res) {
        useStore.token = res.data.result.token;
        localStorage.setItem('token', useStore.token);
    }
};
const getUser = async () => {
    let result = await getUserInfo();
    console.log('前端终端获取用户的数据成功');
    console.log(result);
    src.value = result.data.result.avatar;
};
</script>

<style lang="" scoped></style>
