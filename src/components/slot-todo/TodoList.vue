<template>
    <!--作用域插槽-->
    <ul>
        <li v-for="(item, index) in lists" :key="item.id">
            <slot :data="item" :index="index"></slot>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const lists = reactive([
    {
        id: 1,
        text: 'aaa',
    },
    {
        id: 2,
        text: 'bbb',
    },
    {
        id: 3,
        text: 'ccc',
    },
    {
        id: 4,
        text: 'ddd',
    },
]);
</script>

<style lang="" scoped></style>
