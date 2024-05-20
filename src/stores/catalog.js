import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCatalogStore = defineStore('catalog', () => {
  /* image: 'assets/img/cars/5.png',
      image: "assets/images/1.png",
      path: '/forecast/weather-svg/sun.svg' 
      pet-planet/assets/img/catalog/image1.png
    */
  const catalogItems = [
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
    },
    {
      id: 4,
      categories: 'Домики',
      name: 'Домик шар для питомцев',
      photoUrl: 'src/assets/img/catalog/image4.png',
      price: 4500
    },
    {
      id: 5,
      categories: 'Домики',
      name: 'Домик для собак',
      photoUrl: 'src/assets/img/catalog/image5.png',
      price: 6200
    },
    {
      id: 6,
      categories: 'Домики',
      name: 'Домик-конус для питомцев',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 5700
    },
    {
      id: 7,
      categories: 'Лежанки',
      name: 'Комфортная лежанка для кошек',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 2500
    },
    {
      id: 8,
      categories: 'Лежанки',
      name: 'Мягкая лежанка для собак',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 3200
    },
    {
      id: 9,
      categories: 'Лежанки',
      name: 'Лежанка с подогревом',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 4700
    },
    {
      id: 10,
      categories: 'Лежанки',
      name: 'Лежанка для кошек с игрушкой',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 2800
    },
    {
      id: 11,
      categories: 'Лежанки',
      name: 'Водонепроницаемая лежанка',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 3500
    },
    {
      id: 12,
      categories: 'Лежанки',
      name: 'Охлаждающая лежанка',
      photoUrl: 'src/assets/img/catalog/image6.png',
      price: 3000
    },
    {
      id: 13,
      categories: 'Игрушки',
      name: 'дразнилка "Мышка с хвостом из натуральной норки для кошек"',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/35/5c/5d/548501_325x400.jpg',
      price: 200
    },
    {
      id: 14,
      categories: 'Игрушки',
      name: 'игрушка для кошек Плетеный мячик с перьями',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/43/e8/cd/584596_325x400.jpg',
      price: 120
    },
    {
      id: 15,
      categories: 'Игрушки',
      name: 'Mягкая игрушка Акула',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/c2/f8/16/584617_325x400.jpg',
      price: 600
    },
    {
      id: 16,
      categories: 'Игрушки',
      name: 'Веревка с узлом',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/cf/6d/d1/584025_325x400.jpg',
      price: 300
    },
    {
      id: 17,
      categories: 'Игрушки',
      name: 'Кольцо',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/7e/41/7e/589246_325x400.jpg',
      price: 204
    },
    {
      id: 18,
      categories: 'Игрушки',
      name: 'Диск фрисби',
      photoUrl: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/21/af/0e/489632_325x400.jpg',
      price: 1228
    }
  ]

  // если товары тянутся с удаленного сервера
  const API_URL = 'https://sharp-torpid-prune.glitch.me'
  const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHERMAP

  const productList = ref([])
  const fetchProductByCategory = async (category) => {
    productList.value = []
    try {
      const response = await fetch(`${API_URL}/api/product/category/${category}`)
      const catalogItemsArray = await response.json()

      productList.value.push(catalogItemsArray)

      if (!response.ok) {
        throw new Error('response.status')
      }
    } catch (error) {
      console.error(`Ошибка запроса товаров: ${error}`)
    }
  }

  return { catalogItems, fetchProductByCategory }
})
