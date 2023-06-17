import BasketPage from './BasketPage.vue';
import MakeOrder from './MakeOrder.vue';
import CardBasket from './CardBasket.vue';
import BasketResult from './BasketResult.vue';

const components = [
    {name: 'BasketPage', component: BasketPage},
    {name: 'MakeOrder', component: MakeOrder},
    {name: 'CardBasket', component: CardBasket},
    {name: 'BasketResult', component: BasketResult}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}