import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import { PAGES } from '../const';

const routes = [
  {
    path: PAGES.HOME.PATH,
    name: PAGES.HOME.NAME,
    component: HomePage,
    alias: PAGES.ALL_EVENTS.PATH,
    meta: { requiresAuth: true },
  },
  {
    path: PAGES.ALL_EVENTS.PATH,
    name: PAGES.ALL_EVENTS.NAME,
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: PAGES.MY_EVENTS.PATH,
    name: PAGES.MY_EVENTS.NAME,
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: PAGES.LOGIN.PATH,
    name: PAGES.LOGIN.NAME,
    component: LoginPage,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
