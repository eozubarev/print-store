// eslint.config.js
import antfu from '@antfu/eslint-config'
import NuxtEslintConfig from './.nuxt/eslint.config.mjs'

export default antfu(
    {
        // Enable stylistic formatting rules
        // stylistic: true,

        // Or customize the stylistic rules
        stylistic: {
            indent: 2, // 4, or 'tab'
            quotes: 'single', // or 'double'
        },

        // TypeScript and Vue are auto-detected, you can also explicitly enable them:
        typescript: true,
        vue: true,

        // Disable jsonc and yaml support
        jsonc: false,
        yaml: false,

        // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
        ignores: [
            '**/fixtures',
            // ...globs
        ]
    },
    // Add the Nuxt rules
    NuxtEslintConfig,
    // ...your other rules
)