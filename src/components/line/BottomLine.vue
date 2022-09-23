<template>
    <!--匿名插槽-->
    <div class="line"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.line {
    border-bottom: 1px solid #999;
}
</style>
