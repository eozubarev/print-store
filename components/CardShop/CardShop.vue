<template>
    <div class="card">
        <div class="card_container">
            <div class="card__item"
                 v-for="card in printStore.prints"
                 :key="card.id"
            >
                <NuxtLink :to="`/product/${card.id}`">
                    <div class="card__img">
                        <swiper :slides-p:er-view="1"
                                autoplay="autoplay"
                                :space-between="0"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                        >
                            <swiper-slide>
                                <NuxtImg v-for="image in card.images"
                                         :key="image.id"
                                         :src="image.src"
                                         :alt="image.alt"
                                         loading="lazy"
                                />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="card__name">
                        {{ card.name }}
                    </div>
                    <div class="card__description">
                        {{ card.description }}
                    </div>
                </NuxtLink>
                <card-shop-price :price="card.price"/>
                <card-shop-buy @click="isOpen = true"/>
            </div>
        </div>
        <USlideover v-model="isOpen">
            <div class="p-4 flex-1">
                Форма заказа
            </div>
        </USlideover>
    </div>
</template>
<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {usePrintStore} from "~/store/prints";
import CardShopPrice from "~/components/CardShop/CardShopPrice.vue";

const printStore = usePrintStore();

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const isOpen = ref(false)
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
    margin: 30px 10px;
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
    transition: all $defaultTransitionDuration;

    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>

