import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue'
import ContactPage from './pages/ContactPage.vue'
import JobsPage from './pages/JobsPage.vue'
import OffersPage from './pages/OffersPage.vue'
const routes = [
    {
        component:HomePage,
        path:"/"
    },
    {
        component:ContactPage,
        path:"/contacto"
    },
    {
        component:JobsPage,
        path:"/mis-trabajos"
    },
    {
        component:OffersPage,
        path:"/ofertas"
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes, 
})
export default router