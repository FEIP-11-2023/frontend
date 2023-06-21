import Header from './Header.vue';
import TopHeader from './TopHeader/TopHeader.vue';
import DownHeader from './DownHeader/DownHeader.vue';
import NavCatalog from './DownHeader/NavCatalog.vue';

const components = [
    {name: 'Header', component: Header},
    {name: 'TopHeader', component: TopHeader},
    {name: 'DownHeader', component: DownHeader},
    {name: 'NavCatalog', component: NavCatalog}

]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}