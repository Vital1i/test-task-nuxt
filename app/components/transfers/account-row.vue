<template>
  <div
    class="flex items-center justify-between rounded-[16px] border border-border/70 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pr-6 pl-4"
  >
    <div class="flex items-center gap-3 flex-1">
      <span class="h-8 w-8 min-w-[32px] min-h-[32px] rounded-full bg-[#1C40BE] text-white flex items-center justify-center text-sm font-semibold">
        {{ initial }}
      </span>
      <div class="leading-tight flex w-full items-center justify-between">
        <p
          class="text-[14px] leading-[20px] font-medium text-[#1B1B21]"
          style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.1px;"
        >
          {{ account.name }}
        </p>
        <p
          class="text-[14px] leading-[20px] font-medium text-[#1B1B21]"
          style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.1px;"
        >
          ****{{ account.last4 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Account = {
  id: string
  name: string
  last4: string
}

const props = defineProps<{
  account: Account
}>()

const initial = computed(() => props.account.name.charAt(0).toUpperCase())
</script>

