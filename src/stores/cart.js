import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  cartItems.value = [
    {
      id: 1,
      categories: 'Домики',
      name: 'Скандинавский домик для собаки',
      photoUrl: 'src/assets/img/catalog/image1.png',
      price: 5400
    },
    {
      id: 2,
      categories: 'Домики',
      name: 'Домик со съемной крышей',
      photoUrl: 'src/assets/img/catalog/image2.png',
      price: 7200
    },
    {
      id: 3,
      categories: 'Домики',
      name: 'Домик для кошки с когтеточкой Домик для кошки с когтеточкой',
      photoUrl: 'src/assets/img/catalog/image3.png',
      price: 3800
    }
  ]
  return { cartItems }
})
