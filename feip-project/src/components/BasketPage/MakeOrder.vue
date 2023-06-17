<script setup>
import BasketResult from "./BasketResult.vue";
import { reactive } from 'vue';

const data = reactive({
    name: '',
    phone: '',
    Email: '',
    production_method: null,
    post_index: null,
    city: '',
    street: '',
    home: '',
    flat: '',
    comment: ''
})

const res = {
    count: 4,
    sum: '24 000'
}

</script>

<template>
    <!-- пересмотреть видос и сделать как там работу с формой-->

    <div class="basket-page container-xxl">
        <div class="basket-page__header d-flex">
            <a href="/"
               class="basket-page__link my-auto">
                <img src="../../assets/bread-crumbs/back-arrow.svg"
                     alt="">
                Вернуться в корзину
            </a>
            <p class="basket-page__title text-uppercase">
                Оформление заказа
            </p>
        </div>
        <div class="basket-page__main d-flex justify-content-between">
            <form action="">
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input type="text"
                           class="form-control"
                           id="name"
                           placeholder="Имя">
                </div>
                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input type="tel"
                           class="form-control"
                           id="phone"
                           placeholder="+7 (900) 900-90-90"
                           pattern="+7([0-9]){3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                           maxlength="10"
                           required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email"
                           class="form-control"
                           id="email"
                           placeholder="info@gmail.com">
                </div>
                <!-- checkbox получение -->
                <div class="form-group">
                    <label for="post_index">Почтовый индекс*</label>
                    <input type="number"
                           class="form-control"
                           id="post_index"
                           placeholder="101000"
                           required>

                    <label for="city">Населенный пункт*</label>
                    <input type="text"
                           class="form-control"
                           id="city"
                           placeholder="Населенный пункт"
                           required>
                </div>
                <div class="form-group">
                    <label for="street">Улица*</label>
                    <input type="text"
                           class="form-control"
                           id="street"
                           placeholder="Улица"
                           required>
                </div>
                <div class="form-group">
                    <label for="home">Дом*</label>
                    <input type="text"
                           class="form-control"
                           id="home"
                           placeholder="Дом"
                           required>

                    <label for="flat">Квартира / Офис</label>
                    <input type="text"
                           class="form-control"
                           id="flat"
                           placeholder="Номер квартиры">
                </div>
                <div class="form-group">
                    <label for="comment">Комментарий</label>
                    <textarea type="text"
                           class="form-control"
                           id="comment"
                           placeholder=""></textarea>
                </div>
            </form>
            <div class="basket-page__result">
                <BasketResult>
                    <template v-slot:header>
                        Ваш заказ
                    </template>
                    <template v-slot:count>
                        {{ res.count }}
                    </template>
                    <template v-slot:sum>
                        {{ res.sum }}
                    </template>
                    <template v-slot:button>
                        Отправить заявку
                    </template>
                </BasketResult>
            </div>
        </div>

    </div>
</template>

<style>
.basket-page {
    margin-bottom: 6rem;
}

.basket-page__header {
    margin: 2.5rem 0;

}

.basket-page__link {
    color: #616575;
    font-size: 14px;
    margin-right: 1rem;
}

.basket-page__title {
    font-size: 20px;
    padding: 0 1rem;
    border-left: 1px solid #CDCFD6;
}

.basket-page__main {
    width: 100%;
    background-color: #F7F7FC;
    padding: 32px 175px;
}

.basket-page__result {}
</style>