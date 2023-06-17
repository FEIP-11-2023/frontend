<script setup>

const links = [
    { name: 'О нас', href: '/' },
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
                <a class="links-item "
                   v-for="item in links"
                   :key="item"
                   :href=item.href>
                    {{ item.name }}
                </a>
            </div>
        </div>

    </div>
</template>

<style></style>