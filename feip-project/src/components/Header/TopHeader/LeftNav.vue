<script setup>

const nav = [
  {name: 'Контакты',
   href: '/'},
   {name: 'О нас',
   href: '/info'},
   {name: 'Доставка',
   href: '/'}
]

</script>

<template>
      <div class="left-nav">
        <a class="element-nav-top align-top text-light "
           v-for="element in nav"
           :key="element"
           :href="element.href">
          {{ element.name }}
        </a>
      </div>
</template>

<style>

.element-nav-top {
  margin-right: 24px;
  font-family: 'PT Root UI, sans-serif';
}

.element-nav-top:hover {
  cursor: pointer;
  opacity: 0.5;
}

</style>
