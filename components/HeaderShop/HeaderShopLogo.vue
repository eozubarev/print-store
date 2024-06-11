<template>
    <div class="header_logo">
        <NuxtLink to="/" v-if="langStore.lang === Language.ENG">
            eugene<br>
            zubarev
        </NuxtLink>
        <NuxtLink to="/" v-else>
            евгений<br>
            зубарев
        </NuxtLink>
    </div>
</template>
<style scoped lang="scss">
.header_logo {
  font-family: $unboundedExtraLight;
  line-height: 14px;
}
</style>
<script setup lang="ts">
import {useLangStore} from "~/store/lang";
import {Language} from "~/types/lang";

const langStore = useLangStore();
</script>
