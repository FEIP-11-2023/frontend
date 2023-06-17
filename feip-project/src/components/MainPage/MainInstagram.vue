<script setup>
const instagramImages = [
    "insta_img",
    "insta_img",
    "insta_img",
    "insta_img",
    "insta_img"
];
</script>

<template>
    <div class="instagram-main">
        <div class="main-page__title mb-5">МЫ В ИНСТАГРАМ</div>
        <div class="instagram-main__pic w-100 d-flex justify-content-between">
            <img v-for="item in instagramImages"
                 :key="item"
                 :src="`/examples/${item}.jpg`"
                 :alt="item" />
        </div>
    </div>
</template>

<style>
.instagram-main {
    margin-bottom: 6rem;
}

.main-page__title {
    text-align: center;
    font-size: 30px;
    color: #323540;
}
</style>
