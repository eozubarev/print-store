<template>
    <div class="delivery">
        <div class="delivery_container">
            <h2>Доставка</h2>
            <div class="delivery__info">
                <div class="delivery__info-row">
                    <div class="delivery__left">
                        <h5>Курьерские службы</h5>
                        <p>По Москве — СДЕК</p>
                        <p>По России — СДЕК, Почта России</p>
                        <p>В другую страну — индивидуально</p>
                    </div>
                    <div class="delivery__right">
                        <h5>Стоимость</h5>
                        <p>Бесплатно — при заказе от 7000 ₽</p>
                        <p>По тарифам ТК — при заказе до 7000 ₽</p>
                        <p>По тарифам ТК</p>
                    </div>
                </div>
            </div>
            <div class="delivery__additional">
                <p>Предпочитаю отправлять все заказы СДЭК-ом с курьером прямо до Вашей двери.</p>
                <p>Я работаю с 9 утра до 5 вечера по Москве. Все заказы, сделанные до 9 утра сегодня, я обработаю в этот промежуток, а заказы, сделанные после 9 утра обработаю на следующий рабочий день.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.delivery {
  &_container {
    h2 {
      font-size: 60px;
      color: $primaryColor;
      font-family: $unboundedRegular;
    }
  }

  &__info {
    max-width: 950px;
    margin-top: 55px;

    &-row {
      display: flex;
      justify-content: space-between;
    }
  }

  &__left, &__right {
    & h5 {
      font-weight: 600;
      color: $primaryColor;
      margin-bottom: 15px;
      font-size: 30px;
    }

    & p {
      font-size: 24px;
    }
  }

  &__additional {
    margin-top: 65px;
    & p {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }
}
</style>