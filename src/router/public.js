const publicRouter = [
  {
    path: '',
    redirect: 'app/dashboard',
  },
  {
    path: '/403',
    component: () => import('@/pages/403.vue'),
    name: '403',
  },
]

export default publicRouter
