<script setup>
import { useEwsDeviceMeasurementStore } from '@/stores/ews-device-measurement'
import { useEwsDeviceStore } from '@/stores/ews-device'


const headers = [
  {
    text: 'Tanggal',
    align: 'start',
    sortable: false,
    value: 'created_at',
  },
  {
    text: 'Getaran',
    value: 'vibration_value',
  },
  {
    text: 'Suara',
    value: 'db_value',
  },
]

const selectedDevice = ref(null)
const startDate = ref(null)
const endDate = ref(null)

const { ewsDeviceMeasurments, loading, error, success } = storeToRefs(useEwsDeviceMeasurementStore())
const { fetchEwsDeviceMeasurements } = useEwsDeviceMeasurementStore()



const { ewsDevices } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevices } = useEwsDeviceStore()

fetchEwsDevices()

onMounted(() => {
  document.title = 'EWS Device'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="5"
    >
      <VSelect
        v-model="selectedDevice"
        :items="ewsDevices"
        :item-title="item => item.name"
        :item-value="item => item.id"
        label="Pilih Device"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VTextField
        v-model="startDate"
        label="Dari Tanggal"
        type="date"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VTextField
        v-model="endDate"
        label="Sampai Tanggal"
        type="date"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="1"
    >
      <button
        class="btn-search"
        @click="fetchEwsDeviceMeasurements(selectedDevice, startDate, endDate)"
      >
        <VIcon>
          mdi-magnify
        </VIcon>
      </button>
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Log Pengukuran EWS Device
      </h2>
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="ewsDeviceMeasurments"
          :loading="loading"
          buttons-pagination
          show-index
          class="data-table"
        />
      </VCard>
    </VCol>
  </VRow>
</template>


<style>
.btn-search {
  background-color: rgb(105, 108, 255);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  height: 100%;
}
</style>
