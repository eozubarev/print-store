<template>
    <div class="products">
        <SectionShop
                :title="langStore.lang === Language.ENG ? 'Author\'s prints' : 'Авторские принты'"
                :description="langStore.lang === Language.ENG ? 'My unique high quality photo prints. They will be a great decoration for your home' : 'Мои уникальные фото принты высокого качества. Они станут отличным украшением для вашего дома'"
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
import SectionShop from "~/components/SectionShop/SectionShop.vue";
import {useLangStore} from "~/store/lang";
import {Language} from "~/types/lang";

const langStore = useLangStore();
</script>


