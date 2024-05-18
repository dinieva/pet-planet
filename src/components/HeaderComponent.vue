<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <img
          class="header__logo"
          src="../assets/img/logo.svg"
          alt="Логотип с лапой магазина PetPlanet"
        />
      </router-link>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 50;

  @media (max-width: 1140px) {
    top: 40px;
  }

  @media (max-width: 940px) {
    top: 32px;
  }

  @media (max-width: 520px) {
    top: 22px;
  }

  &__logo {
    width: 331px;
    @media (max-width: 940px) {
      width: 200px;
    }
  }
}
</style>