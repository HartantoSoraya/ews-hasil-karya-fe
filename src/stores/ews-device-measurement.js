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
    async fetchEwsDeviceMeasurements(ews_device_id, start_date, end_date) {
      try {

        console.log(ews_device_id, start_date, end_date)
        this.loading = true

        const response = await axiosInstance.get("/ews-device-measurements", {
          params: {
            ews_device_id: ews_device_id,
            start_date: start_date,
            end_date: end_date,
          },
        })
        
        response.data.data.forEach(item => {
          item.created_at = new Date(item.created_at).toLocaleString()
        })
        

        this.ewsDeviceMeasurments = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
