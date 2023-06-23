<script setup>
import LayoutLoginPage from './LayoutLoginPage.vue';
import {reactive, ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const data = reactive({
    name: '',
    phone: '',
    email: '',
    password: '',
    check_password: ''
})

const errors = reactive({
    name: {
        error: false,
        message: ""
    },
    email: {
        error: false,
        message: "",
    },
    password: {
        error: false,
        message: ""
    }
})

const is_loading = ref(false)

const set_error = (err) => {
    if (err["loc"][1] === "password") {
        errors.password.error = true
        errors.password.message = err["msg"]
    } else if (err["loc"][1] === "email") {
        errors.email.error = true
        errors.email.message = err["msg"]
    } else if (err["loc"][1] === "username") {
        errors.name.error = true
        errors.name.message = err["msg"]
    }
}

const registerUser = () => {
    is_loading.value = true
    store.dispatch('register', {
        username: data.name,
        password: data.password,
        email: data.email,
        invite_code: 'fkfkf'
    }).then((data) => {
        router.push("/login")
    }).catch((err) => {
        console.log(err)
        if (err.response.status !== 422) {
            alert(err.response.data["content"]["message"]["ru"])
        } else {
            err.response.data["details"].forEach((err) => {
                set_error(err)
            })
        }
    }).finally(
        () => is_loading.value = false
    )
}

</script>

<template>
    <LayoutLoginPage class="mb-5">
        <template v-slot:title>
            Регистрация
        </template>
        <template v-slot:link>
            <router-link :to="{path: 'login'}" class="login-page__link">Вход</router-link>
        </template>
        <template v-slot:form>
            <form class="login-page__form">
                <div class="form-group w-100 mb-3">
                    <label for="name">Имя</label>
                    <input
                            id="name"
                            v-model="data.name"
                            class="form-control"
                            placeholder="Имя"
                            required
                            type="text">
                </div>
                <div v-if="errors.name.error" class="emsg"></div>
                <div class="form-group mb-3">
                    <label for="email">E-mail</label>
                    <input
                            id="email"
                            v-model="data.email"
                            class="form-control"
                            placeholder="info@gmail.com"
                            required
                            type="email">
                </div>

                <div v-if="errors.email.error" class="emsg"></div>
                <div class="form-group mb-3">
                    <label for="password">Пароль</label>
                    <input
                            id="password"
                            v-model="data.password"
                            class="form-control"
                            placeholder="Пароль"
                            required
                            type="password">
                </div>

                <div v-if="errors.password.error" class="emsg"></div>
                <div class="login-page__button d-flex justify-content-center">
                    <Button :disabled="is_loading" class="w-100" type="button" @click="registerUser">
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
        </template>
    </LayoutLoginPage>
</template>

<style>
.login-page__form {
    width: 40%;
}
.emsg { color: #c12020; font-weight: bold; }
</style>