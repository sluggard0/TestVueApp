import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
  { path: '/charts', component: 'Charts' },
  { path: '/list', component: 'List' },
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`),
  };
});

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
});
