<template>
  <li class="store__list-item">
    <article class="store__product product">
      <img :src="product.path" :alt="product.title" class="product__image" />
      <h3 class="product__title">{{ product.title }}</h3>
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
.store__list-item {
  padding: 0 16px 16px 16px;
  width: 420px;
  height: 499px;
  border-radius: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 28px;

    text-align: center;
  }
  &__price {
    font-size: 24px;
  }
}
button {
  width: 100%;
  margin-top: 16px;
}
</style>