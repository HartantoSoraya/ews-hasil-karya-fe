const appEwsDeviceRoutes = [
  {
    path: 'ews-device',
    name: 'app-ews-device',
    component: () => import('../pages/app/ews-device/ews-devices.vue'),
  },
  {
    path: 'ews-device/:id',
    name: 'app-ews-device-view',
    component: () => import('../pages/app/ews-device/ews-device.vue'),
  },
  {
    path: 'ews-device/create',
    name: 'app-ews-device-create',
    component: () => import('../pages/app/ews-device/create-ews-device.vue'),
  },
  {
    path: 'ews-device/:id/edit',
    name: 'app-ews-device-edit',
    component: () => import('../pages/app/ews-device/edit-ews-device.vue'),
  },
]

export default appEwsDeviceRoutes
