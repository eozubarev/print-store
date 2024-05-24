// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Магазин принтов - Евгений Зубарев',
        },
    },
    devtools: {enabled: true},
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        '@pinia/nuxt',
        'nuxt-module-eslint-config'
    ],
    ssr: true,
    css: ['~/assets/css/main.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/scss/_variables.scss" as *;'
                }
            }
        }
    },
    eslintConfig: {
        setup: true
    }
})