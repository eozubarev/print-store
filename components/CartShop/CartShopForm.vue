<template>
    <div class="cart-form">
        <div class="cart-form_container">
            <h3>Ваш заказ</h3>
            <UDivider/>
            <div class="cart-form__product" v-if="props.print">
                <div class="cart-form__product_left">
                    <div class="cart-form__product_img">
                        <img v-for="image in props.print.images"
                                 :key="image.id"
                                 :src="image.src"
                                 :alt="image.alt"
                        />
                    </div>
                    <div class="cart-form__product_description">
                        <h4>{{ props.print.name }}</h4>
                        <span>{{ props.print.vendorCode }}</span>
                    </div>
                </div>
                <div class="cart-form__product_right">
                    <div class="plus">+</div>
                    <div class="div">1</div>
                    <div class="plus">+</div>
                    <card-shop-price :price="props.print.price"/>
                    <div class="cancel">X</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cart-form {
  &_container {
    margin: 30px 20px;

    & h3 {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }

  &__product {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    &_img {
      max-width: 120px;
      border-radius: 12px;
      overflow: hidden;
    }

    &_left, &_right {
      display: flex;
      align-items: center;
    }

    &_description {
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

<script setup lang="ts">
import type {Print} from "~/types/print";
import type {PropType} from "vue";

const props = defineProps({
    print: {
        type: Object as PropType<Print>,
        required: true
    },
})
</script>