<script setup></script>

<template>
  <div class="info-main">
    <img src="../../assets/examples/mountains.jpg" alt="Snow" class="info-main__image" />
    <div class="info-main__text text-uppercase">
        Информационная страница
    </div>
  </div>
</template>

<style>
.info-main {
  position: relative;
  margin: 4rem 0;
}

.info-main__image {
  width: 100%;
  max-height: 346px;
  opacity: 0.5;
}

/* Centered text */
.info-main__text {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #323540;
  font-size: 1.5rem;
}
</style>
