<template>
  <section class="advantages">
    <div class="advantages__bg">
      <div class="container">
        <h2 class="advantages__title">Наши преимущества</h2>

        <ul class="advantages__list">
          <li
            class="advantages__item"
            :class="advantage.style"
            v-for="advantage in advantages"
            :key="advantage"
          >
            <h3 class="advantages__subtitle">{{ advantage.title }}</h3>
            <p class="advantages__text">
              {{ advantage.text }}
            </p>
          </li>
        </ul>
      </div>

      <div class="advantages__count-box">
        <p class="advantages__count">10</p>
        <p class="advantages__count-text">магазинов в&nbsp;сети</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Широкий ассортимент',
    text: 'У нас есть все для того, чтобы сделать жизнь вашего любимца комфортной и уютной.',
    style: 'advantages__item_assortment'
  },
  {
    title: 'Качество и безопасность',
    text: 'Мы тщательно отбираем товары для наших клиентов, уделяя особое внимание качеству и безопасности.',
    style: 'advantages__item_quality'
  },
  {
    title: 'Персональный подход',
    text: 'Мы понимаем, что каждый питомец уникален, поэтому предлагаем вам индивидуальные рекомендации по выбору товаров.',
    style: 'advantages__item_personal'
  }
]
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/media';
.advantages {
  position: relative;
  color: $light;

  &__bg {
    border-radius: 300px 300px 0 0;
    background-color: $carrot;
    background-image: url('@assets/img/pattern.svg');

    background-position: center;
    background-repeat: repeat;
    padding: 100px 0;

    @include laptop {
      padding: 80px 0;
      border-radius: 200px 200px 0 0;
    }

    @include tablet {
      border-radius: 120px 120px 0 0;
    }

    @include mobile {
      padding: 50px 0;
      border-radius: 80px 80px 0 0;
    }
  }

  &__title {
    font-size: 52px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 50px;

    @include laptop {
      font-size: 44px;
      margin-bottom: 32px;
    }

    @include mobile {
      max-width: 300px;
      margin: 0 auto;
      font-size: 30px;
      margin-bottom: 24px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @include laptop {
      gap: 20px;
    }

    @include tablet {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    @include mobile {
      gap: 32px;
    }
  }

  &__item {
    padding-top: 268px;
    background-size: 256px;
    background-position: top;
    background-repeat: no-repeat;

    @include laptop {
      padding-top: 172px;
      background-size: 160px;
    }

    @include mobile {
      padding-top: 86px;
      background-size: 80px;
    }
  }

  &__item_assortment {
    background-image: url('@/assets/img/assortment.png');
    background-image: image-set(
      url('@/assets/img/assortment.avif') type('image/avif') 1x,
      url('@/assets/img/assortment@2x.avif') type('image/avif') 2x,
      url('@assets/img/assortment.webp') type('image/webp') 1x,
      url('@/assets/img/assortment@2x.webp') type('image/webp') 2x,
      url('@/assets@assets/img/assortment.png') type('image/png') 1x,
      url('@/assets/img/assortment@2x.png') type('image/png') 2x
    );
  }

  &__item_quality {
    background-image: url('@/assets/img/quality.png');
    background-image: image-set(
      url('@/assets/img/quality.avif') type('image/avif') 1x,
      url('@/assets/img/quality@2x.avif') type('image/avif') 2x,
      url('@/assets/img/quality.webp') type('image/webp') 1x,
      url('@/assets/img/quality@2x.webp') type('image/webp') 2x,
      url('@/assets/img/quality.png') type('image/png') 1x,
      url('@/assets/img/quality@2x.png') type('image/png') 2x
    );
  }

  &__item_personal {
    background-image: url('@/assets/img/personal.png');
    background-image: image-set(
      url('@/assets/img/personal.avif') type('image/avif') 1x,
      url('@/assets/img/personal@2x.avif') type('image/avif') 2x,
      url('@/assets/img/personal.webp') type('image/webp') 1x,
      url('@/assets/img/personal@2x.webp') type('image/webp') 2x,
      url('@/assets/img/personal.png') type('image/png') 1x,
      url('@/assets/img/personal@2x.png') type('image/png') 2x
    );
  }

  &__subtitle {
    width: min-content;
    font-size: 28px;
    text-align: center;
    margin: 0 auto 12px;

    @include laptop {
      font-size: 24px;
    }

    @include mobile {
      font-size: 20px;
      margin-bottom: 4px;
    }
  }

  &__text {
    text-align: center;
  }

  &__count-box {
    position: absolute;
    top: -115px;
    left: 0;
    width: 306px;
    height: 306px;
    background-image: url('@/assets/img/star-green.svg');
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include bigscreen {
      left: calc(50% - 840px);
    }

    @include laptop {
      width: 257px;
      height: 257px;
      top: -102px;
    }

    @include tablet {
      width: 201px;
      height: 201px;
    }

    @include mobile {
      width: 140px;
      height: 140px;
      top: -73px;
    }
  }

  &__count {
    font-weight: 700;
    font-size: 52px;
    text-align: center;
    @include laptop {
      font-size: 44px;
    }

    @include tablet {
      font-size: 32px;
    }

    @include mobile {
      font-size: 20px;
    }
  }

  &__count-text {
    max-width: 122px;
    line-height: 1.2;
    text-align: center;
  }

  &::after {
    content: '';
    position: absolute;
    width: 396px;
    height: 682px;
    top: -338px;
    right: 0;
    background-image: url('@/assets/img/dog.png');
    background-image: image-set(
      url('@/assets/img/dog.avif') type('image/avif') 1x,
      url('@/assets/img/dog@2x.avif') type('image/avif') 2x,
      url('@/assets/img/dog.webp') type('image/webp') 1x,
      url('@/assets/img/dog@2x.webp') type('image/webp') 2x,
      url('@/assets/img/dog.png') type('image/png') 1x,
      url('@/assets/img/dog@2x.png') type('image/png') 2x
    );
    background-size: contain;
    z-index: -1;

    @include bigscreen {
      right: calc(50% - 840px);
    }

    @include laptop {
      width: 272px;
      height: 469px;
      top: -242px;
      right: 8px;
    }

    @include tablet {
      width: 202px;
      height: 348px;
      top: -176px;
      right: -25px;
    }

    @include mobile {
      width: 100px;
      height: 169px;
      right: 0;
      top: -82px;
    }
  }
}
</style>