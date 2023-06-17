import SuccessOrderPage from './SuccessOrderPage.vue';

const components = [
    {name: 'SuccessOrderPage', component: SuccessOrderPage}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}