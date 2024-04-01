<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import { can } from '@/helpers/permissionHelper'
</script>

<template>
  <VerticalNavLink
    v-if="can('dashboard')"
    :item="{
      title: 'Dashboard',
      icon: 'bx-home', to: '/app/dashboard',
    }"
  />

  <VerticalNavLink
    v-if="can('ews-device-list')"
    :item="{
      title: 'Ews Device',
      icon: 'bx-devices',
      to: '/app/ews-device',
    }"
  />

  <VerticalNavLink
    v-if="can('ews-device-measurement-list')"
    :item="{
      title: 'Ews Device Measurement',
      icon: 'bx-chart',
    }"
  />

  <VerticalNavLink
    v-if="can('client-list')"
    :item="{
      title: 'Client',
      icon: 'bx-user',
      to: '/app/client',
    }"
  />
</template>
