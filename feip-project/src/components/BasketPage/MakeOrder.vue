<script setup>
import BasketResult from "./BasketResult.vue";
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const data = reactive({
    name: '',
    phone: '',
    Email: '',
    delivery: false,
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

const inSuccessPage = () => {
    router.push('success')
}

</script>

<template>
    <div class="basket-page container-xxl">
        <div class="basket-page__header d-flex">
            <a href="/cart"
               class="basket-page__link my-auto">
                <img src="../../assets/bread-crumbs/back-arrow.svg"
                     alt="">
                Вернуться в корзину
            </a>
            <p class="basket-page__title text-uppercase">
                Оформление заказа
            </p>
        </div>
        <div class="basket-page__main d-flex justify-content-around">
            <form action=""
                  class="form-order d-grid gap-4">
                <div class="form-group w-100">
                    <label for="name">Имя</label>
                    <input
                    v-model="data.name"
                    type="text"
                           class="form-control"
                           id="name"
                           placeholder="Имя">
                </div>
                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input 
                    v-model="data.phone"
                    type="tel"
                           class="form-control"
                           id="phone"
                           placeholder="+7 (900) 900-90-90"
                           pattern="+7([0-9]){3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                           maxlength="12"
                           required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input 
                    v-model="data.Email"
                    type="email"
                           class="form-control"
                           id="email"
                           placeholder="info@gmail.com">
                </div>
                <!-- checkbox получение -->
                <div class="radio-delivery">
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="pickup"
                               id="pickup"
        
                               v-model="data.delivery"
                               :value="false">
                        <label class="form-check-label "
                               for="pickup">
                            <p class="radio-delivery__title">
                                Самовывоз из шоурума
                            </p>
                            <p>
                                Санкт-Петербург, Выборгское шоссе 5/1
                            </p>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="delivery"
                               id="delivery"
                               v-model="data.delivery"
                               :value="true">
                        <label class="form-check-label radio-delivery__title"
                               for="delivery">
                            Мне нужна доставка
                        </label>
                    </div>
                </div>

                <div v-if="data.delivery == true" class="d-grid gap-4">
                    <div class="form-group d-flex">
                        <div class="me-4">
                            <label for="post_index">Почтовый индекс*</label>
                            <input 
                            v-model="post_index"
                            type="text"
                                   class="form-control"
                                   id="post_index"
                                   placeholder="101000"
                                   required>
                        </div>
    
                        <div>
                            <label for="city">Населенный пункт*</label>
                            <input 
                            v-model="data.city"
                            type="text"
                                   class="form-control"
                                   id="city"
                                   placeholder="Населенный пункт"
                                   required>
                        </div>
    
                    </div>
                    <div class="form-group">
                        <label for="street">Улица*</label>
                        <input 
                        v-model="data.street"
                        type="text"
                               class="form-control"
                               id="street"
                               placeholder="Улица"
                               required>
                    </div>
                    <div class="form-group d-flex">
                        <div class="me-4">
                            <label for="home">Дом*</label>
                            <input 
                            v-model="data.home"
                            type="text"
                                   class="form-control"
                                   id="home"
                                   placeholder="Дом"
                                   required>
                        </div>
                        <div>
                            <label for="flat">Квартира / Офис</label>
                            <input 
                            v-model="data.flat"
                            type="text"
                                   class="form-control"
                                   id="flat"
                                   placeholder="Номер квартиры">
                        </div>
    
                    </div>
                </div>

                <div class="form-group">
                    <label for="comment">Комментарий</label>
                    <textarea 
                    v-model="data.comment"
                    type="text"
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
                        <Button class="m-0 w-100" @click="inSuccessPage">
                            Отправить заявку
                        </Button>
                        
                    </template>
                </BasketResult>
            </div>
        </div>

    </div>

    <Footer />
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

.form-order {
    width: 470px;
}

.radio-delivery__title {
    font-size: 14px;
    color: #616575;
}

.form-check {
    font-size: 12px;
    height: 65px;
    background: #FFFFFF;
    border: 1px solid #ADB1BB;
    margin: 0;
    padding-left: 2rem;
    padding-top: 1.2rem;
}

.form-check input[type=radio] {
	
}

.form-check input+label {
    margin: auto;
}

.form-check:checked input {
    background: #515562;
}
.form-check input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -3px;
    left: -2px;
    position: relative;
    background-color: #515562;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    box-shadow: none;
}

.form-check input[type='radio']:checked:focus {
    box-shadow: none;
}

.radio-delivery label {
    color: #616575;
}

.form-group input {
    border: 1px solid #ADB1BB;
    border-radius: 0;
}

.form-group label {
    font-size: 12px;
    color: #515562;
    margin-bottom: 0.5rem;
}

.form-group input:focus {
    box-shadow: 0px 5px 5px #ADB1BB;
    border: 1px solid #ADB1BB;
}

.form-group textarea {
    border: 1px solid #ADB1BB;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.form-group textarea:focus {
    box-shadow: 0px 5px 5px #ADB1BB;
    border: 1px solid #ADB1BB;
    height: 80px;
}</style>