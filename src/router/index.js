import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Escolher',
    component: () => import('../views/Escolher.vue'),
  },
  {
    path: '/personalizar',
    name: 'Personalizar',
    component: () => import('../views/Personalizar.vue'),
  },
  {
    path: '/montar-pedido',
    name: 'MontarPedido',
    component: () => import('../views/MontarPedido.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
