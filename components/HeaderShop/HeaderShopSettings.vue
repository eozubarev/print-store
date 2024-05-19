<template>
    <div class="header_settings">
        <ColorMode/>
        <HeaderShopSocials/>
    </div>
</template>
<style scoped lang="scss">
.header {
  &_settings {
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">

import HeaderShopSocials from "~/components/HeaderShop/HeaderShopSocials.vue";
import ColorMode from "~/components/ColorMode/ColorMode.vue";
</script>


