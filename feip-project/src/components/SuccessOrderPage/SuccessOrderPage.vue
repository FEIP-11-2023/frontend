<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const backMain = () => {
    router.push('/')
}

</script>

<template>

  <div class="container-xxl">
    <div class="success-order d-flex flex-column justify-content-center">
        <div class="success-order__basket">
            <img src="../../assets/basket.svg" alt="basket" >
        </div>
        <div class="success-order__title text-uppercase">
            Заявка успешно отправлена!
        </div>
        <div class="success-order__text">
            Спасибо за заявку, скоро с вами свяжется наш менеджер
        </div>
        <div class="success-order__button">
            <Button type="button" @click="backMain">
                На главную
            </Button>
        </div>
    </div>
  </div>


</template>

<style>
.success-order {
    height: calc(100vh - 150px);
    text-align: center;
    margin: auto 0;
}

.success-order__basket {
    margin-bottom: 3rem;
}

.success-order__title {
    color: #323540;
    font-size: 24px;
    margin-bottom: 1rem;
}

.success-order__text {
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #515562;
margin-bottom: 40px;
}
</style>