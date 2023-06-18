<script setup>

</script>

<template>
  <div class="card-catalog">
    <slot name="img" class="card-catalog__img"></slot>
    <div class="card-catalog__title text-uppercase">
        <!-- <slot></slot> -->
        <slot name="title"></slot>
    </div>
  </div>
</template>

<style>
.card-catalog {
    margin: 2rem;
    position: relative;
}

.card-catalog__img {
    width: 100%;
  max-height: 288px;
  opacity: 0.4;
  position: relative;
}

.card-catalog__title a {
    position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 542px;
  text-align: center;
  color: #616575;
  font-size: 16px;
}
</style>