<template>
    <div class="products">
        <SectionShop
                title="АВТОРСКИЕ ПРИНТЫ"
                description="Мои уникальные фото принты выского качества. Они станут отличным украшением для вашего дома."
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
import TodoService from "~/services/TodoService";
import type { Todo } from "~/types/todo";

async function getTodoData() {
    console.log('getTodo')
    const todo: Todo = await TodoService.getTodo(1);
    console.log(todo)
}

getTodoData()
</script>


