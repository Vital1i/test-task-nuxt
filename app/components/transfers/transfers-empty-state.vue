<template>
  <div class="rounded-2xl flex flex-col items-center justify-center py-12 gap-3 text-[#5B5C64]">
    <img :src="icon" alt="Empty" class="h-8 w-8" />
    <p
      class="text-[18px] leading-[24px] font-medium"
      style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;"
    >
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

