<script setup>
import { reactive } from "vue";
import Button from "../Global/Button.vue"

const product = {
    name: 'Жакет Weekend Max Mara ONDINA',
    article: '4022995L',
    description: "Жакет с поясом\n - Длинный двубортный плащ с поясом;\n Кокетка на спине - Застёжка на 3 ряда пуговиц; 2 внешних кармана; Регулируемые паты на рукавах; сзади высокая встречная складка; Длина: 123,6 см",
    structure: 'Основная ткань: 100% Полиэстер; Пояс: 100% Полиэстер; Подкл: 100% Полиэстер',
    price: '6 000 ₽',
    img: 'card_img',
    size: [42, 44, 46, 50, 52],
    color: ['#FFFFFF', '#CDCFD6', '#616575', '#323540'],
    max_count: 10
}

const product_ = reactive({
    size: '',
    color: '',
    count: null
})



</script>

<template>
  <div class="container-xxl ">
    <div class="">
        хлебные крошки
    </div>

    <div class="product d-flex">
        <div class="product__photo">
            <!-- сделать слайдер -->
            <img :src="`/examples/${product.img}.jpg`" :alt="product.img">
        </div>
    
        <div class="product__info d-flex flex-column">
            <div class="product__info-title">
                {{ product.name }}
            </div>
            <div class="product__article">
                Артикул: {{ product.article }}
            </div>
            <div class="product__description">
                {{ product.description }}
            </div>
            <div class="product__structure">
                <p class="text-uppercase mb-2" style="color: #323540">
                    Состав:
                </p>
                {{ product.structure }}
            </div>
            <div class="product__size">
                <div class="product__size-choice">
                    <p class="text-uppercase mb-3" style="color: #323540">
                        Размер:
                    </p>
                    <div class="d-flex w-100">
                        <select class="size-choice__select" aria-label="product-size">
                            <option v-for="size in product.size"
                            :key="size"
                            :value="size"
                            >
                                {{ size }}
                            </option>
                          </select>
                          <div class="product__size-text">
                            <p>
                                Не можете подобрать размер?
                            </p>
                            <p class="" style="text-decoration-line: underline">
                                Запишитесь на примерку в наш шоурум
                            </p>
                            
                          </div>
                    </div>
                    
                </div>
            </div>
            <div class="product__color">
                <p class="text-uppercase mb-4" style="color: #323540">
                    Цвет:
                </p>
                <div class="product__color-radio d-flex">
                    <!-- доработать с цветами -->
                    <div class="me-2 color-item"
                    v-for="item in product.color"
                    :key="item"
                    :style="`background-color: ${item}`">
                        <input type="radio" name="color" id="white" value="white" checked>
                    <label for="white"><span class="white"></span></label>
                    </div>
                    
                </div>
            </div>
            <div class="product__buy d-flex">
                <div class="product__price font-weight-bold">
                    {{ product.price }}
                </div>
                <div class="product__count">
                    <input type="number" :max="product.max_count" min="1" id="count" name="count" placeholder="1">
                </div>
                <div class="product__button">
                    <Button>
                        В корзину
                    </Button>
                </div>
            </div>
        </div>
    </div>



  </div>
</template>

<style>
.product {
    margin: 3.5rem 0;
    color: #616575;
}

.product__photo img {
    width: 464px;
    height: 612px;
}

.product__info {
    margin-left: 2.5rem;
}

.product__info-title {
    font-size: 24px;
    color: #323540;
    margin-bottom: 0.5rem;
}

.product__article {
    font-size: 14px;
    margin-bottom: 1.5rem;
}

.product__description {
    font-size: 16px;
    margin-bottom: 1.5rem;
}

.product__structure {
    margin-bottom: 1.5rem;
}

.product__size-choice {
    font-size: 16px;
    margin-bottom: 1rem;
}

.size-choice__select {
    min-width: 120px;
    height: 40px;
    border: 1px solid #CDCFD6;
    border-radius: 0;
    text-align: center;
    color: #515562;
    font-size: 16px;
    text-decoration-line: underline;
    margin-right: 1.6rem;
}


.product__color {
    margin-bottom: 27px;
}

.product__color-radio input {
    width: 16px;
    height: 16px;
    /*accent-color: #515562; */
}

.product__buy {

}

.product__price {
    margin-right: 1.5rem;
    font-size: 24px;
    color: #323540;
}

.product__count input {
    margin-right: 1rem;
    min-width: 120px;
    height: 40px;
    border: 1px solid #CDCFD6;
    border-radius: 0;
    text-align: center;
    color: #515562;
    font-size: 16px;

}

.product__button {

}


.color-item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-align: center;
    color: #616575;
    padding: 0;
    border: 1px solid #616575;
}

.color-item input {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
}

.color-item input:checked + label {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #616575;

}

</style>