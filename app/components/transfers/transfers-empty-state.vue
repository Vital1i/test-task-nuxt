<template>
  <div class="rounded-2xl flex flex-col items-center justify-center py-12 gap-3 text-text-muted">
    <img :src="icon" alt="Empty" class="h-8 w-8" />
    <p class="text-lg font-medium font-jakarta">
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  message: string
}>()
</script>

