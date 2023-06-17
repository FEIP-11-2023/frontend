<script setup>
import CatalogDownHeader from './CatalogDownHeader.vue';
import UserDownHeader from './UserDownHeader.vue';

</script>

<template>
  <div class="down-header w-100 border-bottom d-flex align-items-center ">
    <div class="container-xxl d-flex justify-content-between">
      <a href="/"
         class="logo ">
        <img src="../../../assets/header/LOGO.svg"
             alt="">
      </a>

      <CatalogDownHeader /> 

      <UserDownHeader />

    </div>
  </div>
</template>

<style>
.down-header {
  min-height: 96px;
}

</style>