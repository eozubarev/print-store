<template>
    <div class="card__price" :style="{
        marginTop: props.marginTop,
        fontSize: props.fontSize
    }">
        {{ Math.trunc(props.price).toLocaleString('ru-RU') }} ₽
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    price: {
        type: Number,
        required: true
    },
    marginTop: {
        type: String,
        default: '13px',
        required: false
    },
    fontSize: {
        type: String,
        default: '19px',
        required: false
    }
})
</script>

<style scoped lang="scss">
.card__price {
  color: $primaryColor;
}
</style>