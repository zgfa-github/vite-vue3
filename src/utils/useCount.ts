import { reactive, ref, watch } from 'vue';
interface IRange {
    min?: number;
    max?: number;
}
/**
 * 逻辑业务和数据状态抽离一起管理，方便维护，一目了然
 * @param initival
 * @param range
 * @returns {current, inc, dec}
 */
export const useCount = (initival = 0, range?: IRange) => {
    const current = ref(initival);
    const inc = (num: number) => {
        num ? (current.value += num) : (current.value += 1);
    };
    const dec = (num: number) => {
        num ? (current.value -= num) : (current.value -= 1);
    };
    const set = (num: number) => {
        current.value = num;
    };
    const reset = () => {
        current.value = initival;
    };
    /**
     * @param initival
     * @param range
     */
    watch(current, (oldValue, newValue) => {
        if (range && range?.min && current.value <= range?.min) {
            console.log('小');
            current.value = range?.min;
        }
        if (range && range?.max && current.value >= range?.max) {
            console.log('大');
            current.value = range?.max;
        }
    });

    return {
        current,
        inc,
        dec,
        set,
        reset,
    };
};
