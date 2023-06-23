<script setup>
import CardMainCatalog from './CardMainCatalog.vue';
import {ref} from "vue";
import {useStore} from "vuex";


// const catalog = [
//     {
//         title: 'Костюмы',
//         img: 'mountains',
//         class: 'col-4'
//     },
//     {
//         title: 'пальто',
//         img: 'mountains',
//         class: 'col-4'
//     },
//     {
//         title: 'обувь',
//         img: 'mountains',
//         class: 'col-4'
//     },
//     {
//         title: 'Жакеты и пиджаки',
//         img: 'mountains',
//         class: 'col-6'
//     },
//     {
//         title: 'трикотаж',
//         img: 'mountains',
//         class: 'col-6'
//     },
//     {
//         title: 'купальники',
//         img: 'mountains',
//         class: 'col-4'
//     },
//     {
//         title: 'Домашняя одежда',
//         img: 'mountains',
//         class: 'col-4'
//     },
//     {
//         title: 'Marina rinaldi',
//         img: 'mountains',
//         class: 'col-4'
//     }
//]

const catalog = ref([])

const store = useStore()

store.dispatch('getCategories').then((data) => { catalog.value = data.data })
</script>

<template>
    <div class="main-catalog row">
        <div 
        v-for="item in catalog"
        :key="item"
        class="col-4"
        >
<CardMainCatalog
        >
            <template v-slot:img>
                <img :src="`https://s3.mrfox131.ru/category-photos/${item['photo']['image_name']}`" alt="" class="card-catalog__img">
            </template>
            <template v-slot:title>
                <router-link :to="'/search/category/'+item.id">
                    {{ item.name }}
                </router-link>
            </template>
          </CardMainCatalog>
        </div>
        
    </div>
  
</template>

<style>
.main-catalog {
    margin-bottom: 3rem;
}
</style>