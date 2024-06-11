<template>
    <nav class="nav">
        <div class="nav_container">
<!--            <NuxtLink to="/about">-->
<!--                {{ langStore.lang === Language.RU ? 'Обо мне' : 'About me' }}-->
<!--            </NuxtLink>-->
            <NuxtLink to="/delivery">
                {{ langStore.lang === Language.RU ? 'Доставка' : 'Delivery' }}
            </NuxtLink>
            <NuxtLink to="/contacts">
                {{ langStore.lang === Language.RU ? 'Контакты' : 'Contacts' }}
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
import {useLangStore} from "~/store/lang";
import {Language} from "~/types/lang";

const langStore = useLangStore();
</script>
