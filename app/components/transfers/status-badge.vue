<template>
  <span
    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
    :class="badgeClass"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: 'Pending' | 'Completed' | 'Rejected'
}>()

const badgeClass = computed(() => {
  if (props.status === 'Completed') {
    return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200'
  }
  if (props.status === 'Rejected') {
    return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200'
  }
  return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-100'
})

const label = computed(() => props.status)
</script>

