<script setup>
import { useProductsStore } from "~/stores/products";
import Button from "~/components/_base/Button/Button.vue";

import { ref, computed, onMounted } from "vue";

const products = ref([]);
const filteredProducts = ref([]);
const isLoading = ref(true);

const inputValue = ref("");

const productsStore = useProductsStore();
productsStore.loadProducts();

// Объект монтируется
onMounted(() => {
  productsStore.loadProducts();

  // Преобразуем прокси-массив в массив обычных объектов
  const productsArr = Array.from(productsStore.products).map((obj) =>
    Object.assign({}, obj)
  );

  products.value = filteredProducts.value = productsArr;
  isLoading.value = false;
});

const filterProducts = (key, value) => {
  if (value.replace(/\s+/g, "") === "" || !value) {
    filteredProducts.value = products.value;
    return;
  }

  filteredProducts.value = products.value.filter(
    (obj) => Number(obj[key]) === Number(value)
  );
};

// const products = computed(() => productsStore.products);
</script>

<template>
  <NuxtLayout :title="'Питомцы'">
    <main>
      <div v-if="isLoading">Загружаем данные о питомцах...</div>

      <div class="products-tile" v-else>
        <div class="products-list grid">
          <ProductCard
            v-for="item in filteredProducts"
            :key="item.name"
            :cardClass="'col-6 col-md-4 col-lg-3'"
            :photoUrl="item.url"
            :name="item.name"
            :status="item.status"
            :age="item.age"
          />
        </div>

        <form>
          <label>Введите желаемый возраст питомца</label>
          <input type="text" maxlength="3" v-model="inputValue" />
          <label>Возраст питомца: {{ inputValue }} лет</label>

          <Button
            :label="'Искать'"
            :btnStyle="'primary'"
            :type="'button'"
            :click="
              (event) => {
                event.preventDefault();
                filterProducts('age', inputValue);
              }
            "
          />
        </form>
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="scss">
@use '/assets/styles/mixins/flexbox' as *;

form {
  @include flexbox(initial, initial, column, 20px);
  margin-top: 40px;
}
</style>
