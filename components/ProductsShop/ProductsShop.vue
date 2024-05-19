<template>
    <div class="products">
        <SectionShop
                title="АВТОРСКИЕ ПРИНТЫ"
                description="Мои уникальные фото принты выского качества. Они станут отличным украшением для вашего дома."
        />
        <CardShop class="products__card"/>
    </div>
</template>
<style scoped lang="scss">
.products {
  padding-top: 120px;
  padding-bottom: 60px;

  &__card {
    padding: 60px 0;
  }
}
</style>
<script setup lang="ts">
import Print from "~/components/CardShop/CardShop.vue";
import SectionShop from "~/components/SectionShop/SectionShop.vue";
</script>


