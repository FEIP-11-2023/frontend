<script setup>
const nav = [
    {
        name: 'Одежда',
        link: '/'
    },
    {
        name: 'толстовки',
        link: '/'
    },
    {
        name: 'Джинсы',
        link: '/'
    },
    {
        name: 'платья',
        link: '/'
    },
    {
        name: 'Верхняя одежда',
        link: '/'
    },
    {
        name: 'куртки',
        link: '/'
    },
    {
        name: 'пальто',
        link: '/'
    },
    {
        name: 'Плащи',
        link: '/'
    },
    {
        name: 'аксессуары',
        link: '/'
    },
    {
        name: 'солнечные очки',
        link: '/'
    },
    {
        name: 'Перчатки',
        link: '/'
    },
    {
        name: 'Ремни',
        link: '/'
    },
    {
        name: 'Жакеты и пиджаки',
        link: '/'
    },
    {
        name: 'обувь',
        link: '/'
    },
    {
        name: 'сумки и кошельки',
        link: '/'
    },
    {
        name: 'шапки, шляпы, шарфы',
        link: '/'
    },

]
</script>

<template>
    <div id="catalog-nav" class=" row p-4">
        <div class="col-3" 
        v-for="item in nav"
        :key="item.name"
        >
        <a
        
        href="'/" class="catalog-nav__link text-uppercase">
            {{ item.name }}
        </a>
        </div>
        
    
</div>
</template>



<style>

</style>