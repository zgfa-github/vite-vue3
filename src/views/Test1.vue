<template>
    <div>
        <h4>加减逻辑功能抽离的实例</h4>
        <bottom-line></bottom-line>
        <button @click="inc(5)">加：count is{{ count }}</button>
        <button @click="dec(10)">count is{{ count }}</button>
        <div>
            <button @click="reset">重置</button>
            <button @click="set(100)">设置</button>
        </div>
        <bottom-line></bottom-line>
        <h4>computed的使用实例</h4>
        <div>
            姓：<input v-model="person.firstName" type="text" />

            名：<input v-model="person.lastName" type="text" /> 姓名：<input
                v-model="fullName"
                type="text"
            />
        </div>
        <bottom-line></bottom-line>
        <h4>emit的使用实例</h4>
        <!--父组件-->
        <HelloWorld msg="我爱中华人民共和国" @change="change"></HelloWorld>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useCount } from '../utils/useCount';
import BottomLine from '../components/line/BottomLine.vue';
import HelloWorld from '../components/HelloWorld.vue';

const {
    current: count,
    inc,
    dec,
    reset,
    set,
} = useCount(10, { min: 10, max: 150 });
let person = reactive({
    firstName: '朱',
    lastName: '官府',
});
//计算属性只读
// let fullName = computed(() => {
//     return person.firstName + '~' + person.lastName;
// });
//计算属性可写
let fullName = computed({
    get() {
        console.log(333);

        return person.firstName + '~' + person.lastName;
    },
    set(value) {
        console.log(111);
        let arr = value.split('~');
        console.log(arr);
        person.firstName = arr[0];
        person.lastName = arr[1];
    },
});
fullName.value = '朱~官府';

const change = (val: number) => {
    console.log(`父组件${val}`);
};
</script>

<style lang="" scoped></style>
