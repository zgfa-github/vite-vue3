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
        setToken(token: string) {
            localStorage.setItem('token', token);
        },
        delToken() {
            localStorage.removeItem('token');
        },
    },
});

export { useUserStore };
