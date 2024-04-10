import appClientRoutes from "./app-client"
import appEwsDeviceRoutes from "./app-ews-device"
import appEwsDeviceMeasurementRoutes from "./app-ews-device-measurement"

const appRoutes = [
  ...appEwsDeviceRoutes,
  ...appEwsDeviceMeasurementRoutes,
  ...appClientRoutes,
]

export default appRoutes
