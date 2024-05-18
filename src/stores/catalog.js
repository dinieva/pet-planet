import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', () => {
  const homeCatalog = [
    /* image: 'assets/img/cars/5.png',
      image: "assets/images/1.png",
    */
    {
      title: 'Скандинавский домик для собаки',
      path: 'src/assets/img/catalog/image1.png',
      price: 5400
    },
    {
      title: 'Домик со съемной крышей',
      path: 'src/assets/img/catalog/image2.png',
      price: 7200
    },
    {
      title: 'Домик для кошки с когтеточкой',
      path: 'src/assets/img/catalog/image3.png',
      price: 3800
    },
    {
      title: 'Домик шар для питомцев',
      path: 'src/assets/img/catalog/image4.png',
      price: 4500
    },
    {
      title: 'Домик для собак',
      path: 'src/assets/img/catalog/image5.png',
      price: 6200
    },
    {
      title: 'Домик-конус для питомцев',
      path: 'src/assets/img/catalog/image6.png',
      price: 5700
    }
  ]

  return { homeCatalog }
})
