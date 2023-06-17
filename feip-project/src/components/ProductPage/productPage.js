import ProductPage from './ProductPage.vue';


const components = [
    {name: 'ProductPage', component: ProductPage}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}