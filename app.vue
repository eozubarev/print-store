<template>
    <HeaderShop/>
    <NuxtLayout name="default">
        <NuxtPage/>
    </NuxtLayout>
</template>
<style lang="scss" scoped>

</style>
<script setup lang="ts">
useHead({
    title: 'Магазин принтов - Евгений Зубарев',
    meta: [
        { name: 'Магазин авторских постеров и товаров от фотографа Евгения Зубарева', content: 'Авторские постеры и кинопленка' }
    ],
})
useSeoMeta({
    title: 'Магазин принтов - Евгений Зубарев',
    description: 'Магазин авторских постеров и товаров от фотографа Евгения Зубарева',
})
</script>