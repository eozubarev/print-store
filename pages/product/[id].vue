<template>
    <div class="">
        Продукт: {{ id }}
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

</script>

<style scoped lang="scss">
</style>