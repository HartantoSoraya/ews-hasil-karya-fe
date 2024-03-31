const adminEwsDeviceRoutes = [
    {
        path: 'ews-device',
        name: 'admin-ews-device',
        component: () => import('../pages/admin/ews-device/ews-devices.vue'),
    },
    {
        path: 'ews-device/:id',
        name: 'admin-ews-device-view',
        component: () => import('../pages/admin/ews-device/ews-device.vue'),
    },
    {
        path: 'ews-device/create',
        name: 'admin-ews-device-create',
        component: () => import('../pages/admin/ews-device/create-ews-device.vue'),
    },
    {
        path: 'ews-device/:id/edit',
        name: 'admin-ews-device-edit',
        component: () => import('../pages/admin/ews-device/edit-ews-device.vue'),
    }
]

export default adminEwsDeviceRoutes