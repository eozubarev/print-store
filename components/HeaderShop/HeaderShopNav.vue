<template>
    <nav class="nav">
        <div class="nav_container">
            <NuxtLink to="/components/link">
                Обо мне
            </NuxtLink>
            <NuxtLink to="/components/link">
                Доставка
            </NuxtLink>
            <NuxtLink to="/components/link">
                Контакты
            </NuxtLink>
        </div>
    </nav>
</template>
<style scoped lang="scss">
.nav {
  &_container {
    display: flex;

    & a {
      margin: 0 15px;
      cursor: pointer;
      font-family: $unboundedLight;
      transition: all $defaultTransitionDuration;

      &:hover {
        color: $primaryColor;
      }
    }
  }
}
</style>
<script setup lang="ts">

</script>
