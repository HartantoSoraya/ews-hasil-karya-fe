import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useEwsDeviceStore = defineStore({
  id: "ews-device",
  state: () => ({
    ewsDevices: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchEwsDevices() {
      try {
        this.loading = true

        const response = await axiosInstance.get("/ews-devices")

        this.ewsDevices = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchEwsDevice(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/ews-device/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createEwsDevice(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post("/ews-device", payload)

        this.success = response.data.message

        router.push({ name: "app-ews-device" })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateEwsDevice(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/ews-device/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: "app-ews-device" })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteEwsDevice(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/ews-device/${id}`)

        this.success = response.data.message

        this.fetchEwsDevices()
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
