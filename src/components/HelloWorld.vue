<script setup lang="ts">
import { ref } from 'vue';
/**
 * 想要设置默认值，通过 withDefaults 编译器宏
 */
// const props = defineProps<{
//     msg: string;
//     bar?: number;
// }>();
interface Props {
    msg?: string;
    labels?: string[];
}
const props = withDefaults(defineProps<Props>(), {
    msg: '默认值helloworld',
    labels: () => ['a', 'b'],
});
/**
 * 非ts
 */
// const props = defineProps({
//     msg: {
//         type: String,
//         default: () => '默认值1111',
//     },
// });
const emit = defineEmits<{
    (e: 'change', id: number): void;
    (e: 'update', value: string): void;
}>();
const count = ref(0);
const handleClick = () => {
    console.log('子组件');
    emit('change', 123456789);
    emit('update', 'abc');
};
</script>

<template>
    <div>
        <h1 @click="handleClick">{{ msg }}</h1>

        <div class="card">
            <button type="button" @click="count++">count is {{ count }}</button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>

        <p>
            Check out
            <a
                href="https://vuejs.org/guide/quick-start.html#local"
                target="_blank"
                >create-vue</a
            >, the official Vue + Vite starter
        </p>
        <p>
            Install
            <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                >Volar</a
            >
            in your IDE for a better DX
        </p>
        <p class="read-the-docs">
            Click on the Vite and Vue logos to learn more
        </p>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
