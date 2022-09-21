<template>
    <h4>test1标题</h4>
    <button @click="inc(5)">加：count is{{ count }}</button>
    <button @click="dec(10)">count is{{ count }}</button>
    <div>
        <button @click="reset">重置</button>
        <button @click="set(100)">设置</button>
    </div>
</template>

<script setup lang="ts">
import { useCount } from '../utils/useCount';
const {
    current: count,
    inc,
    dec,
    reset,
    set,
} = useCount(10, { min: 10, max: 150 });
</script>

<style lang="" scoped></style>
