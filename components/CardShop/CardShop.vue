<template>
    <div class="card">
        <div class="card_container">
            <div class="card__item"
                 v-for="card in printStore.prints"
                 :key="card.id"
            >
                <NuxtLink :to="`/product/${card.id}`">
                    <div class="card__img">
                        <img v-for="image in card.images"
                             :key="image.id"
                             :src="image.src"
                             :alt="image.alt"
                             :style="{maxWidth: card.vendorCode === 'KV3-250D' ? '55%' : '100%'}"
                        />
                    </div>
                    <div class="card__name">
                        {{ card.name }}
                    </div>
                    <div class="card__description">
                        {{ card.description }}
                    </div>
                </NuxtLink>
                <card-shop-price :price="card.price"/>
                <div @click="currentProductId = card.id">
                    <card-shop-buy @click="cartStore.openSlideover()"/>
                </div>
                <cart-shop-form
                        v-if="card"
                        :print="getCurrentProduct(printStore.prints, currentProductId)"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {usePrintStore} from "~/store/prints";
import CardShopPrice from "~/components/CardShop/CardShopPrice.vue";
import {useCartStore} from "~/store/cart";
import type {Print} from "~/types/print";

const printStore = usePrintStore();
const cartStore = useCartStore();
const currentProductId = ref<number>(0);

function getCurrentProduct(products: Print[], id: number): Print {
    return products.find(product => product.id === id)
}
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;

  &__description {
    font-family: $unboundedExtraLight;
    font-size: 18px;
  }

  &__name {
    margin-top: 20px;
    font-size: 24px;
    font-family: $unboundedRegular;
  }

  &__item {
    margin: 50px 10px;
    text-align: center;
  }

  &__buy {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    & button {
      width: 300px;
      border-radius: 10px;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
    }
  }

  &__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all $defaultTransitionDuration;

    & img {
      border-radius: 10px;
    }

    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>

