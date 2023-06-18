<script setup>
import Button from './Button.vue';
import { reactive } from 'vue';

const products = {
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
}

const product_ = reactive({
    name: '',
    price: '',
    size: ''
})

const size = ['XS', 'S', 'M', 'L', 'XL']

</script>

<template>
    <!-- доебашить радиокнопки с размерами
    доебашить кнопочку с избранным -->


    <div class="card-product d-flex flex-column p-1">
        <div class="card-product__label">
            {{ products.label }}
        </div>
        <img class="card-product__img mb-3"
             :src="`/examples/${products.img}.jpg`"
             :alt="products.img">
        <div class="card-product__title">
            {{ products.title }}
        </div>
        <div class="card-product__price mb-1">
            {{ products.price }}
        </div>
        <div class="card-product__add">
            <div class="card-product__size d-flex">
                <p class="card-product__size-title w-100">
                    Выберите размер:
                </p>
                <form class="card-product__size-radio d-flex w-100 justify-content-between my-auto">
                    <div class="size-item"
                    v-for="item in size"
                    :key="item">
                        <input class="size-item__input"
                        v-model="product_.size"
                        :value="item"
                           type="radio"
                           name="item"
                           id="item">
                    <label class="size-item__label m-0 p-0"
                           for="item">
                        {{ item }}
                    </label>
                </div>
                    

                </form>
            </div>
            <Button class="w-100 mb-1">
                В КОРЗИНУ
            </Button>
        </div>
    </div>
</template>

<style>
.card-product {
    position: relative;
    max-width: 320px;
    /* max-height: 626px; */
}

.card-product:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.2);
}

.card-product:hover .card-product__add,
.card-product__heart {
    visibility: visible;
}

.card-product__label {
    width: 4rem;
    height: 1.5rem;
    background-color: #CDCFD6;
    text-align: center;
    position: absolute;
    top: 1.5rem;
    z-index: 1;
}

.card-product__heart {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    visibility: hidden;
}

.card-product__heart input {
    position: absolute;
    height: 26px;
    width: 28px;
    margin: 0;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
}

.card-product__heart input[checkbox]:checked {
    background-color: var(#616575);
}

.card-product__img {
    position: relative;
    z-index: -1;
}

.card-product__title {
    margin-bottom: 1.5rem;
    color: #515562;
    font-size: 16px;
    text-decoration-line: underline;
}

.card-product__price {
    font-size: 18px;
    color: #515562;
}

.card-product__size p {
    text-decoration-line: underline;
    color: #616575;
    font-size: 14px;
}

.card-product__add {
   visibility: hidden;
    z-index: 2;
}

.card-product__size {
    margin-bottom: 33px;
}

.size-item {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #CDCFD6;
    text-align: center;
    color: #616575;
    padding: 0;
}

.size-item input {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
}

.size-item input:checked + label {
    background-color: #616575;
    color: #CDCFD6;
    width: 100%;
}

</style>