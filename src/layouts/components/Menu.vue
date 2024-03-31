<script setup>
import { useAuthStore } from '@/stores/auth'

import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const { user, checkAuth } = useAuthStore()

checkAuth()

// const is = {
//   return user.permissions
// }

const is = () => {
  return user.permissions
}
</script>

<template>
  <VerticalNavLink v-if="is(['dashboard'])" :item="{
    title: 'Dashboard',
    icon: 'bx-home',
    to: '/admin/dashboard',
  }" />

  <VerticalNavLink :item="{
    title: 'Ews Device',
    icon: 'bx-device-desktop',
    to: '/admin/ews-device',
  }" />

  <VerticalNavLink :item="{
    title: 'Ews Device Measurement',
  }" />

  <VerticalNavLink :item="{
    title: 'Client',
    // icon: 'bx-user',
    to: '/admin/client',
  }" />
</template>