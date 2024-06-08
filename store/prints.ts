import {defineStore} from 'pinia';
import type {Print} from "~/types/print";
import {printsData} from "~/mock/printsData";

export const usePrintStore = defineStore('prints', {
    state: () => ({
        initialLoad: false,
        prints: printsData
    }),
    getters: {},
    actions: {
        getPrintCard(id: number): Print | undefined {
            return printsData.find(print => print.id === id)
        }
    }
});
