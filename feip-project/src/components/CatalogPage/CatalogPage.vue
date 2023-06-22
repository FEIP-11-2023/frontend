<script setup>
import CardProduct from '../Global/CardProduct.vue';
import Paginator from 'primevue/paginator';

// const size = ['XS', 'S', 'M', 'L', 'XL']

let products = [
    {
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Кеды',
    price: '20 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Джинсы',
    price: '1 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '13 000 ₽',
    label: 'лучшая цена',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Water-repellent wool twill trench coat',
    price: '17 200 ₽',
    label: 'NEW',
    img: 'card_img'
},
{
    title: 'Шапка',
    price: '1 700 ₽',
    label: 'Акция',
    img: 'card_img'
},
{
    title: 'Зимние сапоги',
    price: '25 000 ₽',
    label: 'акция',
    img: 'card_img'
}
];

const sort = [
    'сортировать', 'по цене', 'по названию', 'акции', 'новинки' 
]



</script>

<template>
  <div class="catalog container-xxl w-100">

    <div class="catalog-header d-flex justify-content-between">
        

        <div class="catalog-header__title text-uppercase">
            каталог
        </div>
        <div class="catalog-header__sort">
            <select class="catalog-header__sort-select" aria-label="product-size">
                <option v-for="item in sort"
                :key="item"
                :value="item"
                >
                    {{ item }}
                </option>
              </select>
        </div>
    </div>

    <div class="catalog-main container row">
        <div class="col-4" v-for="product in products"
        :key="product">
            <CardProduct>
                <template v-slot:img>
                    <img class="card-product__img mb-3"
             :src="`/examples/${product.img}.jpg`"
             :alt="product.img">
                </template>
                <template v-slot:label>
                    {{ product.label }}
                </template>
                <template v-slot:title>
                    {{ product.title }}
                </template>
                <template v-slot:price>
                    {{ product.price }}
                </template>
            </CardProduct>
        </div>
    </div>
  </div>

  <Footer />
</template>

<style>
.catalog-header {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
    border-bottom: 1px solid #CDCFD6;
    margin-bottom: 3rem;
}

.catalog-header__title {
    font-size: 30px;
    color: #515562;
}

.catalog-header__sort-select {
    min-width: 150px;
    height: 40px;
    border: 1px solid #CDCFD6;
    border-radius: 0;
    text-align: center;
    color: #515562;
    font-size: 16px;
    text-decoration-line: underline;
}

.catalog-main {
    margin: 0;
    padding: 0 6rem;
}


</style>