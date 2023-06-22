// Component
import { AppBaseWrapper } from '@/modules/app/ui/components/base';

export default {
  path: '/dashboard',
  component: AppBaseWrapper,
  children: [
    {
      path: '',
      name: 'DashboardIndex',
      meta: { layout: 'public' },
      component: () => import(/* webpackChunkName: "dashboard-index" */ '../ui/DashboardUI.vue'),
    },
  ],
};
