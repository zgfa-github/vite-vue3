<template>
    <div>
        <h3>父组件使用的匿名插槽用法</h3>
        <my-button></my-button>
        <my-button>填充button11</my-button>
        <my-button>填充button22</my-button>
        <bottom-line></bottom-line>
        <h3>父组件使用的具名插槽用法</h3>
        <my-button1>
            <template #default> </template>
            <template #test1> test1 </template>
            <template #test2> <div>test2222</div> </template>
        </my-button1>
        <bottom-line></bottom-line>
        <h3>父组件使用的作用域插槽用法</h3>
        <!--让父级插槽内容能够访问子组件数据，数据从子组件往父组件流动,父组件通过带值（命名随意）的v-slot来获取子组件的数据-->
        <todo-list v-slot="slotProps">
            <div>{{ slotProps.index }}-{{ slotProps.data.text }}</div>
        </todo-list>
        <!-- <todo-list v-slot="{ index, data }">
            <div>{{ index }}-{{ data.text }}</div>
        </todo-list> -->
    </div>
</template>

<script setup lang="ts">
/**
 * 父组件直接引用，然后模板写 my-button,不需要写components: {MyButton} 注册
 */
import MyButton from '../components/button/MyButton.vue';
import MyButton1 from '../components/button/MyButton1.vue';
import BottomLine from '../components/line/BottomLine.vue';
import TodoList from '../components/slot-todo/TodoList.vue';
</script>

<style lang="" scoped></style>
