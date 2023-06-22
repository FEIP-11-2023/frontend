<script setup>
import LayoutLoginPage from './LayoutLoginPage.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const data = reactive({
    name: '',
    phone: '',
    email: '',
    password: '',
    check_password: ''
})

const registerUser = () => {
    store.dispatch('register', {username: data.name, password: data.password, email: data.email, invite_code: 'fkfkf'}).then((data) => {
    }).catch((err) => {
        alert(err.response.data["content"]["message"]["ru"])
    })
}

</script>

<template>
  <LayoutLoginPage class="mb-5">
    <template v-slot:title>
        Регистрация 
    </template>
    <template v-slot:link>
        <router-link class="login-page__link" :to="{path: 'login'}">Вход</router-link>
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
                    <label for="email">E-mail</label>
                    <input 
                    v-model="data.email"
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
                <div class="login-page__button d-flex justify-content-center">
                    <Button @click="registerUser" class="w-100" type="button">Зарегистрироваться</Button>
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