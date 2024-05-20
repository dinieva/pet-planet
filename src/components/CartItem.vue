<template>
  <li class="store__list-item">
    <article class="store__product product">
      <img :src="product.photoUrl" :alt="product.name" class="product__image" />
      <h3 class="product__title">{{ product.name }}</h3>
      <p class="product__price">{{ product.price }} ₽</p>
      <button-component @click="addToCart(product)">Заказать</button-component>
    </article>
  </li>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const addToCart = (item) => {
  cartStore.cartItems.push(item)
  console.log(item)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';
.store__list-item {
  display: flex;
  // flex-grow: 1;
}
.product {
  padding: 0 16px 16px 16px;
  // max-width: 420px;
  width: 100%;
  min-height: 499px;
  border-radius: 24px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include tablet {
    min-height: 460px;
  }
  @include mobile {
    min-height: 430px;
  }

  &__image {
    width: 264px;
    max-height: 261px;
    margin-bottom: 16px;
  }
  &__title {
    padding: 0 10px;
    font-size: 28px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 4px;
    flex-grow: 1;

    @include tablet {
      font-size: 24px;
    }
    @include mobile {
      font-size: 20px;
    }
  }
  &__price {
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
}
button {
  width: 100%;
  margin-top: 16px;
  padding: 16px 24px;
}
/* button:has(.button-text) {
  @include mobile {
    position: fixed;
    transform: scale(0);
  }
} */
</style>