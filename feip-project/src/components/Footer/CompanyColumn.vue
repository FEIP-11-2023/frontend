<script setup>

const links = [
    { name: 'О нас', href: '/info' },
    { name: 'Контакты', href: '/' },
    { name: 'Доставка', href: '/' },
    { name: 'Оплата', href: '/' }
]

</script>

<template>
    <div class="col column-company ">
        <div class="column__title ">
            О КОМПАНИИ
        </div>
        <div class="row">
            <div class="col d-flex flex-column">
                <router-link class="links-item "
                   v-for="item in links"
                   :key="item"
                   :to=item.href>
                    {{ item.name }}
                </router-link>
            </div>
        </div>

    </div>
</template>

<style></style>