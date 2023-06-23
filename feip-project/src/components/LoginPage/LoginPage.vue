<script setup>
import LayoutLoginPageVue from "./LayoutLoginPage.vue";
import {reactive, ref} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const data = reactive({
    username: '',
    password: ''
})

const is_loading = ref(false)

const login = () => {
    is_loading.value = true
    store.dispatch('login', data).then(() => {
        router.push('catalog')
    }).catch((err) => {
        alert(err.response.data["content"]["message"]["ru"])
    }).finally(() => {
        is_loading.value = false
    })
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
                    <input v-model="data.username"
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
                    <Button :disabled="is_loading" @click="login">Войти</Button>
                </div>
            </form>
        </template>
    </LayoutLoginPageVue>
</template>

<style></style>