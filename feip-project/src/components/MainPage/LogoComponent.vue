<script setup></script>

<template>
  <div class="logo__component">
    <img src="../../assets/examples/mountains.jpg" alt="Snow" class="logo__image" />
    <div class="logo__text">
      <div class="logo">logo</div>
      <div class="text">Одежда Max Mara из Италии с персональной скидкой</div>
    </div>
  </div>
</template>

<style>
.logo__component {
  position: relative;
  margin: 4rem 0;
}

.logo__image {
  width: 100%;
  max-height: 346px;
  opacity: 0.5;
}

/* Centered text */
.logo__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 237px;
  text-align: center;
  color: #616575;
  font-size: 18px;
}

.logo {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  color: #323540;
}
</style>
