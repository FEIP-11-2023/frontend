<script setup>
import LeftNav from './LeftNav.vue';
import ContactsTopHeader from './ContactsTopHeader.vue';


</script>

<template>
  <div class="nav-top w-100 ">
    <div class="container-xxl d-flex justify-content-between">
      <LeftNav />

      <ContactsTopHeader />
    </div>
  </div>
</template>

<style>
.nav-top {
  background: #616575;
  padding-top: 12px;
  padding-bottom: 13px;

}

</style>
