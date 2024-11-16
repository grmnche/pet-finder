<template>
  <img
    :src="src"
    :class="['base-img', imgClass]"
    :alt="imgAlt ? imgAlt : 'Изображение'"
    />
</template>

<script>
export default {
  name: "base-img",
  props: {
    src: {
      type: String,
      required: true,
    },
    imgClass: {
      type: String,
      required: false,
    },
    imgAlt: {
      type: String,
      required: false,
    }
  },
};
</script>

<style lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
