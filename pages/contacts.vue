<template>
    <div class="delivery">
        <div class="delivery_container">
            <h2>Контакты</h2>
            <div class="delivery__info">
                <div class="delivery__info-row">
                    <div class="delivery__left">
                        <h5>Социальные сети</h5>
                        <p>Мой телеграм: <a target="_blank" href="https://t.me/morskoycat">https://t.me/morskoycat</a></p>
                        <p>Мой инстаграм: <a target="_blank" href="https://instagram.com/morskoy_cat">https://instagram.com/morskoy_cat</a></p>
                    </div>
                    <div class="delivery__right">
                        <h5>Телефон и почта</h5>
                        <p>Мой почта: <a target="_blank" href="mailto:ahotickkk@mail.ru">ahotickkk@mail.ru</a></p>
                        <p>Мой рабочий телефон: <a target="_blank" href="tel:+79932478968">+7-993-247-8968</a></p>
                    </div>
                </div>
            </div>
            <div class="delivery__additional">
                <p>Я отвечаю на звонки на телефон с 9 утра до 5 вечера по Москве.</p>
                <p>Вы можете написать мне в любое время в телеграм или инстаграм :)</p>
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
      font-size: 20px;
      & a {
        color: $primaryColor;
        text-decoration: underline;
      }
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