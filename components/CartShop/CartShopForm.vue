<template>
    <USlideover v-model="cartStore.isOpenSlideover">
        <div class="cart-form">
            <div class="cart-form_container">
                <div class="cart-form_header">
                    <h3>Ваш заказ</h3>
                    <div @click="cartStore.closeSlideover()">
                        <UIcon name="flowbite:close-outline" dynamic width="20" height="20"/>
                    </div>
                </div>
                <UDivider/>
                <div class="cart-form__product" v-if="props.print">
                    <div class="cart-form__product_left">
                        <div class="cart-form__product_img">
                            <img v-for="image in props.print.images"
                                 :key="image.id"
                                 :src="id ? `../${image.src}` : image.src"
                                 :alt="image.alt"
                            />
                        </div>
                        <div class="cart-form__product_description">
                            <h4>{{ props.print.name }}</h4>
                            <span>{{ props.print.vendorCode }}</span>
                        </div>
                    </div>
                    <div class="cart-form__product_right">
                        <div class="cart-form__product_plus">
                            <UIcon name="ei:plus" dynamic width="20" height="20" color="grey"/>
                        </div>
                        <div class="cart-form__product_amount">1</div>
                        <div class="cart-form__product_minus">
                            <UIcon name="ei:minus" dynamic width="20" height="20" color="grey"/>
                        </div>
                        <card-shop-price margin-top="0" font-size="16px" :price="props.print.price"/>
                        <div class="cart-form__product_delete">
                            <UIcon name="ei:close-o" dynamic width="20" height="20" color="grey"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </USlideover>
</template>

<script setup lang="ts">
import type {Print} from "~/types/print";
import type {PropType} from "vue";
import {useCartStore} from "~/store/cart";

const props = defineProps({
    print: {
        type: Object as PropType<Print>,
        required: true
    },
})

const cartStore = useCartStore();
const {id} = useRoute().params;

function setProductToStore() {
    if (props.print) {
        cartStore.product = props.print
    }
}

setProductToStore();
</script>

<style scoped lang="scss">
.cart-form {
  &_container {
    margin: 30px 20px;
  }

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;

    & h3 {
      font-size: 20px;
    }

    & div {
      padding: 10px;
      cursor: pointer;

      & svg {
        transition: all $defaultTransitionDuration;

        &:hover {
          color: $primaryColor;
        }
      }
    }
  }

  &__product {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    &_plus, &_minus, &_delete {
      cursor: pointer;
    }

    &_img {
      max-width: 90px;
      border-radius: 12px;
      overflow: hidden;
    }

    &_left, &_right {
      display: flex;
      align-items: center;
    }

    &_right {
      & div {
        margin: 0 4px;
      }
    }

    &_description {
      width: 135px;
      margin-left: 10px;
      line-height: 16px;

      & h4 {
        font-size: 15px;
      }

      & span {
        font-size: 11px;
        color: grey;
      }
    }
  }
}
</style>