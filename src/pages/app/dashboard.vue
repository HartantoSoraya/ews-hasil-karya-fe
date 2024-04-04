<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import 'chartjs-plugin-datalabels'
import { useAuthStore } from "@/stores/auth"
import { useEwsDeviceStore } from "@/stores/ews-device"
import { useEwsDeviceMeasurementStore } from "@/stores/ews-device-measurement"

const { user } = useAuthStore()

const selectedDevice = ref(null)

const { ewsDevices } = storeToRefs(useEwsDeviceStore())
const { fetchEwsDevices } = useEwsDeviceStore()

fetchEwsDevices()


const { getChartData } = useEwsDeviceMeasurementStore()

const chartCanvas = ref(null)
let chart = null
let timer = null


const fetchData = async () => {
  if (selectedDevice.value) {
    const chartData = await getChartData(selectedDevice.value)

    const data = chartData.map(item => {
      return {
        ...item,
        time: formatTime(item.time),
      }
    })
    
    updateChart(data)

    const { vibration_value, db_value, time } = chartData[0]
    const vibrationText = document.querySelectorAll('VText')[0]
    const dbText = document.querySelectorAll('VText')[1]
    const timeText = document.querySelectorAll('VText')[2]

    vibrationText.innerText = `${vibration_value} mm/s`
    dbText.innerText = `${db_value} dB`
    timeText.innerText = time
  }
}


const updateChart = latestData => {
  const { vibration_value, db_value, time } = latestData[0]

  if (!chart) {
    chart = new Chart(chartCanvas.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: [time],
        datasets: [{
          label: 'Vibration Value',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          tension: 0.5,
          data: [vibration_value],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart',
        },
      },
    })
  } else {
    chart.data.labels.push(time)
    chart.data.datasets[0].data.push(vibration_value)
    chart.update()
  }
}

function formatTime(waktu) {
  return waktu.split(' ')[1]
}

onMounted(() => {
  fetchData()
  timer = setInterval(fetchData, 3000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>


<template>
  <VContainer>
    <VRow>
      <VCol md="12">
        <h1>Selamat datang, {{ user.name }}</h1>
      </VCol>

      <VCol
        sm="12"
        md="6"
        lg="3"
      >
        <VCard>
          <VCardTitle>
            Total Device Dimiliki
          </VCardTitle>
          <VCardText>
            {{ ewsDevices.length }}
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow>
      <VCol>
        <VSelect
          v-model="selectedDevice"
          :items="ewsDevices"
          :item-title="item => item.name"
          :item-value="item => item.code"
          label="Pilih Device"
          variant="solo"
        />
      </VCol>
    </VRow>
    
    <VRow>
      <VCol cols="9">
        <VCard>
          <VCardTitle>
            Chart Grafik Getaran
          </VCardTitle>
          <VCardBody>
            <canvas ref="chartCanvas" />
          </VCardBody>
        </VCard>
      </VCol>

      <VCol
        cols="3"
        class="d-flex flex-column justify-content-between"
      >
        <VCard>
          <VCardTitle>
            Detail Getaran
          </VCardTitle>
          <VCardBody>
            <VRow class="p-5">
              <VCol cols="12">
                <VText class="fw-bold">
                  0 mm/s
                </VText>
              </VCol>
              <VCol cols="12">
                <VText class="fw-bold">
                  0 dB
                </VText>
              </VCol>
              <VCol cols="12">
                <VText class="fw-bold">
                  -
                </VText>
              </VCol>
            </VRow>
          </VCardBody>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
canvas {
  width: 100%;
  height: 300px;
}

.p-5 {
  padding: 1.25rem !important;
}
</style>
