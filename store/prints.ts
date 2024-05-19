import {defineStore} from 'pinia';
import type {Print} from "~/types/print";
import {printsData} from "~/mock/printsData";

export const usePrintStore = defineStore('prints', {
    state: () => ({
        initialLoad: false,
        prints: [] as Print[]
    }),
    getters: {
        getPrintsData(): Print[] {
            return printsData;
        }
    },
    actions: {},
});
