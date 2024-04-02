import appClientRoutes from "./app-client"
import appEwsDeviceRoutes from "./app-ews-device"

const appRoutes = [
  ...appEwsDeviceRoutes,
  ...appClientRoutes,
]

export default appRoutes
