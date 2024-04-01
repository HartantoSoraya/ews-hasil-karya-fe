import adminExampleRoutes from "./admin-example"
import adminEwsDeviceRoutes from "./app-ews-device"
import adminClientRoutes from "./admin-client"

const adminRoutes = [
  ...adminExampleRoutes,
  ...adminEwsDeviceRoutes,
  ...adminClientRoutes,
]

export default adminRoutes
