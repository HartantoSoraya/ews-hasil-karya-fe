<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Ubah Client
      </h2>

      <VBtn
        :to="{ name: 'app-client' }"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode Client"
                :error-messages="error && error.code ? [error.code] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Client"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="email"
                label="Email"
                placeholder="Email Client"
                :error-messages="error && error.email ? [error.email] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="password"
                label="Password"
                placeholder="Password Client"
                :error-messages="error && error.password ? [error.password] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="province"
                label="Provinsi"
                :items="provinces"
                :error-messages="error && error.province ? [error.province] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="regency"
                label="Kabupaten/Kota"
                :items="regencies"
                :error-messages="error && error.regency ? [error.regency] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="district"
                label="Kecamatan"
                :items="districts"
                :error-messages="error && error.district ? [error.district] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="subdistrict"
                label="Kelurahan/Desa"
                :items="subdistricts"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="address"
                label="Alamat"
                placeholder="Alamat Client"
                :error-messages="error && error.address ? [error.address] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="phone"
                label="Telepon"
                placeholder="Telepon Client"
                :error-messages="error && error.phone ? [error.phone] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="ews_devices"
                label="EWS Device"
                :items="ewsDevices"
                :error-messages="error && error.ews_devices ? [error.ews_devices] : []"
                :item-title="item => item.name"
                :item-value="item => item.id"
                multiple
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useClientStore } from '@/stores/client'
import { useRegionStore } from '@/stores/region'
import { useEwsDeviceStore } from '@/stores/ews-device'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useClientStore())
const { fetchClient, updateClient } = useClientStore()

const { ewsDevices } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevices } = useEwsDeviceStore()

fetchEwsDevices()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

fetchProvinces()

const clientId = route.params.id

const code = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const address = ref('')
const phone = ref('')
const is_active = ref(true)
const ews_devices = ref([])

const fetchClientData = async () => {
  try {
    const client = await fetchClient(clientId)

    code.value = client.code
    name.value = client.name
    email.value = client.email
   
    province.value = provinces.value.find(item => item.name === client.province)?.id

    await fetchRegencies(province.value)

    regency.value = regencies.value.find(item => item.name === client.regency)?.id

    await fetchDistricts(regency.value)

    district.value = districts.value.find(item => item.name === client.district)?.id

    await fetchSubdistricts(district.value)

    subdistrict.value = subdistricts.value.find(item => item.name === client.subdistrict)?.id

    address.value = client.address
    phone.value = client.phone
    is_active.value = client.is_active ? true : false
    ews_devices.value = client.ews_devices
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchClientData()

  document.title = 'Ubah Client'
})

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.name
  const regencyName = regencies.value.find(item => item.id === regency.value)?.name
  const districtName = districts.value.find(item => item.id === district.value)?.name
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.name

  updateClient({
    id: clientId,
    code: code.value,
    name: name.value,
    password: password.value,
    province: provinceName,
    regency: regencyName,
    district: districtName,
    subdistrict: subdistrictName,
    address: address.value,
    phone: phone.value,
    is_active: is_active.value,
    ews_devices: ews_devices.value,
  })
}

fetchProvinces()

watch(province, value => {
  fetchRegencies(value)
})

watch(regency, value => {
  fetchDistricts(value)
})

watch(district, value => {
  fetchSubdistricts(value)
})


const handleReset = () => {
  fetchClientData()
}
</script>

<style lang="scss">
.v-row {
	margin: 0px !important;
}
</style>
