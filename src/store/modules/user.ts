import { defineStore } from 'pinia';

const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '朱观富，加油！',
            token: '',
        };
    },
    actions: {
        updated(name: string) {
            this.name = name;
        },
        setToke(token: string) {
            //localStorage.setItem(token, token);
        },
    },
});

export { useUserStore };
