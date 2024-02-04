import { createRouter, createWebHistory } from 'vue-router';
import Contact from './components/pages/Contact.vue';
import Home from './components/pages/Home.vue';
import Resume from './components/pages/Resume.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/resume', component: Resume },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];
const history = createWebHistory();

export default createRouter({
    history,
    routes
});