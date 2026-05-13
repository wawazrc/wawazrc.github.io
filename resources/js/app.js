import './bootstrap';
import { createApp } from 'vue';
import '../css/app.css';
import AlcoholMenuApp from './components/AlcoholMenuApp.vue';
import MenuBookApp from './components/MenuBookApp.vue';

const appComponent = window.location.pathname === '/menu-alkohol' ? AlcoholMenuApp : MenuBookApp;

createApp(appComponent).mount('#app');
