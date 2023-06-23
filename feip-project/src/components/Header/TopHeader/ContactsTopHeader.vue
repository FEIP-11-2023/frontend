<script setup>

const nav = [
  {name: 'logo',
   href: '/',
   img: 'instagram-light.svg'},
   {name: 'Написать нам',
   href: '/',
   img: 'akar-icons_whatsapp-fill.svg'}
  ]

</script>

<template>
    <div class="right-nav d-flex justify-content-end">
        <div 
        v-for="element in nav"
        :key="element"
        >
          <router-link class="element-nav-top align-top text-light "
           :to=element.href>
           <img :src="`/header/${element.img}`" alt="" class="right-nav-img">
          {{ element.name }}
        </router-link>
        </div>
        
      </div>
</template>

<style>
.right-nav-img {
  width: 12px;
  margin: 0 4px;
}

</style>
