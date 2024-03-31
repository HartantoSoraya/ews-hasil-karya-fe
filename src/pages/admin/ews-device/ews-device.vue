<template>
    <VRow>
        <VCol cols="12" class="d-flex justify-space-between align-items-center">
            <h2 class="mb-0">
                EWS Device
            </h2>

            <VBtn :to="{ name: 'admin-ews-device' }" color="primary">
                Kembali
            </VBtn>
        </VCol>

        <VCol cols="12">
            <VCard>
                <VForm>
                    <VRow>
                        <VCol cols="12" md="6">
                            <VTextField v-model="code" label="Kode" placeholder="Kode EWS Device"
                                :error-messages="error && error.code ? [error.code] : []" :disabled="loading" :loading="loading"
                                readonly />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField v-model="name" label="Nama" placeholder="Nama EWS Device"
                                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading"
                                readonly />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField v-model="type" label="Tipe" placeholder="Tipe EWS Device"
                                :error-messages="error && error.type ? [error.type] : []" :disabled="loading" :loading="loading"
                                readonly />
                        </VCol>

                        <VCol cols="12" md="6">
                            <VTextField v-model="addresses" label="Alamat" placeholder="Alamat EWS Device"
                                :error-messages="error && error.addresses ? [error.addresses] : []" :disabled="loading" :loading="loading"
                                readonly />
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
const addresses = ref([])

const fetchEwsDeviceData = async () => {
  try {
    const ewsDevice = await fetchEwsDevice(ewsDeviceId)

    code.value = ewsDevice.code
    name.value = ewsDevice.name
    type.value = ewsDevice.type
    addresses.value = ewsDevice.addresses
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
@/stores/ews-device