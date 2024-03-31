<script setup>
import { useEwsDeviceStore } from '@/stores/ews-device'

const headers = [
  {
    text: 'Kode',
    align: 'start',
    sortable: false,
    value: 'code',
  },
  {
    text: 'Nama',
    value: 'name'
  },
  {
    text: 'Tipe',
    value: 'type'
  },
  {
    text: 'Alamat',
    value: 'addresses'
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { ewsDevices, loading, error, success } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevices, deleteEwsDevice } = useEwsDeviceStore()

fetchEwsDevices()

async function handleDeleteClient(ewsDevice) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus EWS Device ini?')

  if (confirmed) {
    await deleteEwsDevice(ewsDevice.id)
    fetchEwsDevices()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'EWS Device'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-id="success" v-model="success" max-width="400">
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn color="primary" text @click="success = false">
          Tutup
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        EWS Device
      </h2>

      <VBtn to="/admin/ews-device/create" color="primary">
        Tambah EWS Device
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Cari EWS Device" placeholder="Cari EWS Device" clearable :loading="loading"
        variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="ewsDevices" :loading="loading" :search-value="search"
          buttons-pagination :searchKeys="['code', 'name', 'type', 'addresses']" show-index class="data-table">
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-ews-device-edit', params: { id: item.id } }" color="primary" size="small"
              class="m-5">
              Ubah
            </VBtn>
            <VBtn :to="{ name: 'admin-ews-device-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="() => handleDeleteClient(item)">
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
@stores/ews-device