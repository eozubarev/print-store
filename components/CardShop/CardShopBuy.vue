<template>
    <div class="card_buy" :data-card-id="props.cardId">
        <UButton
                color="white"
                variant="solid"
                size="xl"
        >Купить
        </UButton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    cardId: {
        type: Number,
        required: false
    },
})
</script>

<style scoped lang="scss">
.card_buy {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & button {
    width: 300px;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
  }
}
</style>