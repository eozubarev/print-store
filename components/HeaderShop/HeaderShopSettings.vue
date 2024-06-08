<template>
    <div class="header-settings">
        <ColorMode/>
        <HeaderShopSocials/>
        <CommonShopLang class="header-settings_lang"/>
    </div>
</template>
<style scoped lang="scss">
.header-settings {
  display: flex;
  align-items: center;

  &_lang {
    margin-left: 30px;
  }
}
</style>
<script setup lang="ts">

import HeaderShopSocials from "~/components/HeaderShop/HeaderShopSocials.vue";
import ColorMode from "~/components/ColorMode/ColorMode.vue";
import CommonShopLang from "~/components/CommonShop/CommonShopLang.vue";
</script>


