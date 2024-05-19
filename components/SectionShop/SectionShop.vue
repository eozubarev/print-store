<template>
    <div class="section-shop">
        <div class="section-shop_description">
            <div class="section-shop_title">
                {{ props.title }}
            </div>
            <div class="section-shop_subtitle">
                {{ props.description }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: String
})
</script>

<style scoped lang="scss">
.section-shop {
  &_title {
    font-size: 110px;
    font-family: $soyuzGrotesk;
    letter-spacing: 5px;
  }

  &_subtitle {
    font-size: 29px;
    padding: 0 60px;
    font-family: $unboundedExtraLight;
  }

  &_description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      background: $primaryColor;
      width: 315px;
      height: 315px;
      border-radius: 100%;
      align-self: center;
      animation: resizes 8s ease-in-out infinite alternate;
      z-index: -1;
    }

    @keyframes resizes {
      0% {
        margin-left: 0;
        margin-top: 0;
      }
      25% {
        margin-left: -30vw;
        margin-top: -10vh;
      }
      50% {
        margin-left: -15vw;
        margin-top: -15vh;
      }
      60% {
        margin-left: 5vw;
        margin-top: -5vh;
      }
      75% {
        margin-left: 30vw;
        margin-top: 20vh;
      }
      100% {
        margin-left: 40vw;
        margin-top: -5vh;
      }
    }
  }
}

</style>