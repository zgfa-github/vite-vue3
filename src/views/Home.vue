<template>
    <div>
        <ul>
            <li v-for="list in ListArr.arr" :key="list.id">
                {{ list.ip }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getLogList } from '../api/module/getLogList';
import { getStatusList } from '../api/module/getStatusList';
interface IList {
    id: number;
    customer_name: string;
    status_text: string;
    os: string;
    browser: string;
    ip: string;
}

//获取到当前路径 /index
console.log('获取当前路由路径如下：');
console.log(useRoute().fullPath);
//通过这种方式解决reactive 不能直接赋值，间接通过对象属性
let ListArr = reactive({
    //通过类型断言解决组件上never属性不存在
    arr: [] as any[],
});
onMounted(async () => {
    //获取到所有路由
    const routes = useRouter().getRoutes();
    console.log('获取所有路由');
    console.log(routes);

    const result = await getLogList();
    console.log('前端终端获取数据成功');
    console.log(result);
    ListArr.arr = result.data.list;
    // const result1 = await getStatusList();
    console.log(ListArr.arr);
});
</script>

<style lang="" scoped></style>
