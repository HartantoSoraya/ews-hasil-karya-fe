<script setup>
import { useClientStore } from '@/stores/client'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useClientStore())
const { createClient } = useClientStore()

const code = ref('AUTO')
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

const handleReset = () => {
  code.value = 'AUTO'
  name.value = ''
  email.value = ''
  password.value = ''
  province.value = ''
  regency.value = ''
  district.value = ''
  subdistrict.value = ''
  address.value = ''
  phone.value = ''
  is_active.value = true
  ews_devices.value = []
}

const handleSubmit = () => {
  createClient({
    code: code.value,
    name: name.value,
    email: email.value,
    password: password.value,
    province: province.value,
    regency: regency.value,
    district: district.value,
    subdistrict: subdistrict.value,
    address: address.value,
    phone: phone.value,
    is_active: Boolean(is_active.value),
    ews_devices: ews_devices.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Client'
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
        Tambah Client
      </h2>

      <VBtn to="/admin/client" color="primary">
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Kode" placeholder="Kode Client"
                :error-messages="error && error.code ? [error.code] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Nama" placeholder="Nama Client"
                :error-messages="error && error.name ? [error.name] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="email" label="Email" placeholder="Email Client"
                :error-messages="error && error.email ? [error.email] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="password" label="Password" placeholder="Password Client"
                :error-messages="error && error.password ? [error.password] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="province" label="Provinsi" placeholder="Provinsi Client"
                :error-messages="error && error.province ? [error.province] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="regency" label="Kabupaten/Kota" placeholder="Kabupaten/Kota Client"
                :error-messages="error && error.regency ? [error.regency] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="district" label="Kecamatan" placeholder="Kecamatan Client"
                :error-messages="error && error.district ? [error.district] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="subdistrict" label="Kelurahan/Desa" placeholder="Kelurahan/Desa Client"
                :error-messages="error && error.subdistrict ? [error.subdistrict] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="address" label="Alamat" placeholder="Alamat Client"
                :error-messages="error && error.address ? [error.address] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="phone" label="Telepon" placeholder="Telepon Client"
                :error-messages="error && error.phone ? [error.phone] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VSwitch v-model="is_active" label="Aktif" />
            </VCol>

            <VCol cols="12" md="6">
              <!-- <VSelect v-model="ews_devices" label="Perangkat EWS" placeholder="Perangkat EWS Client"
                  :items="ews_devices" item-text="name" item-value="id" multiple /> -->
              <VSelect v-model="ews_devices" label="Perangkat EWS" placeholder="Perangkat EWS Client"
                :error-messages="error && error.ews_devices ? [error.ews_devices] : []" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
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