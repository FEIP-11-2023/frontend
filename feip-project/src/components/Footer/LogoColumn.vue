<script setup>

const links = [
    {
        name: 'Политика конфиденциальности',
        href: '/'
    },
    {
        name: 'Пользовательское соглашение',
        href: '/'
    }
]

</script>

<template>
    <div class="col column-logo ">
        <div class="d-flex flex-column ">
            <router-link to="/">
                <img src="../../assets/footer/LOGO-wite.svg"
                     alt=""
                     class="logo-white ">
            </router-link>
            <button class="mb-1.5 button__connection btn">
                СВЯЗАТЬСЯ С НАМИ
            </button>
            <router-link v-for="link in links"
               :key="link"
               class="links-item"
               :to=link.href>
                {{ link.name }}
            </router-link>

        </div>
    </div>
</template>

<style>
.logo-white {
    width: 66px;
    margin-bottom: 2rem;

}

.column-logo {
    color: #9CA0AB;
    font-size: 12px;
}

.button__connection {
    background: #616575;
    border: #616575;
    width: 178px;
    height: 40px;
    color: white;
    text-decoration-line: underline;
    font-size: 12px;
    border-radius: 0;
    margin-bottom: 1.5rem;
}
</style>