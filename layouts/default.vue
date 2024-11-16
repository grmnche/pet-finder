<script>
import TheFooter from "~/components/_the/TheFooter/TheFooter.vue";
import TheHeader from "~/components/_the/TheHeader/TheHeader.vue";

export default {
  props: {
    title: {
      type: String,
      default: "Заголовок по умолчанию",
    },
  },
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>

<template>
  <div class="default-layout">
    <TheHeader />

    <h1 class="default-layout__title">{{ title }}</h1>

    <NuxtPage />
    <slot />
  </div>
</template>

<style lang="scss">
.default-layout {
  position: relative;
  width: 100%;
  max-width: 1320px;
  min-width: 320px;
  padding: 0 20px;
  margin: 100px auto;
}
</style>
