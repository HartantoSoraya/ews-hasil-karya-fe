<script setup>
import { useEwsDeviceStore } from '@/stores/ews-device'
import { useRegionStore } from '@/stores/region'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useEwsDeviceStore())
const { createEwsDevice } = useEwsDeviceStore()

const { provinces, regencies, districts, subdistricts } = storeToRefs(useRegionStore())
const { fetchProvinces, fetchRegencies, fetchDistricts, fetchSubdistricts } = useRegionStore()

fetchProvinces()

const code = ref('AUTO')
const name = ref('')
const type = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const address = ref('')
const description = ref('')

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  type.value = ''
  province.value = ''
  regency.value = ''
  district.value = ''
  subdistrict.value = ''
  address.value = ''
  description.value = ''
}

const handleSubmit = () => {
  const provinceName = provinces.value.find(item => item.id === province.value)?.name
  const regencyName = regencies.value.find(item => item.id === regency.value)?.name
  const districtName = districts.value.find(item => item.id === district.value)?.name
  const subdistrictName = subdistricts.value.find(item => item.id === subdistrict.value)?.name

  createEwsDevice({
    code: code.value,
    name: name.value,
    type: type.value,
    province: provinceName,
    regency: regencyName,
    district: districtName,
    subdistrict: subdistrictName,
    address: address.value,
    description: description.value,
  })
}

onMounted(() => {
  document.title = 'Tambah EWS Device'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})

watch(province, value => {
  fetchRegencies(value)
})

watch(regency, value => {
  fetchDistricts(value)
})

watch(district, value => {
  fetchSubdistricts(value)
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Ews Device
      </h2>

      <VBtn
        :to="{ name: 'app-ews-device' }"
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
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="type"
                label="Tipe"
                :error-messages="error && error.type ? [error.type] : []"
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

            <VCol cols="12">
              <VTextarea
                v-model="address"
                label="Alamat"
                :error-messages="error && error.address ? [error.address] : []"
              />
            </VCol>

            <VCol cols="12">
              <VTextarea
                v-model="description"
                label="Deskripsi"
                :error-messages="error && error.description ? [error.description] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
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

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
