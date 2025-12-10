<template>
  <div class="card p-4 md:p-6 space-y-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div class="flex items-center">
        <div class="flex items-center border border-[#767680] rounded-full overflow-hidden divide-x divide-[#767680]">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="flex items-center justify-center gap-2 px-5 py-[2px] text-[14px] leading-[28px] font-medium text-center align-middle transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            :class="activeFilter === tab.key ? 'bg-[#CFE5F8] text-[#1B1B21]' : 'text-[#1B1B21] bg-transparent'"
            style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.1px; border-color: #767680;"
            @click="activeFilter = tab.key"
          >
            <span v-if="activeFilter === tab.key" class="text-[#2F63C8] text-lg">✓</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>
      </div>
      <button
        type="button"
        class="pill pill-ghost border border-border/80 dark:border-slate-700 px-3 py-[6px] text-[14px] leading-[20px] font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.1px; color: #45464F; background-color: #F5F2FA;"
      >
        Last 7 days
      </button>
    </div>

    <div class="hidden md:block overflow-x-auto">
      <div class="bg-[#F5F5F7] rounded-2xl p-2">
        <table class="min-w-full text-sm bg-transparent rounded-2xl overflow-hidden">
          <thead class="border-b border-[#C6C5D0] dark:border-slate-800">
            <tr class="text-left text-[#5B5C64]">
              <th class="py-[10px] px-4 font-semibold">Date</th>
              <th class="py-[10px] px-4 font-semibold">Type</th>
              <th class="py-[10px] px-4 font-semibold">Method</th>
              <th class="py-[10px] px-4 font-semibold">Account</th>
              <th class="py-[10px] px-4 font-semibold">Amount ($)</th>
              <th class="py-[10px] px-4 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody v-if="filtered.length" class="divide-y divide-[#C6C5D0] dark:divide-slate-800">
            <tr v-for="transfer in filtered" :key="transfer.id" class="hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <td class="py-[18px] px-4">{{ transfer.date }}</td>
              <td class="py-[18px] px-4">{{ transfer.type }}</td>
              <td class="py-[18px] px-4">{{ transfer.method }}</td>
              <td class="py-[18px] px-4">{{ transfer.account }}</td>
              <td class="py-[18px] px-4 font-semibold" :class="transfer.amount < 0 ? 'text-red-600' : 'text-slate-900 dark:text-slate-50'">
                {{ formatCurrency(transfer.amount) }}
              </td>
              <td class="py-[18px] px-4 text-center">
                <StatusBadge :status="transfer.status" />
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!filtered.length" class="rounded-2xl flex flex-col items-center justify-center py-12 gap-3 text-[#5B5C64]">
          <img :src="clockIcon" alt="No transfers" class="h-8 w-8" />
          <p class="text-[18px] leading-[24px] font-medium" style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;">
            You don’t have any recent transfers yet.
          </p>
        </div>
      </div>
    </div>

    <div class="grid gap-3 md:hidden">
      <div
        v-for="transfer in filtered"
        :key="transfer.id"
        class="border border-border/70 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-900"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold">{{ transfer.type }}</p>
            <p class="text-xs text-muted mt-0.5">{{ transfer.date }}</p>
          </div>
          <StatusBadge :status="transfer.status" />
        </div>
        <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p class="text-muted">Method</p>
            <p class="font-semibold">{{ transfer.method }}</p>
          </div>
          <div>
            <p class="text-muted">Account</p>
            <p class="font-semibold">{{ transfer.account }}</p>
          </div>
          <div>
            <p class="text-muted">Amount</p>
            <p class="font-semibold" :class="transfer.amount < 0 ? 'text-red-600' : 'text-slate-900 dark:text-slate-50'">
              {{ formatCurrency(transfer.amount) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusBadge from '@/components/transfers/StatusBadge.vue'
import clockIcon from '@/../assets/img/clock.svg'

type Transfer = {
  id: string
  date: string
  type: string
  method: 'Wire' | 'ACH'
  account: string
  amount: number
  status: 'Pending' | 'Completed' | 'Rejected'
}

const props = defineProps<{
  transfers: Transfer[]
}>()

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'Wire', label: 'Wire' },
  { key: 'ACH', label: 'ACH' }
]

const activeFilter = ref<'all' | 'Wire' | 'ACH'>('all')

const filtered = computed(() => {
  if (activeFilter.value === 'all') return props.transfers
  return props.transfers.filter((t) => t.method === activeFilter.value)
})

const formatCurrency = (value: number) => {
  const formatted = Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return value < 0 ? `- ${formatted}` : formatted
}
</script>
