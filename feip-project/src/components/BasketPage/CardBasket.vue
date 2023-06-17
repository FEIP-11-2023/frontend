<script setup>


</script>

<template>
  <div class="card-order d-flex">
    <!-- доделать кнопочку удалить -->
    <!-- <button>
        удалить
    </button> -->
    <div class="card-order__img">
        <slot name="img"></slot>
    </div>
    <div class="card-order__info d-flex flex-column">
        <div class="card-order__title">
            <slot name="title"></slot>
        </div>
        <div class="card-order__size">  
            Размер: <span class="font-weight-bold"> <slot name="size"></slot> </span> 
        </div>
        <div class="card-order__block d-flex">
            <div class="card-order__count">
                <p>
                    Количество
                </p>
                <div>
                    <slot name="count"></slot>
                </div>
            </div>

            <div class="card-order__price">
                <p>
                    Стоимость
                </p>
                <div class=" font-weight-bold" style="color: #323540; font-size: 14px;">
                    <slot name="price"></slot> ₽
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>

.card-order {
    font-size: 12px;
    color: #616575;
    border-bottom: 1px solid #CDCFD6;
    min-width: 590px;
    margin-top: 1rem;
}

.card-order__img img {
    width: 145px;
    height: 145px;
    margin-right: 2rem;
}

.card-order__info {
    padding: 11px;
}

.card-order__title {
    color: #323540;
    font-size: 18px;
    margin-bottom: 0.5rem;
}

.card-order__size {
    margin-bottom: 1.5rem;
}

.card-order__size span {
    color: #515562;
    font-size: 14px;
    margin-left: 0.5rem;
}

.card-order__block {
    margin-bottom: 0.5rem;
}

.card-order__count {
    margin: 1rem 0;
}

.card-order__price {
    margin: 1rem;
}

</style>