import { defineStore } from 'pinia'

export const useRegionStore = defineStore({
  id: 'region',
  state: () => ({
    provinces: [],
    regencies: [],
    districts: [],
    subdistricts: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchProvinces() {
      try {
        this.loading = true

        const response = await fetch('https://tukang-web.github.io/api-wilayah-indonesia/api/provinces.json')
        const data = await response.json()

        this.provinces = data
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies(provinceId) {
      try {
        this.loading = true

        const response = await fetch(`https://tukang-web.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
        const data = await response.json()

        this.regencies = data
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchDistricts(regencyId) {
      try {
        this.loading = true

        const response = await fetch(`https://tukang-web.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`)
        const data = await response.json()

        this.districts = data
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchSubdistricts(districtId) {
      try {
        this.loading = true

        const response = await fetch(`https://tukang-web.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`)
        const data = await response.json()

        this.subdistricts = data
      } catch (error) {
        console.error(error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})
