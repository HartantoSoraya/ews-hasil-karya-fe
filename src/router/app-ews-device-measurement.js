const appEwsDeviceMeasurementRoutes = [
  {
    path: '/app/ews-device-measurement',
    name: 'app-ews-device-measurement',
    component: () => import('../pages/app/ews-device-measurement/ews-device-measurements.vue'),
    meta: { permissions: ['ews-device-measurement-list'] },
  },
]

export default appEwsDeviceMeasurementRoutes
