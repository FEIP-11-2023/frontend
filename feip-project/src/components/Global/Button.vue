<script  setup>

</script>

<template>
  <button class="button__global text-uppercase">
    <slot />
  </button>
</template>

<style>
.button__global {
    background: #616575;
    border: #616575;
    width: 178px;
    height: 40px;
    color: white;
    text-decoration-line: underline;
    font-size: 16px;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.button__global:hover {
    cursor: pointer;
    opacity: 0.5;
}
</style>