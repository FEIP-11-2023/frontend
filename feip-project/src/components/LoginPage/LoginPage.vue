<script setup>
import LayoutLoginPageVue from "./LayoutLoginPage.vue";
import { reactive } from 'vue';

const data = reactive({
    login: '',
    password: ''
})

</script>

<template>
    <LayoutLoginPageVue>
        <template v-slot:title>Вход</template>
        <template v-slot:link>
            <a href="/">Зарегистрироваться</a>
        </template>
        <template v-slot:form>
            <form class="login-page__form w-60">
                <div class="form-group mb-4">
                    <label for="login">Логин/Email</label>
                    <input v-model="data.login"
                           type="text"
                           class="form-control"
                           id="login"
                           placeholder="Логин или Email">
                </div>
                <div class="form-group mb-4">
                    <label for="password">Пароль</label>
                    <input v-model="data.password"
                           type="password"
                           class="form-control"
                           id="password"
                           placeholder="Пароль">
                </div>
                <div class="login-page__button d-flex justify-content-center">
                    <Button class="">Войти</Button>
                </div>
            </form>
        </template>
    </LayoutLoginPageVue>
</template>

<style></style>