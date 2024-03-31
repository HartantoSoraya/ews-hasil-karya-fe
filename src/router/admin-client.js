const adminClientRoutes = [
    {
        path: 'client',
        name: 'admin-client',
        component: () => import('../pages/admin/client/clients.vue'),
    },
    {
        path: 'client/:id',
        name: 'admin-client-view',
        component: () => import('../pages/admin/client/client.vue'),
    },
    {
        path: 'client/create',
        name: 'admin-client-create',
        component: () => import('../pages/admin/client/create-client.vue'),
    },
    {
        path: 'client/:id/edit',
        name: 'admin-client-edit',
        component: () => import('../pages/admin/client/edit-client.vue'),
    }
]

export default adminClientRoutes