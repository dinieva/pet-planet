import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const numberOfAllCartProd = ref(0)

  // изменить количество товара в корзине
  const changeQuantity = (id, minusOrPlus) => {
    let action = minusOrPlus == 'minus' ? 'minus' : 'plus'
    let currentItem = cartItems.value.find((item) => item.id === id)
    if (action == 'minus') {
      currentItem.quantity -= 1
      allCartItems()
      if (currentItem.quantity == 0) {
        cartItems.value = cartItems.value.filter((item) => item.id !== id)
      }
    }
    if (action == 'plus') {
      currentItem.quantity += 1
      allCartItems()
    }
  }
  // проверка наличия товара в корзине
  let checkObjInList = (newObj) => {
    let isObjInList = cartItems.value.find((el) => el.id === newObj.id)
    if (!isObjInList) {
      cartItems.value.push(newObj)
      allCartItems()
    } else {
      let idx = cartItems.value.findIndex((item) => item.id === newObj.id)
      cartItems.value[idx].quantity += 1
      allCartItems()
    }
  }
  // сумма всех товаров в корзине
  const allCartItems = () => {
    let allQuantityes = []
    cartItems.value.forEach((item) => allQuantityes.push(item.quantity))
    numberOfAllCartProd.value = allQuantityes.reduce((sum, price) => sum + price, 0)
    return numberOfAllCartProd.value
  }
  // добавить товар в корзину
  const addToCart = (item) => {
    let objForCart = {
      ...item,
      quantity: 1,
      totalPrice() {
        return this.price * this.quantity
      }
    }
    checkObjInList(objForCart)
  }
  return { cartItems, numberOfAllCartProd, changeQuantity, allCartItems, addToCart }
})
