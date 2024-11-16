import { defineStore } from 'pinia';
import { useFetch } from '#app';

export const useProductsStore = defineStore('products', () => {
  const products: any = ref([]);

  async function loadProducts() {
    const { data, error } = await useFetch(
      'http://localhost:3001/api/products',
    );

    if (error.value) {
      console.error('Error loading products:', error.value);
      return;
    }

    products.value = data.value;
  }

  return { products, loadProducts };
});
