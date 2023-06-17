import NotFoundPage from './NotFoundPage.vue';
import Page404 from './Page404.vue';
import PlugPage from './PlugPage.vue';

const components = [
    {name: 'NotFoundPage', component: NotFoundPage},
    {name: 'Page404', component: Page404},
    {name: 'PlugPage', component: PlugPage}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}