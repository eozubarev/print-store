<template>
    <header class="header">
        <UContainer>
            <div class="header_container">
                <HeaderShopLogo/>
                <HeaderShopNav/>
                <HeaderShopSettings/>
            </div>
        </UContainer>
    </header>
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  width: 100%;
  z-index: 10;
  transition: all $defaultTransitionDuration;

  &_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
}
</style>
<script setup lang="ts">
import HeaderShopNav from "~/components/HeaderShop/HeaderShopNav.vue";
import HeaderShopLogo from "~/components/HeaderShop/HeaderShopLogo.vue";
import HeaderShopSettings from "~/components/HeaderShop/HeaderShopSettings.vue";
</script>



