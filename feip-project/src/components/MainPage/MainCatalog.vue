<script setup>
import CardMainCatalog from './CardMainCatalog.vue';

const catalog = [
    {
        title: 'Костюмы',
        img: 'mountains',
        class: 'col-4'
    },
    {
        title: 'пальто',
        img: 'mountains',
        class: 'col-4'
    },
    {
        title: 'обувь',
        img: 'mountains',
        class: 'col-4'
    },
    {
        title: 'Жакеты и пиджаки',
        img: 'mountains',
        class: 'col-6'
    },
    {
        title: 'трикотаж',
        img: 'mountains',
        class: 'col-6'
    },
    {
        title: 'купальники',
        img: 'mountains',
        class: 'col-4'
    },
    {
        title: 'Домашняя одежда',
        img: 'mountains',
        class: 'col-4'
    },
    {
        title: 'Marina rinaldi',
        img: 'mountains',
        class: 'col-4'
    }
]

</script>

<template>
    <div class="main-catalog row">
        <div 
        v-for="item in catalog"
        :key="item"
        :class="item.class"
        >
<CardMainCatalog
        >
            <template v-slot:img>
                <img :src="`/examples/${item.img}.jpg`" alt="" class="card-catalog__img">
            </template>
            <template v-slot:title>
                <router-link to="">
                    {{ item.title }}
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