import 'bootstrap/dist/css/bootstrap.min.css';
import "primevue/resources/primevue.min.css";
import PrimeVue from 'primevue/config';
import globalComponents from './components/Global/global';
import headerComponent from './components/Header/header';
import footerComponent from './components/Footer/footer';


import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

app.use(globalComponents);
app.use(headerComponent);
app.use(footerComponent);
app.use(PrimeVue);

app.mount('#app')