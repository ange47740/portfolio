import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faChevronLeft, faChevronRight, faYoutube);

const app = createApp(App)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
