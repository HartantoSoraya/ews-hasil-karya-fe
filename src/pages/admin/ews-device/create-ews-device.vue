<script setup>
import { useEwsDeviceStore } from '@/stores/ews-device'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useEwsDeviceStore())
const { createEwsDevice } = useEwsDeviceStore()

const code = ref('AUTO')
const name = ref('')
const type = ref('')
const addresses = ref([])

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  type.value = ''
  addresses.value = []
}

const handleSubmit = () => {
  createEwsDevice({
    code: code.value,
    name: name.value,
    type: type.value,
    addresses: addresses.value,
  })
}

onMounted(() => {
  document.title = 'Tambah EWS Device'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Tambah Ews Device
      </h2>

      <VBtn to="/admin/ews-device" color="primary">
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Kode" readonly />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Nama" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="type" label="Tipe" />
            </VCol>

            <VCol cols="12" md="6">
              <VSelect v-model="addresses" label="Alamat" placeholder="Alamat EWS Client" multiple />
            </VCol>

            <VCol cols="12" md="6" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Simpan
              </VBtn>

              <VBtn color="secondary" variant="tonal" @click="handleReset">
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