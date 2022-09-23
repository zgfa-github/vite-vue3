<template>
    <button>
        <!--具名插槽-->
        <slot>default btn</slot>
    </button>
    <button><slot name="test1"></slot></button>
    <button><slot name="test2"></slot></button>
</template>

<script setup lang="ts"></script>

<style lang="" scoped></style>
