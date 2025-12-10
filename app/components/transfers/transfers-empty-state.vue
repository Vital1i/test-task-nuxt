<template>
  <div class="rounded-2xl flex flex-col items-center justify-center py-12 gap-3 text-text-muted dark:text-slate-400">
    <img :src="icon" alt="Empty" class="h-8 w-8 opacity-60 dark:opacity-70 dark:brightness-0 dark:invert" />
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

