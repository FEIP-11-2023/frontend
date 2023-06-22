<script setup>
import CardBasket from "./CardBasket.vue";
import BasketResult from "./BasketResult.vue";
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
import { reactive } from "vue";


const router = useRouter();

const products = reactive([
    {
        name: 'Жакет Weekend Max Mara ONDINA',
        size: '42',
        count: 1,
        price: '27 000',
        img: 'mountains',
        max_count: 25
    },
    {
        name: 'Жакет Weekend Max Mara ONDINA',
        size: '42',
        count: 1,
        price: '27 000',
        img: 'card_img',
        max_count: 15

    },
    {
        name: 'Жакет Weekend Max Mara ONDINA',
        size: '42',
        count: 1,
        price: '27 000',
        img: 'mountains',
        max_count: 10
    },
])

const res = {
    count: 4,
    sum: '24 000'
}

const backCatalog = () => {
    router.push('catalog');
}

const inOrderPage = () => {
    router.push('order')
}

</script>

<template>

  <div class="basket-page container-xxl">
    <div class="basket-page__header d-flex">
        <router-link :to="{path: 'catalog'}" class="basket-page__link my-auto">
            <img src="../../assets/bread-crumbs/back-arrow.svg" alt="">
            Вернуться в каталог
        </router-link>
        <p class="basket-page__title text-uppercase">
            корзина
        </p>
    </div>
        <div class="basket-page__main d-flex justify-content-between">
            <div v-if="products.length == 0" class="mx-auto d-flex align-items-center flex-column">
                <p class="basket-page__not-products mb-4 ">Вы пока не добавили товары в корзину</p>
                <Button @click="backCatalog" class="">В каталог</Button>
            </div>
            <div class="d-flex flex-column" v-else>
                <CardBasket  v-for="product in products"
                :key="product">
                    <template v-slot:img>
                        <img :src="`/examples/${product.img}.jpg`" :alt="product.img">
                    </template>
                    <template v-slot:title>
                        {{ product.name }}
                    </template>
                    <template v-slot:size>
                        {{ product.size }}
                    </template>
                    <template v-slot:count>
                        <input v-model="product.count" type="number" :max="product.max_count" min="1" id="count" name="count" :placeholder="product.count">
                    </template>
                    <template v-slot:price>
                        {{ product.price }}
                    </template>
                </CardBasket>

            </div>
            <div class="basket-page__result" v-if="products.length !== 0">
                <BasketResult>
                    <template v-slot:header>
                        Ваша корзина
                    </template>
                    <template v-slot:count>
                        {{ res.count }}
                    </template>
                    <template v-slot:sum>
                        {{ res.sum }}
                    </template>
                    <template v-slot:button>
                        <Button class="m-0 w-100" @click="inOrderPage">
                            Оформить заказ
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

.basket-page__link:hover {
    opacity: 0.5;
    color: #616575;
    cursor: pointer;
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

.basket-page__not-products {
    font-size: 20px;

}

</style>