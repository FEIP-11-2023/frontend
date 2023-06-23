<script setup>
import { reactive } from 'vue';
import { defineProps } from 'vue';

defineProps({
    name: String,
    article: String,
    description: String, 
    structure: String,
    price: String,
    img: String,
    sizes: Array,
    color: Array,
    max_count: Number
})

const product_ = reactive({
    name: '',
    price: '',
    size: ''
})

const size = ['XS', 'S', 'M', 'L', 'XL']

</script>

<template>
    <router-link to="/product" class="card-product d-flex flex-column p-1" style="z-index: 1">
        <div class="card-product__label text-uppercase">
            <slot name="label"></slot>
        </div>
        <slot name="img"></slot>
        <div class="card-product__title">
            <slot name="title"></slot>
        </div>
        <div class="card-product__price mb-1 font-weight-bold">
            <slot name="price"></slot>
        </div>
        <!-- <div class="card-product__add">
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
        </div> -->
    </router-link>
</template>

<style>
.card-product {
    position: relative;
    max-width: 320px; 
    margin-bottom: 2rem;
    text-decoration-line: none;
}

.card-product:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.2);
}

.card-product:hover .card-product__add {
    visibility: visible;
}

.card-product__label {
    padding: 0 0.9rem;
    height: 1.5rem;
    background-color: #CDCFD6;
    text-align: center;
    position: absolute;
    top: 1.5rem;
    z-index: 1;
    color: #515562;
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
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: white;
    left: 0;
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.2);
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