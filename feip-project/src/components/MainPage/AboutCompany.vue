<script setup>
import Button from "../Global/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>

  <!-- сделать переход на страницу info по клику -->

  <div class="about-company">
    <img
      src="../../assets/examples/mountains.jpg"
      alt="Snow"
      class="about-company__image"
    />
    <div class="about-company__text">
      <div class="about-company__title">О КОМПАНИИ</div>
      <div class="text">
        Меня зовут Имя Фамилия. Я заказываю одежду Бренд из Страна с персональной скидкой
        и подбираю для Вас интересные варианты сумок, одежды и обуви в шоуруме.
      </div>
      <Button @click="router.push('info')">
        ПОДРОБНЕЕ
      </Button>
    </div>
  </div>
</template>

<style>
.about-company {
  margin: 6rem 0;
  position: relative;
}

.about-company__image {
  width: 100%;
  max-height: 346px;
  opacity: 0.4;
}

.about-company__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 542px;
  text-align: center;
  color: #616575;
  font-size: 16px;
}

.text {
  margin-bottom: 3rem;
}

.about-company__title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #323540;
}
</style>
