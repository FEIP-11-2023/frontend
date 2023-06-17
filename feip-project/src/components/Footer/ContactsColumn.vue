<script setup>

const images = [
    {img: 'telegram', href: '/'},
    {img: 'instagram', href: '/'},
    {img: 'vk', href: '/'},
    {img: 'youtube', href: '/'},
    {img: 'avito', href: '/'}
]

</script>

<template>
    <div class="col column-contacts p-0">
        <div class="column__title">
            КОНТАКТЫ
        </div>
        <div class="row m-0">
            <div class="col w-100 d-flex flex-column p-0 ">
                <div class="phone_number">
                    +7 (900) 900-90-90
                </div>
                <a class="links-item "
                   href='/'>
                    sail@mail.com
                </a>
            </div>
            <div class="social-networks p-0 d-flex justify-content-between">
                <a class="social-networks__link"
                v-for="item in images"
                :key="item"
                :href="item.href">
                <img class="social-networks__img"
                 v-bind:src="`/footer/${item.img}.svg`" 
                 v-bind:alt="img">
                </a>
            </div>
        </div>


    </div>
</template>

<style>
.phone_number {
    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: white;
    text-decoration-line: underline;
    max-width: 100%;
}

.social-networks__img:hover {
    opacity: 0.5;
}
</style>