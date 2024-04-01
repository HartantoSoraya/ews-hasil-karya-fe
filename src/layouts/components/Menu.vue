<script setup>
import { useAuthStore } from '@/stores/auth'

import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const { user, checkAuth } = useAuthStore()

checkAuth()
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      icon: 'bx-home',
      to: '/app/dashboard',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Ews Device',
      icon: 'bx-devices',
      to: '/app/ews-device',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Ews Device Measurement',
      icon: 'bx-chart',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Client',
      icon: 'bx-user',
      to: '/admin/client',
    }"
  />
</template>
