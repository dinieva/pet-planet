import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  const changeQuantity = (id, minusOrPlus) => {
    let action = minusOrPlus == 'minus' ? 'minus' : 'plus'
    let currentItem = cartItems.value.find((item) => item.id === id)
    if (action == 'minus') {
      currentItem.quantity -= 1
      currentItem.price = currentItem.price * currentItem.quantity
      if (currentItem.quantity == 0) {
        cartItems.value = cartItems.value.filter((item) => item.id !== id)
      }

      console.log(cartItems.value)
    }
    if (action == 'plus') {
      currentItem.quantity += 1
      currentItem.price = currentItem.price * currentItem.quantity
      console.log(cartItems.value)
    }
  }

  return { cartItems, changeQuantity }
})
