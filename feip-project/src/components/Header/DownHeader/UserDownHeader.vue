<script setup>
import { ref } from "vue";

let modalVisible= ref(false);

function showModal(){
 modalVisible.value = true;
}



const userNav = [
  {name: 'Вход/Регистрация', 
   href: '/login',
   img: 'user'},
  {name: 'Корзина', 
   href: '/cart',
   img: 'basket'}
]

</script>

<template>      
          <div class="user-nav d-flex align-items-center">
            <router-link
            v-for="element in userNav"
            :key="element"
            class="user-nav-element d-flex"
            :to=element.href>
            <img 
            class="user-nav__img"
            :src="`/header/${element.img}.svg`" 
            :alt="element.img">
            <div class="user-nav__name">
              {{ element.name }}
            </div>
          </router-link>
      
          </div>

</template>

<style>
.user-nav-element {
  margin-left: 24px;
  color: #323540;
  font-size: 14px;
}

.user-nav-element:hover {
  opacity: 0.5;
  color: black;
  cursor: pointer;
}

.user-nav__img {
  margin-right: 0.5rem;
}
</style>