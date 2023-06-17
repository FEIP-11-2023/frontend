<script>
export default {

}
</script>

<template>
  

  <!-- реализовать интеграцию поиска -->

  <div class="not-found container-xxl">
    <div class="">
        хлебные крошки
    </div>
    <div class="not-found__title text-uppercase">
        По запросу “добрая акула” ничего не найдено
    </div>
    <hr/>
    <div class="not-found__img fixed-bottom">
        <img src="../../assets/plug-pages/god.png" alt="God" class="image">
    </div>
  </div>

</template>

<style>

.not-found__title {
    font-size: 20px;
    color: #323540;
    margin-bottom: 2rem;
}

hr {
    width: 100%;
    padding: 0;
    background-color: #CDCFD6;
}

.not-found__img {
    text-align: center;
    
}

.image {
    width: calc(30% + 20px);
}
</style>