<template>
  <section class="hero" :class="heroClass">
    <div class="container">
      <h2 class="visually-hidden">Товары для твоих любимцев</h2>
      <img
        class="hero__title"
        src="@/assets/img/tittle.svg"
        width="810"
        height="215"
        alt="Товары для твоих любимцев"
      />

      <p class="hero__text">Большой выбор домиков, лежанок и кормов для кошек и собак</p>

      <router-link to="/catalog" class="hero__store-link" :style="{ display: bool }"
        >Перейти в магазин</router-link
      >
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const heroClass = ref('')
const bool = ref('')

const props = defineProps({
  bgImagee: {
    type: Boolean
  }
})

heroClass.value = props.bgImagee === true ? 'hero' : 'hero_store'
bool.value = props.bgImagee === true ? 'flex' : 'none'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';

.hero {
  padding-top: 200px;
  color: $light;
  padding: 218px 0 245px;
  background-size: contain, auto;
  background-position: right bottom, center;
  background-repeat: no-repeat, repeat;
  background-image: url('@/assets/img/bg-dog.png'), url('@/assets/img/pattern.svg');
  background-color: $purple;
  @include bigscreen {
    background-image: url('@/assets/img/bg-dog-bigscreen.png'), url('@/assets/img/pattern.svg');
    background-position: left 48vw bottom 0, center;
    background-size: 1850px, auto;
  }

  @include laptop {
    background-image: url('@/assets/img/bg-dog-laptop.png'), url('@/assets/img/pattern.svg');
    padding: 148px 0 172px;
  }

  @include tablet {
    padding: 148px 0 461px;
    background-size: 655px 564px, cover;
    background-image: url('@/assets/img/bg-dog-tablet.png'), url('@/assets/img/pattern.svg');
  }

  @include mobile {
    padding: 100px 0 284px;
    background-size: 294px 261px, cover;
    background-image: url('@/assets/img/bg-dog-mobile.png'), url('@/assets/img/pattern.svg');
  }
  &_store {
    background-image: url('@/assets/img/cat-pic.png'), url('@/assets/img/pattern.svg');
    background-color: $green;
    background-size: 839px;

    @include laptop {
      background-size: 639px, auto;
    }

    @include tablet {
      background-size: 100%, auto;
    }
  }

  &__title {
    width: 810px;
    max-width: 100%;
    margin-bottom: 50px;

    @media (max-width: 1300px) {
      width: 660px;
    }

    @include laptop {
      width: 588px;
      margin-bottom: 32px;
    }

    @include mobile {
      margin-bottom: 16px;
    }
  }

  &__text {
    max-width: 420px;
    margin-bottom: 60px;

    &:nth-last-child(2) {
      margin-bottom: 0;
    }
    @include bigscreen {
      max-width: 540px;
    }
    @include laptop {
      max-width: 360px;
    }
    @include mobile {
      margin-bottom: 20px;
    }
  }
  &__store-link {
    border-radius: 40px;
    padding: 16px 24px;
    width: max-content;
    background-color: $green;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-weight: 700;
    text-align: center;
    outline: 1px solid transparent;
    transition-property: background-color, transform;
    transition-duration: 0.3s, 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
      background: #00772f;
      transform: scale(0.9);
    }
    &:focus-visible {
      outline-color: $carrot;
    }

    &:after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-image: url('@/assets/img/arrow-up.svg');
    }
    @include laptop {
      padding: 16px 36px;
    }
    @include mobile {
      padding: 11px 24px;
    }
  }
}
</style>