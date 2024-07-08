import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Chat from '../views/Chat.vue';
import Success from '../views/Success.vue';


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/payment-success', name: 'Success', component: Success },
  ];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;