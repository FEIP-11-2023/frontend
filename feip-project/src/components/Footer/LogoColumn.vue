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
            <a href="/">
                <img src="../../assets/footer/LOGO-wite.svg"
                     alt=""
                     class="logo-white ">
            </a>
            <button class="mb-1.5 button__connection btn">
                СВЯЗАТЬСЯ С НАМИ
            </button>
            <a v-for="link in links"
               :key="link"
               class="links-item"
               :href=link.href>
                {{ link.name }}
            </a>

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