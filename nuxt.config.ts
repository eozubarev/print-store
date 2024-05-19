// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Магазин принтов - Евгений Зубарев',
            description: 'Откройте для себя мир авторских фото-принтов в магазине Евгения Зубарева!  Широкий выбор жанров, высокое качество печати,  различные форматы. Создайте уютную атмосферу в вашем доме с помощью уникальных фотографий!\n'
        },
    },
    devtools: {enabled: true},
    modules: ["@nuxt/ui", "@nuxt/image"],
    css: ['~/assets/css/main.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/scss/_variables.scss" as *;'
                }
            }
        }
    }
})