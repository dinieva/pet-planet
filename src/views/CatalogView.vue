<script setup>
import { ref, onMounted } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import Hero from '../components/sections/Hero.vue'
import CartItem from '../components/CartItem.vue'
import FooterComponent from '../components/FooterComponent.vue'
import DrawerComponent from '../components/DrawerComponent.vue'
import { useCatalogStore } from '../stores/catalog'
import { useCartStore } from '../stores/cart'

const categories = ['Домики', 'Лежанки', 'Игрушки', 'Корма']

const cartStore = useCartStore()
const catalogItems = ref()
catalogItems.value = useCatalogStore().catalogItems
// const catalogItems = useCatalogStore().catalogItems

const activeCategory = ref()
const openModalCart = ref()

openModalCart.value = false
onMounted(() => {
  activeCategory.value = 0
})

const selectItem = (idx, category) => {
  console.log(idx, category)
  catalogItems.value = useCatalogStore().catalogItems
  activeCategory.value = idx
  catalogItems.value = catalogItems.value.filter((item) => item.categories === category)
  return activeCategory.value
}
const closeOpenModalCart = () => {
  openModalCart.value = false
}
</script>
<template>
  <DrawerComponent :openModalCart="openModalCart" @closeOpenModalCart="closeOpenModalCart" />
  <HeaderComponent />

  <main>
    <h1 class="visually-hidden">Pet Planet - магазин товаров для животных</h1>
    <Hero :bgImagee="false" />
    <section class="store">
      <div class="container">
        <div class="store__header">
          <ul class="store__categories">
            <li
              class="store__category-item"
              v-for="(category, index) in categories"
              :key="category"
              @click="selectItem(index, category)"
            >
              <button
                :class="[
                  'store__category-button',
                  { 'store__category-button_active': index === activeCategory }
                ]"
              >
                {{ category }}
              </button>
            </li>
          </ul>

          <button class="store__cart-button" @click="openModalCart = true">
            <span class="store__cart-count">{{ cartStore.cartItems.length }}</span>
            <svg
              class="store__cart-icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="openModalCart = true"
            >
              <circle cx="18" cy="14" r="2" fill="#E47537" />
              <circle cx="10" cy="14" r="2" fill="#E47537" />
              <path
                d="M23.2867 10.4534C22.505 9.59003 21.3267 9.08836 19.6934 8.91336V8.02669C19.6934 6.42836 19.0167 4.88836 17.8267 3.81503C16.625 2.71836 15.0617 2.20503 13.44 2.35669C10.6517 2.62503 8.3067 5.32003 8.3067 8.23669V8.91336C6.67336 9.08836 5.49503 9.59003 4.71336 10.4534C3.5817 11.7134 3.6167 13.3934 3.74503 14.56L4.5617 21.0584C4.8067 23.3334 5.72836 25.6667 10.745 25.6667H17.255C22.2717 25.6667 23.1934 23.3334 23.4384 21.07L24.255 14.5484C24.3834 13.3934 24.4067 11.7134 23.2867 10.4534ZM13.6034 3.97836C14.77 3.87336 15.8784 4.23503 16.7417 5.01669C17.5934 5.78669 18.0717 6.88336 18.0717 8.02669V8.84336H9.92836V8.23669C9.92836 6.16003 11.6434 4.16503 13.6034 3.97836ZM9.82336 15.3417H9.8117C9.17003 15.3417 8.64503 14.8167 8.64503 14.175C8.64503 13.5334 9.17003 13.0084 9.8117 13.0084C10.465 13.0084 10.99 13.5334 10.99 14.175C10.99 14.8167 10.465 15.3417 9.82336 15.3417ZM17.99 15.3417H17.9784C17.3367 15.3417 16.8117 14.8167 16.8117 14.175C16.8117 13.5334 17.3367 13.0084 17.9784 13.0084C18.6317 13.0084 19.1567 13.5334 19.1567 14.175C19.1567 14.8167 18.6317 15.3417 17.99 15.3417Z"
                fill="#E47537"
              />
            </svg>
          </button>
        </div>

        <h2 class="store__title">Каталог</h2>
        <ul class="store__list">
          <div v-for="product in catalogItems" :key="product">
            <CartItem :product="product" v-if="product.categories === categories[activeCategory]" />
          </div>
        </ul>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>



<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';
.store {
  background-color: $light;
  padding-top: 120px;
  padding-bottom: 120px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  &__categories {
    display: flex;
    gap: 28px;
    position: relative;
    flex-wrap: wrap;
  }
  &__category-button {
    font-size: 24px;
    color: $carrot;
    padding-bottom: 10px;
    &_active {
      color: $green;
      border-bottom: 1px solid $green;
    }
  }
  &__title {
    margin-bottom: 32px;
    font-size: 52px;
    font-weight: 700;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 420px);
    justify-content: center;
    gap: 20px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__cart-button {
    position: relative;
    display: block;
    width: 28px;
    height: 28px;
  }

  &__cart-count {
    position: relative;
    top: 3px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: $light;
    z-index: 2;
  }
  &__cart-icon {
    position: absolute;
    inset: 0; //занимает все пространство
    z-index: 1;
  }
}
</style>

