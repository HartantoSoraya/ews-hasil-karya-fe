import adminExampleRoutes from "./admin-example"
import adminEwsDeviceRoutes from "./app-ews-device"
import adminClientRoutes from "./app-client"

const adminRoutes = [
  ...adminExampleRoutes,
  ...adminEwsDeviceRoutes,
  ...adminClientRoutes,
]

export default adminRoutes
