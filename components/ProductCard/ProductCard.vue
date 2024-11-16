<template>
  <a href="#" :class="['product-card', cardClass]">
    <Img
      class="product-card__preview"
      :src="photoUrl ? photoUrl : '../img/pug.jpg'"
      :alt="name"
    />

    <h4 class="product-card__title">{{ name }}</h4>

    <p class="product-card__status">{{ status }}</p>

    <p class="product-card__age">Возраст: {{ age }}</p>
  </a>
</template>

<script>
import Img from "../_base/Img/Img.vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: false,
    },
    cardClass: {
      type: String,
      required: false,
    },
  },
  components: {
    Img,
  },
};
</script>

<style lang="scss">
@use '/assets/styles/mixins/flexbox' as *;

.product-card {
  @include flexbox(center, center, column, 20px);

  max-width: 300px;
  box-shadow: -10px 10px 10px var(--light-1);
  padding: 20px;
  border-radius: var(--border-radius);
  border: none;

  &__title {
    font-size: clamp(20px, 2vw, 30px);
    text-transform: uppercase;
  }

  &__status {
    font-size: clamp(10px, 2vw, 20px);
    color: var(--color-green);
  }

  &__preview {
    margin-inline: auto;
    border-radius: var(--border-radius);
  }
}
</style>
