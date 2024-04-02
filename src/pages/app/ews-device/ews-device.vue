<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        EWS Device
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
        <VForm>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode EWS Device"
                :error-messages="error && error.code ? [error.code] : []"
                :disabled="loading"
                :loading="loading"
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
                placeholder="Nama EWS Device"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="type"
                label="Tipe"
                placeholder="Tipe EWS Device"
                :error-messages="error && error.type ? [error.type] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="province"
                label="Provinsi"
                placeholder="Provinsi EWS Device"
                :error-messages="error && error.province ? [error.province] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="regency"
                label="Kabupaten/Kota"
                placeholder="Kabupaten/Kota EWS Device"
                :error-messages="error && error.regency ? [error.regency] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="district"
                label="Kecamatan"
                placeholder="Kecamatan EWS Device"
                :error-messages="error && error.district ? [error.district] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="subdistrict"
                label="Kelurahan/Desa"
                placeholder="Kelurahan/Desa EWS Device"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="description"
                label="Deskripsi"
                placeholder="Deskripsi EWS Device"
                :error-messages="error && error.description ? [error.description] : []"
                :disabled="loading"
                :loading="loading"
                readonly
              />
            </VCol>

            <VCol cols="12">
              <label>History Alamat</label>
              <EasyDataTable
                :headers="addressHistoryHeaders"
                :items="address_histories"
                :loading="loading"
                :no-data-text="loading ? 'Memuat data...' : 'Tidak ada data'"
                :no-results-text="loading ? 'Memuat data...' : 'Tidak ada data'"
                :loading-text="loading ? 'Memuat data...' : 'Tidak ada data'"
                :error-text="error ? 'Terjadi kesalahan saat memuat data' : 'Tidak ada data'"
                show-index
                class="data-table"
              />
              <template #item-created_at="item">
                {{ item.created_at }}
              </template>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useEwsDeviceStore } from '@/stores/ews-device'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const addressHistoryHeaders = [
  {
    text: 'Tanggal',
    value: 'created_at',
  },
  {
    text: 'Provinsi',
    value: 'province',
  },
  {
    text: 'Kabupaten/Kota',
    value: 'regency',
  },
  {
    text: 'Kecamatan',
    value: 'district',
  },
  {
    text: 'Kelurahan/Desa',
    value: 'subdistrict',
  },
  {
    text: 'Alamat',
    value: 'address',
  },
  {
    text: 'Deskripsi',
    value: 'description',
  },
]

const route = useRoute()

const { loading, error } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevice, updateEwsDevice } = useEwsDeviceStore()

const ewsDeviceId = route.params.id

const code = ref('')
const name = ref('')
const type = ref('')
const province = ref('')
const regency = ref('')
const district = ref('')
const subdistrict = ref('')
const address = ref('')
const description = ref('')
const address_histories = ref([])

const fetchEwsDeviceData = async () => {
  try {
    const ewsDevice = await fetchEwsDevice(ewsDeviceId)

    code.value = ewsDevice.code
    name.value = ewsDevice.name
    type.value = ewsDevice.type
    province.value = ewsDevice.province
    regency.value = ewsDevice.regency
    district.value = ewsDevice.district
    subdistrict.value = ewsDevice.subdistrict
    address.value = ewsDevice.address
    description.value = ewsDevice.description
    address_histories.value = ewsDevice.address_histories
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchEwsDeviceData()

  document.title = 'Ubah EWS Device'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
