import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage/MainPage.vue';
import CatalogPage from '../components/CatalogPage/CatalogPage.vue';
import BasketPage from '../components/BasketPage/BasketPage.vue';
import MakeOrder from '../components/BasketPage/MakeOrder.vue';
import InfoPage from '../components/InfoPage/InfoPage.vue';
import LoginPage from '../components/LoginPage/LoginPage.vue';
import RegistrationPage from '../components/LoginPage/RegistrationPage.vue';
import NotFoundPage from '../components/PlugPages/NotFoundPage.vue';
import Page404 from '../components/PlugPages/Page404.vue';
import PlugPage from '../components/PlugPages/PlugPage.vue';
import ProductPage from '../components/ProductPage/ProductPage.vue';
import SuccessOrderPage from '../components/SuccessOrderPage/SuccessOrderPage.vue';


const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/catalog', name: 'catalog', component: CatalogPage},
    {path: '/cart', name: 'cart', component: BasketPage},
    {path: '/order', name: 'order', component: MakeOrder},
    {path: '/info', name: 'info', component: InfoPage},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/registration', name: 'registration', component: RegistrationPage},
    {path: '/not-found', name: 'not-found', component: NotFoundPage},
    {path: '/404', name: '404', component: Page404},
    {path: '/plug', name: 'plug', component: PlugPage},
    {path: '/product', name: 'product', component: ProductPage},
    {path: '/success', name: 'success', component: SuccessOrderPage}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router;


// import Vue from 'vue';
// import Router from 'vue-router';

// import CatalogPage from '../components/CatalogPage/CatalogPage.vue'
// import BasketPage from '../components/BasketPage/BasketPage.vue'

// Vue.use(Router);

// let router = new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'catalog',
//             component: CatalogPage
//         },
//         {
//             path: '/cart',
//             name: 'cart',
//             component: BasketPage
//         }
//     ]
// })

// export default router;
