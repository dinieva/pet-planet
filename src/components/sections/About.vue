<template>
  <section class="about">
    <div class="container">
      <h2 class="about__title">О&nbsp;нас</h2>

      <div class="about__box">
        <div class="about__content">
          <p class="about__text">
            Мы&nbsp;&mdash; команда любящих и&nbsp;заботливых владельцев животных, которые
            с&nbsp;особым вниманием относятся к&nbsp;потребностям и&nbsp;радостям наших пушистых
            друзей.
          </p>
          <p class="about__text">
            Стремясь к&nbsp;тому, чтобы ваш питомец был здоровым, счастливым и&nbsp;полным энергии,
            мы&nbsp;предлагаем только лучшие товары и&nbsp;услуги, проверенные временем
            и&nbsp;рекомендованные ветеринарами.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';

.about {
  padding: 120px 0 278px;

  @include laptop {
    padding: 100px 0 255px;
  }

  @include tablet {
    padding: 100px 0 181px;
  }

  @include mobile {
    padding: 80px 0 122px;
  }

  &__title {
    font-weight: 700;
    font-size: 52px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 32px;

    @include laptop {
      font-size: 44px;
      margin-bottom: 18px;
    }

    @include mobile {
      font-size: 30px;
      margin-bottom: 16px;
    }
  }

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @include tablet {
      flex-direction: column;
    }

    &::before {
      content: '';
      display: block;
      transform: translateY(-18px);
      flex-basis: 50%;
      height: 496px;
      background-image: url('@/assets/img/cat.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @include laptop {
        transform: translateY(-14px);
        height: 319px;
      }

      @include tablet {
        transform: translateY(0);
        flex-basis: 319px;
        height: auto;
        width: 408px;
        max-width: 100%;
      }

      @include mobile {
        width: 256px;
        flex-basis: 191px;
      }
    }
  }

  &__content {
    padding: 10px 24px;
    flex-basis: 50%;

    @include tablet {
      padding: 10px 0;
    }
  }

  &__text {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>