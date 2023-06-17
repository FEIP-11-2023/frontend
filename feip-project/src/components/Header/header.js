import Header from './Header.vue';
import TopHeader from './TopHeader/TopHeader.vue';
import DownHeader from './DownHeader/DownHeader.vue';

const components = [
    {name: 'Header', component: Header},
    {name: 'TopHeader', component: TopHeader},
    {name: 'DownHeader', component: DownHeader}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}