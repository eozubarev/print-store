<template>
    <div class="skeleton_image" v-show="skeletonImage"/>
</template>

<script setup lang="ts">
const skeletonImage = ref(true)

onMounted(() => {
    setTimeout(() => {
        skeletonImage.value = false
    }, 500)
})
</script>

<style scoped lang="scss">
.skeleton {
  &_image {
    width: 830px;
    height: 500px;
    background-color: #eee;
    border-radius: 8px;
    animation: shimmer 1.5s linear infinite;

    background-image: linear-gradient(to right, #eee 10%, #e6e6e6 20%, #eee 30%); // Добавьте градиент
    background-size: 800px 100%; // Задайте размер градиента

    @keyframes shimmer {
      0% {
        background-position: -400px 0;
      }
      100% {
        background-position: 400px 0;
      }
    }
  }
}
</style>