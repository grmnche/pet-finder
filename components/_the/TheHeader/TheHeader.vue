<template>
  <nav class="navbar">
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/"
          >Питомцы</nuxt-link
        >
      </li>

      <li class="nav-item">
        <nuxt-link active-class="active" class="nav-link" to="/about">О нас</nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link active-class="active" class="nav-link" to="/users"
          >Пользователи</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style lang="scss">
@use '/assets/styles/mixins/flexbox' as *;
@use '/assets/styles/mixins/list-reset' as *;

nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  z-index: 100000;

  background: transparent;
}

nav ul {
  @include flexbox(initial, initial, row, 20px);
  @include list-reset;

  list-style: none;
  text-transform: lowercase;
}

a {
  padding: 6px 30px;
  border: 1px dotted var(--color-black-mute);
  border-radius: var(--border-radius);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

a.active {
  background-color: var(--color-black-mute);
  color: var(--color-text);
}
</style>
