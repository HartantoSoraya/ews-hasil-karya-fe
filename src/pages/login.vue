<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const { loading, error } = storeToRefs(useAuthStore())
const { login } = useAuthStore()

const form = ref({
  email: '',
  password: '',
})

const isPasswordVisible = ref(false)

const onSubmit = () => {
  login(form.value)
}

onMounted(() => {
  error.value = null
  loading.value = false
  document.title = 'Login'
})
</script>

<template>
  <VDialog
    v-if="error && !error.email && !error.password"
    v-model="error"
    width="auto"
  >
    <VCard>
      <VCardText>
        {{ error }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          block
          @click="error = false"
        >
          OK
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      width="448"
    >
      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1 color-white">
          Early Warning System
        </h5>
        <p class="mb-0">
          Masuk ke akun anda
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="onSubmit">
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
                :error-messages="error && error.email ? [error.email] : []"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                :error-messages="error && error.password ? [error.password] : []"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VBtn
                block
                type="submit"
                class="mt-4"
              >
                {{ loading ? 'Loading...' : 'Masuk' }}
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" src="@core/scss/template/pages/page-auth.scss"></style>

<style scoped>
.auth-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff !important;
}

.color-white {
  color: #fff !important;
}

::placeholder {
  color: #fff !important;
}
</style>
