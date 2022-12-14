import { ref, computed } from 'vue';
interface IGoods {
    id: number;
    title: string;
    price: number;
    pic: string;
    num: number;
    isChecked: boolean;
}
/**
 *
 * @param initiGoodsList
 * @returns 属性和方法
 */
export const useCart = (initiGoodsList: { arr: any[] }) => {
    const current = ref(initiGoodsList);
    const checked = ref(false);
    /**
     *  加
     * @param id
     * @param gNums
     */
    const inc = (id: number, gNums: number) => {
        console.log(initiGoodsList);
        initiGoodsList.arr.forEach((item: IGoods) => {
            if (item.id === id) {
                gNums++;
                item.num = gNums;
            }
        });
    };
    /**
     *  减
     * @param id
     * @param gNums
     */
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
    /**
     *  总价计算属性
     */
    const totalPrice = computed(() => {
        let sum = 0;
        initiGoodsList.arr.forEach((item: IGoods) => {
            if (item.isChecked) {
                sum += item.num * item.price;
            }
        });
        return sum;
    });
    /**
     *  单选
     * @returns
     */
    const select = () => {
        let sum = 0;

        initiGoodsList.arr.forEach((item: IGoods) => {
            console.log(item.isChecked);
            if (item.isChecked) {
                sum += item.num * item.price;
            }
        });
        const res = initiGoodsList.arr.filter((item: IGoods) => {
            return item.isChecked === true;
        });
        res.length === initiGoodsList.arr.length
            ? (checked.value = true)
            : (checked.value = false);

        return sum;
    };
    /**
     *  全选
     * @param iSelect
     */
    const changeHander = (iSelect: boolean) => {
        console.log(iSelect);

        if (iSelect) {
            initiGoodsList.arr.forEach((item: IGoods) => {
                item.isChecked = true;
            });
        } else {
            initiGoodsList.arr.forEach((item: IGoods) => {
                item.isChecked = false;
            });
        }
    };
    return {
        current,
        inc,
        dec,
        totalPrice,
        select,
        changeHander,
        checked,
    };
};
