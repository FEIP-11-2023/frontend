<script>
// import NavCatalog from './NavCatalog.vue';


export default {
    name: 'burger',
    data() {
        return {
            isActive: false,
        }
    }
}

</script>

<template>
    <div class="catalog-search d-flex justify-content-start my-auto">
        <div class="catalog-down-header d-flex justify-content-center border">
            <div
            :class="{change: isActive}"
            v-on:click="isActive=!isActive"
            class="burger-nav my-auto" 
            >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <div class="catalog-nav" :class="{show: isActive}">
                <NavCatalog />
              </div>

            <router-link :to="{path: 'catalog'}" class="link-catalog d-flex align-items-center ">
                КАТАЛОГ
            </router-link>
        </div>
        <div class="search_block">
            <input class="search p-2"
                   type="text">
            <button class="button_search ">
                <img src="../../../assets/header/search.svg"
                     alt="search">
            </button>

        </div>


    </div>
</template>

<style>
.catalog-search {
    height: 48px;
}

.link-catalog {
    color: white;
    font-family: 'PT Root UI';
    font-size: 14px;
}

.link-catalog:hover, .burger-nav:hover {
    opacity: 0.5;
    cursor: pointer;
    color: white;
}

.search {
    min-width: calc(472px - 46px);
    height: 46px;
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #F7F7FC;
    border-radius: 0px;
    padding: 0;
}

.search:focus {
    outline: none;

}

.button_search {
    height: 46px;
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #F7F7FC;
    padding: 12px;
    border-radius: 0px;
}

.catalog-down-header {
    background: #616575;
    color: white;
    text-decoration: underline;
    width: 113px;
    font-family: 'PT Root UI';
    border: 1px;

}

.burger-nav {
    display: inline-block;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    width: 1rem;
    height: 2px;
    background-color: #FFFFFF;
    margin: 3px 0.5rem;
    transition: 0.4s;
}

.change .bar1 {
    width: 1.2rem;
    -webkit-transform: rotate(-45deg) translate(-3px, 3px);
    transform: rotate(-45deg) translate(-3px, 3px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
    width: 1.2rem;
    -webkit-transform: rotate(45deg) translate(-3px, -3px);
    transform: rotate(45deg) translate(-4px, -4px);
}

/* пример работы */
.catalog-nav {
    display: none;
    position: absolute;
    background-color: #FFFFFF;
    width: 100%;
    box-shadow: 0px 8px 0px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-top: 4.5rem;
    left: 0%;
}

/* Links inside the dropdown */
.catalog-nav__link {
    color: #515562;
    margin-bottom: 2rem;
    font-size: 18px;
    display: block;
}

/* Change color of dropdown links on hover */
.catalog-nav__link:hover
 {
    opacity: 0.5;
    cursor: pointer;
}

.show {
    display:block;
    z-index: 2;
}

</style>