<template>
    <div>
        <h5>购物车</h5>
        <bottom-line></bottom-line>
        <ul class="cart-box">
            <li v-for="good in goodsList.arr" :key="good.id">
                <p>{{ good.title }}</p>
                <div>
                    <img :src="good.pic" alt="" />
                </div>
                <div>rmb:{{ good.price }}元</div>
                <div>数量：{{ good.num }}</div>
                <div>
                    <input
                        type="button"
                        value="减"
                        @click="dec(good.id, good.num)"
                    />
                    <input type="text" value="" />
                    <input
                        type="button"
                        value="加"
                        @click="inc(good.id, good.num)"
                    />
                </div>
            </li>
        </ul>
        <div>总价：{{ goodsAllPrice }}元</div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive, computed, ref } from 'vue';
import BottomLine from '../components/line/BottomLine.vue';
import { getCartList } from '../api/module/getCartList';
import { useCart } from '../utils/useCart';

const num = ref(0);
const goodId = ref(0);
let goodsList = reactive({
    arr: [] as any[],
});
const { current: cur, inc, dec, goodsAllPrice } = useCart(goodsList);

onMounted(async () => {
    let res = await getCartList();
    console.log(res.data);
    goodsList.arr = res.data;
});
</script>

<style scoped>
.cart-box li {
    padding: 10px 0;
    border-bottom: 6px solid rgb(239, 237, 237);
}
</style>
