import Button from './Button.vue';
import CardProduct from './CardProduct.vue';

const components = [
    {name: 'Button', component: Button},
    {name: 'CardProduct', component: CardProduct}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}