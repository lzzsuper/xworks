import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';
import getUaser from '../components/getUaser.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/getUaser',
    name: 'getUaser',
    component: getUaser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;