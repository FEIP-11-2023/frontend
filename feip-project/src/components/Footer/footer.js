import Footer from './Footer.vue';
import LogoColumn from './LogoColumn.vue';
import CatalogColumn from './CatalogColumn.vue';
import ContactsColumn from './ContactsColumn.vue';
import DownFooter from './DownFooter.vue';

const components = [
    {name: 'Footer', component: Footer},
    {name: 'LogoColumn', component: LogoColumn},
    {name: 'CatalogColumn', component: CatalogColumn},
    {name: 'ContactsColumn', component: ContactsColumn},
    {name: 'DownFooter', component: DownFooter}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }
}