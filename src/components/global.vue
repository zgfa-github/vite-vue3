<template>
    <div></div>
</template>
<script lang="ts">
let baseUrl;
console.log(import.meta.env.VITE_APP_ENV);

if (import.meta.env.VITE_APP_ENV === 'developmentEnv') {
    //  开发包环境
    baseUrl = '/mock/api';
} else if (import.meta.env.VITE_APP_ENV === 'testEnv') {
    console.log(2);

    // 测试包环境
    baseUrl = 'https://test-app...';
} else if (import.meta.env.VITE_APP_ENV === 'productionEnv') {
    // 生产包环境
    baseUrl = 'https://test-app...';
}

export default {
    url: baseUrl,
};
</script>
<style></style>
