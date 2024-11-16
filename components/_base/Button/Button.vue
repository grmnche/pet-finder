<script>
export default {
  props: {
    label: String,
    btnStyle: String,
    btnClass: String,
    btnType: String,
    click: Function,
  },
};
</script>

<template>
  <button :class="['btn', 'btn--' + btnStyle, btnClass]" @click="click" :type="btnType">
    {{ label }}
  </button>
</template>

<style lang="scss">
@use '/assets/styles/mixins/hover-active' as *;

button {
  border: none;
  border-radius: var(--border-radius);
  color: var(--color-white-soft);
  padding: 10px 30px;
  background-color: var(--color-primary-transparent);
  text-transform: lowercase;
  font-size: 16px;
  letter-spacing: 2px;

  transition: 0.2s;
  cursor: pointer;

  @include hover-active;

  &.btn--primary {
    background-color: var(--color-black-mute);
    color: var(--color-white-soft);
  }

  &.btn--secondary {
    background-color: var(--color-white-soft);
    color: var(--color-black-mute);
  }
}
</style>
