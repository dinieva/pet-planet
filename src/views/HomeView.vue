<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Advantages from '../components/sections/Advantages.vue'
import Subscribe from '../components/sections/Subscribe.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main>
    <h1 class="visually-hidden">Pet Planet - магазин товаров для животных</h1>

    <Hero :bgImagee="true" />
    <About />
    <Advantages />
    <Subscribe />
  </main>
  <FooterComponent />
</template>
