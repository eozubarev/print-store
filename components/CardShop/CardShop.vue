<template>
    <div class="card">
        <div class="card_container">
            <div class="card__item" v-for="card in cards" :key="card.id">
                <div class="card__img">
                    <swiper :slides-p:er-view="1"
                            autoplay="autoplay"
                            :space-between="0"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                    >
                        <swiper-slide>
                            <NuxtImg :src="card.img.src"
                                     :alt="card.img.alt"
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
                <div class="card__price">
                    {{ Math.trunc(card.price).toLocaleString('ru-RU') }} ₽
                </div>
                <div class="card__buy" :data-card-id="card.id">
                    <UButton
                            color="white"
                            variant="solid"
                            size="xl"
                            @click="isOpen = true"
                    >Купить
                    </UButton>
                </div>
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

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const isOpen = ref(false)

interface card {
    id: number;
    name: string;
    description: string;
    price: number;
    img: {
        src: string;
        alt?: string;
    }
}

const cards: card[] = [
    {
        id: 1,
        name: 'Оля Астер',
        description: 'Потрет Оли на матовом покрытии',
        price: 15_000,
        img: {
            src: '/images/1.JPG',
            alt: 'Потрет Оли'
        }
    },
    {
        id: 2,
        name: 'Таня Асмодеус',
        description: 'Потрет Тани на матовом покрытии',
        price: 15_000,
        img: {
            src: '/images/2.JPG',
            alt: 'Потрет Тани'
        }
    },
    {
        id: 3,
        name: 'Даша',
        description: 'Потрет Дани на матовом покрытии',
        price: 15_000,
        img: {
            src: '/images/3.JPG',
            alt: 'Потрет Даши'
        }
    }
]
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

  &__price {
    margin-top: 13px;
    color: $primaryColor;
    font-size: 19px;
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
}
</style>

