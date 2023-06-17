import InfoPage from './InfoPage.vue';
import InfoMain from './InfoMain.vue';
import TextComponent from './TextComponent.vue';
import InfoSlider from './InfoSlider.vue';


const components = [
    {name: 'InfoPage', component: InfoPage},
    {name: 'InfoMain', component: InfoMain},
    {name: 'TextComponent', component: TextComponent},
    {name: 'InfoSlider', component: InfoSlider}
    
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }

}