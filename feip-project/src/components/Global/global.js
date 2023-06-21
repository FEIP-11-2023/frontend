import Button from './Button.vue';
import CardProduct from './CardProduct.vue';
import Slider from './Slider.vue';

const components = [
    {name: 'Button', component: Button},
    {name: 'CardProduct', component: CardProduct},
    {name: 'Slider', component: Slider}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}