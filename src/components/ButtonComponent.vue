<template>
  <button class="subscribe__button button" type="submit">
    <span class="subscribe__button-text button-text"><slot></slot></span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';
.button {
  background-color: $purple;
  border: 1px solid transparent;
  border-radius: 40px;
  padding: 16px 31px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  color: $light;
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px; */
  min-width: 209px;
  transition-property: background-color, font-size;
  transition-duration: 0.3s, 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    background: #971dcf;
    font-size: 18px;
  }
  @include mobile {
    padding: 0;
    min-width: 54px;
  }
}
</style>