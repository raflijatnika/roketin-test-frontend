import Vue from 'vue';
import VueRouter from 'vue-router';

function loadRoutes() {
  const context = require.context('@/modules', true, /router.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}

let routesModules = [];
loadRoutes().forEach((routes) => {
  routesModules = routesModules.concat(routes);
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Entry Point
    {
      path: '',
      meta: { layout: 'public', type: 'COMMON' },
      component: () => import(/* webpackChunkName: "entry-point" */ '@/modules/app/ui/components/common/AppEntryPoint.vue'),
    },
    ...routesModules,
  ],
});

export default router;
