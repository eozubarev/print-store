<template>
    <div class="lang">
        <div :class="langStore.lang === Language.RU ? activeClass : ''"
             @click="langStore.switchLang(Language.RU)">Ru
        </div>
        <div :class="langStore.lang === Language.ENG ? activeClass : ''"
             @click="langStore.switchLang(Language.ENG)">
            Eng
        </div>
    </div>
</template>

<script setup lang="ts">
import {useLangStore} from "~/store/lang";
import {Language} from "~/types/lang";

const langStore = useLangStore();
const activeClass = 'lang_active';
</script>

<style scoped lang="scss">
.lang {
  display: flex;
  font-family: $unboundedLight;
  text-transform: uppercase;
  cursor: pointer;

  &_active {
    color: $primaryColor;
  }

  & div {
    transition: all $defaultTransitionDuration;

    &:first-child {
      margin-right: 15px;
    }

    &:hover {
      color: $primaryColor;
    }
  }
}
</style>