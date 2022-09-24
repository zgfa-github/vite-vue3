import { ref, computed } from 'vue';
interface IGoods {
    id: number;
    title: string;
    price: number;
    pic: string;
    num: number;
}
export const useCart = (initiGoodsList) => {
    const current = ref(initiGoodsList);
    const inc = (id: number, gNums: number) => {
        console.log(initiGoodsList);
        initiGoodsList.arr.forEach((item: IGoods) => {
            if (item.id === id) {
                gNums++;
                item.num = gNums;
            }
        });
    };
    const dec = (id: number, gNums: number) => {
        initiGoodsList.arr.forEach((item: IGoods) => {
            if (item.id === id) {
                if (gNums === 0) {
                    item.num = 0;
                    return;
                }
                gNums--;
                item.num = gNums;
            }
        });
    };
    const goodsAllPrice = computed(() => {
        let sum = 0;
        initiGoodsList.arr.forEach((item: IGoods) => {
            sum += item.num * item.price;
        });
        return sum;
    });

    return {
        current,
        inc,
        dec,
        goodsAllPrice,
    };
};
