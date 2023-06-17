<script setup>
import LogoColumn from './LogoColumn.vue';
import CatalogColumn from './CatalogColumn.vue';
import ContactsColumn from './ContactsColumn.vue';
import CompanyColumn from './CompanyColumn.vue';
import DownFooter from './DownFooter.vue';

</script>

<template>
<!-- привязать все нужнные ссылки -->

    <footer class="footer w-100 p-2 position-relative">
        <div class="container-xxl p-0 w-100 border-bottom">

            <div class="row pb-5">
                <LogoColumn />

                <CatalogColumn />

                <CompanyColumn />

                <ContactsColumn />
            </div>
        </div>

        <div class="container-xxl w-100 p-0">
            <DownFooter/>
        </div>
        
    </footer>
</template>

<style>

.footer {
background-color: #515562;
min-height: 383px;
color: white;
width: 100%;
margin-top: auto;
}

.column-catalog,
 .column-company, 
 .column-contacts {
    margin-left: 75px;
}

.row {
    padding-top: 64px;
    width: 100%;
}

.links-item {
    color: #9CA0AB;
    margin-bottom: 1rem;
}

.links-item:hover {
    color: white;
}

.column__title {
    margin-top: 1rem;
    margin-bottom: -2.8rem;
}
</style>