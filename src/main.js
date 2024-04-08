import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // For CSS version
// OR
import '@fortawesome/fontawesome-free/js/all.js'; // For SVG version




createApp(App).use(store).use(router).mount('#app')
