<template>
    <div class="card__price">
        {{ Math.trunc(props.price).toLocaleString('ru-RU') }} ₽
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    price: {
        type: Number,
        required: true
    },
})
</script>

<style scoped lang="scss">
.card__price {
  margin-top: 13px;
  color: $primaryColor;
  font-size: 19px;
}
</style>