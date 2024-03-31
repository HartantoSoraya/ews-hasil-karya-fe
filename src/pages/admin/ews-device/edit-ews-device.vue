<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Ubah EWS Device
      </h2>

      <VBtn :to="{ name: 'admin-ews-device' }" color="primary">
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12">
              <VTextField v-model="code" label="Kode" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="name" label="Nama" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="type" label="Tipe" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="addresses" label="Alamat" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn color="primary" type="submit" :loading="loading" :disabled="loading">
                Simpan
              </VBtn>
              <VBtn color="error" @click="handleReset" :disabled="loading">
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
import { useEwsDeviceStore } from '@/stores/ews-device'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

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
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchEwsDeviceData()

  document.title = 'Ubah EWS Device'
})

const handleSubmit = () => {
  updateEwsDevice({
    id: ewsDeviceId,
    code: code.value,
    name: name.value,
    type: type.value,
    province: province.value,
    regency: regency.value,
    district: district.value,
    subdistrict: subdistrict.value,
    address: address.value,
    description: description.value,
  })
}

const handleReset = () => {
  fetchEwsDeviceData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>