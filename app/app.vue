<template>
  <div class="min-h-screen bg-surface dark:bg-slate-950 text-slate-900 dark:text-slate-50">
    <TopHeader />
    <div class="pt-12">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/layout/TopHeader.vue'
</script>
