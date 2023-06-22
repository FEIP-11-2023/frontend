<script setup>

</script>

<template>
    <div class="login-page container-xxl">
        <div class="login-page__header d-flex justify-content-between">
            <div class="login-page__title my-auto">
                <slot name="title"></slot>
            </div>
            <div class="login-page__link my-auto">
                <slot name="link"></slot>
            </div>
        </div>
        <div class="login-page__main d-flex justify-content-center">
            <slot name="form"></slot>
        </div>

    </div>
</template>

<style>
.login-page {
    width: 100%;
}

.login-page__header {
    height: 110px;
    width: 100%;
    border-bottom: 1px solid #CDCFD6;
}

.login-page__title {
    font-size: 30px;

}

.login-page__link {
    font-size: 20px;
    color: #323540;
}

.login-page__link:hover {
    opacity: 0.5;
    cursor: pointer;
}

.login-page__main {
    width: 100%;
    margin-top: 3rem;

}

.login-page__form {
    width: 40%;
}


</style>