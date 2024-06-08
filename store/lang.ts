import {defineStore} from 'pinia';
import {Language} from "~/types/lang";

export const useLangStore = defineStore('lang', {
    state: () => ({
        lang: Language.RU as Language,
    }),
    getters: {},
    actions: {
        switchLang(lang: Language) {
            this.lang = lang
        }
    }
});
