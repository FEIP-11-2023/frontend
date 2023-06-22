<script setup>
import LayoutLoginPageVue from "./LayoutLoginPage.vue";
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const data = reactive({
    login: '',
    password: ''
})

const login = () => {
    store.commit('setLoggedIn', true)
    router.push('catalog')
}

</script>

<template>
    <LayoutLoginPageVue>
        <template v-slot:title>Вход</template>
        <template v-slot:link>
            <router-link class="login-page__link" :to="{path: 'registration'}">Зарегистрироваться</router-link>
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
                    <Button @click="login">Войти</Button>
                </div>
            </form>
        </template>
    </LayoutLoginPageVue>
</template>

<style></style>