import LoginPage from './LoginPage.vue';
import RegistrationPage from './RegistrationPage.vue';
import LayoutLoginPage from './LayotLoginPage.vue';

const components = [
    {name: 'LoginPage', component: LoginPage},
    {name: 'RegistrationPage', component: RegistrationPage},
    {name: 'LayoutLoginPage', component: LayoutLoginPage}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}