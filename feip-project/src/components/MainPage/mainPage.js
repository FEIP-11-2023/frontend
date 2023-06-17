import MainPage from './MainPage.vue';
import LogoComponent from './LogoComponent.vue';
import MainCatalog from './MainCatalog.vue';
import NewArrival from './NewArrival.vue';
import AboutCompany from './AboutCompany.vue';
import MainInstagram from './MainInstagram.vue';

const components = [
    {name: 'MainPage', component: MainPage},
    {name: 'LogoComponent', component: LogoComponent},
    {name: 'MainCatalog', component: MainCatalog},
    {name: 'NewArrival', component: NewArrival},
    {name: 'AboutCompany', component: AboutCompany},
    {name: 'MainInstagram', component: MainInstagram}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}