import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useEwsDeviceMeasurementStore = defineStore({
  id: "ews-device-measurement",
  state: () => ({
    ewsDeviceMeasurments: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async getChartData(code) {
      try {
        this.loading = true        

        const response = await axiosInstance.get("/ews-device-measurements/chart?code="+code)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async getEwsDeviceMeasurments() {
      try {
        this.loading = true

        const response = await axiosInstance.get("/ews-device-measurements")

        this.ewsDeviceMeasurments = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
