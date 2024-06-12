import {defineStore} from 'pinia';
import type {Print} from "~/types/print";

export const useCartStore = defineStore('cart', {
    state: () => ({
        product: null as null | Print,
        isOpenSlideover: false,
    }),
    getters: {},
    actions: {
        openSlideover(): void {
            this.isOpenSlideover = true
        },
        closeSlideover(): void {
            this.isOpenSlideover = false
        }
    },
});
