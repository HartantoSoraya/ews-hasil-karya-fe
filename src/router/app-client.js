const appClientRoutes = [
  {
    path: 'client',
    name: 'app-client',
    component: () => import('../pages/app/client/clients.vue'),
    meta: { permissions: ['client-list'] },
  },
  {
    path: 'client/:id',
    name: 'app-client-view',
    component: () => import('../pages/app/client/client.vue'),
    meta: { permissions: ['client-list'] },
  },
  {
    path: 'client/create',
    name: 'app-client-create',
    component: () => import('../pages/app/client/create-client.vue'),
    meta: { permissions: ['client-create'] },
  },
  {
    path: 'client/:id/edit',
    name: 'app-client-edit',
    component: () => import('../pages/app/client/edit-client.vue'),
    meta: { permissions: ['client-edit'] },
  },
]

export default appClientRoutes
