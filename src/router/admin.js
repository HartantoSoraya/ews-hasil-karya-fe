import adminExampleRoutes from "./admin-example"
import adminEwsDeviceRoutes from "./admin-ews-device"
import adminClientRoutes from "./admin-client"

const adminRoutes = [
  ...adminExampleRoutes,
  ...adminEwsDeviceRoutes,
  ...adminClientRoutes,
]

export default adminRoutes
