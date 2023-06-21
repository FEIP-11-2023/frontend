<script setup>
import LayoutLoginPage from './LayoutLoginPage.vue';
import { reactive } from 'vue';

const data = reactive({
    name: '',
    phone: '',
    email: '',
    password: '',
    check_password: ''
})

</script>

<template>
  <LayoutLoginPage class="mb-5">
    <template v-slot:title>
        Регистрация 
    </template>
    <template v-slot:link>
        <a href="/">Вход</a>
    </template>
    <template v-slot:form>
        <form class="login-page__form">
                <div class="form-group w-100 mb-3">
                    <label for="name">Имя</label>
                    <input
                    v-model="data.name"
                    type="text"
                           class="form-control"
                           id="name"
                           placeholder="Имя"
                           required>
                </div>
                <div class="form-group mb-3">
                    <label for="phone">Телефон</label>
                    <input 
                    v-model="data.phone"
                    type="tel"
                           class="form-control"
                           id="phone"
                           placeholder="+7 (900) 900-90-90"
                           pattern="+7([0-9]){3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
                           maxlength="12"
                           required>
                </div>
                <div class="form-group mb-3">
                    <label for="email">E-mail</label>
                    <input 
                    v-model="data.Email"
                    type="email"
                           class="form-control"
                           id="email"
                           placeholder="info@gmail.com"
                           required>
                </div>
                <div class="form-group mb-3">
                    <label for="password">Пароль</label>
                    <input 
                    v-model="data.password"
                    type="password"
                           class="form-control"
                           id="password"
                           placeholder="Пароль"
                           required>
                </div>
                <div class="form-group mb-4">
                    <label for="password">Повторите пароль</label>
                    <input 
                    v-model="data.check_password"
                    type="password"
                           class="form-control"
                           id="check-password"
                           placeholder="Повторите пароль"
                           required>
                </div>
                <div class="login-page__button d-flex justify-content-center">
                    <Button class="w-100">Зарегистрироваться</Button>
                </div>
        </form>
    </template>
  </LayoutLoginPage>
</template>

<style>
.login-page__form {
    width: 40%;
}
</style>