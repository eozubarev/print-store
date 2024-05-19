<template>
    <ClientOnly>
        <UButton
                :icon="isDark ? darkIcon : lightIcon"
                @click="isDark = !isDark"
                color="gray"
                variant="ghost"
                aria-label="Theme"
        />
        <template #fallback>
            <div class="w-8 h-8"/>
        </template>
    </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const darkIcon = 'i-heroicons-moon-20-solid';
const lightIcon = 'i-heroicons-sun-20-solid';

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>