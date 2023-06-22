<script setup>



</script>

<template>
    <div class="basket-result">
        <div class="basket-result__container">
            <div class="basket-result__header">
                <slot name="header"></slot>
            </div>
            <hr>
            <div class="basket-result__info">
                <div class="d-flex justify-content-between mb-2">
                    <p>
                        Кол-во товаров:
                    </p>
                    <div>
                        <slot name="count"></slot> шт
                    </div>
                </div>
    
                <div class="d-flex justify-content-between mb-2 font-weight-bold">
                    <p>
                        Сумма:
                    </p>
                    <div>
                        <slot name="sum"></slot> ₽
                    </div>
                </div>
            </div>
            <hr>
            <div class="basket-result__result d-flex justify-content-between">
                <p>
                    Итого:
                </p>
                <div>
                    <slot name="sum"></slot> ₽
                </div>
            </div>
        </div>

        <div class="basket-result__button">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<style>
hr {
    background: #CDCFD6;
    width: 100%;
}

.basket-result {
    width: 207px;
    border: 1px solid #CDCFD6;
    background-color: #FFFFFF;
    padding-top: 1.5rem;
    font-size: 12px;
    color: #616575;
}

.basket-result__container {
    padding: 0 1rem;
}

.basket-result__header {
    font-size: 16px;
    color: #515562;
}

.basket-result__info {
    margin-bottom: 0.5rem;
}

.basket-result__result {
    color: #323540;
    font-size: 14px;
    margin: 1.5rem 0;
}

</style>