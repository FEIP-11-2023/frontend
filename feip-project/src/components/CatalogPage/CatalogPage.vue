<script setup>
import CardProduct from '../Global/CardProduct.vue';

// const product = {
//     title: 'Water-repellent wool twill trench coat',
//     price: '17 200 ₽',
//     label: 'NEW',
//     img: 'card_img'
// };

// const product = {
//     title: 'Water-repellent wool twill trench coat',
//     price: '17 200 ₽',
//     label: 'NEW',
//     img: 'card_img'
// }

// const product_ = reactive({
//     name: '',
//     price: '',
//     size: ''
// })

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
}
];



</script>

<template>
  <div class="catalog container-xxl w-100">

    <div>
        хлебные крошки
    </div>

    <div class="catalog-header d-flex justify-content-between">
        

        <div class="catalog-header__title text-uppercase">
            каталог
        </div>
        <div class="catalog-header__sort">
            сортировать
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
</template>

<style>
.catalog {

}

.catalog-header {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
}

.catalog-header__title {
    font-size: 30px;
    color: #515562;
}

.catalog-header__sort {

}

.catalog-main {
    margin: 0;
    padding: 0 6rem;
}


</style>