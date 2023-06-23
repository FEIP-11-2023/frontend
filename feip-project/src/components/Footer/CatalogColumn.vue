<script setup>

const catalog1 = [
    { name: 'Одежда', href: '/' },
    { name: 'Обувь', href: '/' },
    { name: 'Верхняя одежда', href: '/' },
    { name: 'Домашняя одежда', href: '/' }
]

const catalog2 = [
    { name: 'Купальники', href: '/' },
    { name: 'Аксессуары', href: '/' },
    { name: 'Идеи для подарков', href: '/' },
    { name: 'Marina rinaldi', href: '/' }
]


</script>

<template>
    <div class="col-4 column-catalog">
        <div class="column__title">
            КАТАЛОГ
        </div>
        <div class="row d-flex ">
            <div class="col-6
             d-flex flex-column">
                <router-link class="links-item "
                   v-for="item in catalog1"
                   :key="item"
                   :to=item.href>
                    {{ item.name }}
                </router-link>
            </div>

            <div class="col d-flex flex-column">
                <router-link class="links-item "
                   v-for="item in catalog2"
                   :key="item"
                   :to=item.href>
                    {{ item.name }}
                </router-link>
            </div>
        </div>

    </div>
</template>

<style></style>