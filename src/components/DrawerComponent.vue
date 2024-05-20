<template>
  <div class="drawer" style="display: none">
    <div class="container">
      <div class="drawer__img"></div>
      <div class="drawer__cart">
        <h3 class="drawer__cart-title">Корзина</h3>
        <ul class="drawer__cart-list">
          <li v-for="item in cartItems" :key="item.id">
            <div class="list-item">
              <img class="list-item__img" :src="item.photoUrl" :alt="item.name" />
              <div class="list-item__title">{{ item.name }}</div>

              <div class="list-item__quantity">
                <button class="quantity__button-decrease">-</button>
                <input type="text" class="quantity__num" :value="counter" />
                <button class="quantity__button-increase">+</button>
              </div>
              <div class="list-item__price">{{ item.price }} ₽</div>
            </div>
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
          <button-component @click="addToCart(product)" class="drawer__cart-btn"
            >Заказать</button-component
          >
          <div class="total-price">{{ total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart.js'
import ButtonComponent from '@/components/ButtonComponent.vue'
const cartItems = useCartStore().cartItems

const counter = ref()
const total = ref()
counter.value = 1
total.value = 12000
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.container {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 0;
  width: 676px;
  //   height: 459px;
  height: auto;
  border-radius: 24px;
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
  background-color: rgba(0, 0, 0, 0.7);

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
  font-size: 16px;
}
.total-price {
  color: $purple;
  font-weight: 700;
}
</style>