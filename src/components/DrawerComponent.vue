<template>
  <div class="drawer" v-if="openModalCart">
    <div class="overlay" @click="$emit('closeOpenModalCart', false)"></div>
    <div class="container">
      <div class="drawer__img"></div>
      <div class="drawer__cart">
        <h3 class="drawer__cart-title">Корзина</h3>

        <div class="empty-cart" v-if="cartItems.length == 0">
          <div class="empty-cart-img">
            <p>Добавьте что-нибудь в корзину</p>
          </div>
        </div>
        <ul class="drawer__cart-list">
          <li v-for="product in cartItems" :key="product.id">
            <div class="list-item">
              <img class="list-item__img" :src="product.photoUrl" :alt="product.name" />
              <div class="list-item__title">{{ product.name }}</div>

              <div class="list-item__quantity">
                <button
                  class="quantity__button-decrease"
                  @click="useCartStore().changeQuantity(product.id, 'minus')"
                >
                  -
                </button>
                <input type="text" class="quantity__num" :value="product.quantity" readonly />
                <button
                  class="quantity__button-increase"
                  @click="useCartStore().changeQuantity(product.id, 'plus')"
                >
                  +</button
                ><!-- @click="changeAmount(item.quantity, 'plus')" -->
              </div>
              <div class="list-item__price">{{ product.totalPrice() }} ₽</div>
            </div>
            <!-- {{ product.price * product.quantity }} -->
          </li>
        </ul>
        <div class="pickup">
          <h3 class="drawer__pickup-title">Самовывоз из магазина:</h3>
          <ul>
            <li>
              <label for="address1">ул. Адамавая 45/1</label>
              <input type="radio" name="pickup" id="address1" value="ул. Адамавая 45/1" />
            </li>
            <li>
              <label for="address2">ул. Вишневая 74</label
              ><input type="radio" name="pickup" id="address2" value="ул. Вишневая 74" />
            </li>
            <li>
              <label for="address3">ул. Чехова 106/28</label
              ><input type="radio" name="pickup" id="address3" value="ул. Чехова 106/28" />
            </li>
          </ul>
        </div>

        <div class="cart-bottom">
          <button-component @click="sendOder(cartItems)" class="drawer__cart-btn"
            >Заказать</button-component
          >
          <div class="total-price">{{ total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useCartStore } from '../stores/cart.js'
import ButtonComponent from '@/components/ButtonComponent.vue'

const cartItems = ref()
cartItems.value = useCartStore().cartItems

const total = ref()
const allPrices = ref([])

total.value = computed(() => {
  allPrices.value = []
  cartItems.value.forEach((item) => allPrices.value.push(item.totalPrice()))
  return allPrices.value.reduce((sum, price) => sum + price, 0)
})

const props = defineProps({
  openModalCart: {
    type: Boolean,
    required: true
  }
})

defineEmits(['closeOpenModalCart'])

const sendOder = (item) => {
  alert('Спасибо за заказ! ')
  console.log('Ваш заказ:', item)
}

watchEffect(() => (cartItems.value = useCartStore().cartItems))
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.container {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 0;
  width: 676px;
  //   height: 459px;
  height: auto;
  border-radius: 24px;
  z-index: 52;
  @include tablet {
    grid-template-columns: 1fr;
  }
  @include mobile {
    grid-template-columns: 1fr;
  }
}
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 51;
  display: flex;
  align-items: center;

  &__img {
    background: url('@/assets/img/cart-image.jpg') left center/cover no-repeat;
    border-radius: 24px 0 0 24px;
    /* width: 100%;
    height: 100%; */
  }
  &__cart {
    padding: 24px;
    &-title {
      font-size: 24px;
      font-weight: 400;
    }
    &-list {
      font-size: 16px;
    }
    &-btn {
      height: 46px;
      font-size: 16px;
      padding: 0;
      min-width: 0;
      width: 121px;
    }
  }
}

.list-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  font-size: 16px;
  margin-bottom: 20px;
  align-items: center;
  &__img {
    grid-area: 1 / 1 / 3 / 2;
    width: 54px;
    height: 54px;
    border-radius: 8px;
    object-fit: contain;
  }
  &__quantity {
    grid-area: 2 / 2 / 3 / 3;
  }
  &__price {
    grid-area: 2 / 3 / 3 / 4;
    font-size: 16px;
  }
  &__title {
    grid-area: 1 / 2 / 2 / 4;
    font-size: 16px;
  }
}
.quantity__button-decrease,
.quantity__button-increase,
.quantity__num {
  width: 24px;
  height: 24px;
  font-size: 16px;
  color: $green;
  border-radius: 6px;
  border: 1px solid $green;
}
.quantity__num {
  border: none;
  background-color: transparent;
  text-align: center;
}

.pickup {
  font-size: 16px;
  margin-bottom: 20px;
}
input,
label {
  cursor: pointer;
}
li {
  display: flex;
  justify-content: space-between;
}
#address1,
#address2,
#address3 {
  accent-color: $green;
}
.cart-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.total-price {
  color: $purple;
  font-weight: 700;
}
.empty-cart {
  text-align: center;
  margin: 0 auto;
  color: #8f8d8d;
  font-size: 18px;
  &-img {
    background: url('@/assets/img/empty-cart-fish-bone.svg') no-repeat;
    background-size: 50%;
    background-position: center top;
    width: 100%;
    height: 200px;
    opacity: 0.7;
    position: relative;
    & p {
      position: absolute;
      bottom: 20%;
    }
  }
}
</style>