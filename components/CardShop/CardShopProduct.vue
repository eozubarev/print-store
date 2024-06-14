<template>
    <div class="print-product">
        <div class="print-product_container">
            <div v-if="printCard" class="print-product__item">
                <div class="print-product__image">
                    <img v-for="image in printCard.images"
                         :key="image.id"
                         :src="`../${image.src}`"
                         :alt="image.alt"
                    />
                </div>
                <div class="print-product__about">
                    <h3>{{ printCard.name }}</h3>
                    <span>Артикул: {{ printCard.vendorCode }}</span>
                    <card-shop-price :price="printCard.price"/>
                    <!--                    <card-shop-buy @click="cartStore.openSlideover()"/>-->
                    <a class="print-product__link" href="https://t.me/m/V3-hV-_dMzVi" target="_blank">
                        <card-shop-buy/>
                    </a>
                    <br>
                    <br>
                    <template v-if="printCard.vendorCode !== 'KV3-250D'">
                        <p>Технические характеристики бумаги:</p>
                        <p><span>Производитель:</span> Fujifilm</p>
                        <p><span>Тип покрытия:</span> Матовое</p>
                        <p><span>Текстура:</span> Легкая</p>
                        <p><span>Цвет:</span> Натуральный белый</p>
                        <p><span>Тип чернил:</span> Пигментные чернила</p>
                        <p><span>Размер принта:</span> {{ printCard.size }}</p>
                        <br>
                        <ul>
<!--                            <li>• Автограф от Евгения Зубарева</li>-->
                            <li>• Бесплатная доставка по Москве до двери</li>
                            <li>• Доставка по России от 2 до 7 дней до пункта СДЭК</li>
                        </ul>
                    </template>
                    <template v-else>
                        <p>Технические характеристики пленки:</p>
                        <p><span>Тип пленки:</span> Цветная негативная</p>
                        <p><span>Производитель:</span> Kodak</p>
                        <p><span>Процесс проявки:</span> ECN-II</p>
                        <p><span>Кол-во кадров:</span> 36</p>
                        <p><span>Размер:</span> {{ printCard.size }}</p>
                        <p><span>ISO:</span> 200</p>
                        <br>
                        <ul>
                            <li>• Авторская открытка с автограф от Евгения Зубарева</li>
                            <li>• Бесплатная доставка по Москве до двери</li>
                            <li>• Доставка по России от 2 до 7 дней до пункта СДЭК</li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
        <cart-shop-form v-if="printCard" :print="printCard"/>
    </div>
</template>

<script setup lang="ts">
import {usePrintStore} from "~/store/prints";
import {useCartStore} from "~/store/cart";

const {id} = useRoute().params;
const printsStore = usePrintStore();
const printCard = printsStore.getPrintCard(Number(id))
const cartStore = useCartStore();
</script>

<style scoped lang="scss">
.print-product {
  &__item {
    display: flex;

    @media all and (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__image {
    max-width: 750px;
    margin-right: 30px;

    & img {
      border-radius: 10px;
    }
  }

  &__about {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a > button {
      pointer-events: auto;
    }

    @media all and (max-width: 767px) {
      align-items: center;
    }

    & h3 {
      font-size: 24px;
    }

    & span {
      font-size: 14px;
      color: grey;
    }

    & p {
      line-height: 33px;
    }

    & ul {
      font-size: 14px;
      padding: 15px;
      border: 1px dashed #cfcaca;
      border-radius: 21px;
    }
  }
}
</style>