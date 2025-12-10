<template>
  <div class="card p-4 md:p-6 space-y-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div class="flex items-center">
        <div class="flex items-center border border-filter-border dark:border-slate-600 rounded-full overflow-hidden divide-x divide-filter-border dark:divide-slate-600">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="flex items-center justify-center gap-2 px-5 py-[2px] text-base-tall font-medium text-center align-middle transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 font-jakarta"
            :class="activeFilter === tab.key ? 'bg-filter-active-bg dark:bg-brand-900/30 text-text-primary dark:text-text-primary hover:bg-filter-active-hover dark:hover:bg-brand-900/50' : 'text-text-primary dark:text-slate-200 bg-transparent hover:bg-filter-hover dark:hover:bg-slate-700/50 hover:text-text-primary dark:hover:text-slate-100'"
            @click="activeFilter = tab.key"
          >
            <span v-if="activeFilter === tab.key" class="text-filter-active-indicator dark:text-brand-400 text-lg">✓</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>
      </div>
      <button
        type="button"
        class="pill pill-ghost border border-border/80 dark:border-slate-700 px-3 py-[6px] text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 bg-pill-bg dark:bg-slate-800 hover:bg-pill-hover dark:hover:bg-slate-700 hover:border-brand-200 dark:hover:border-brand-600 focus-visible:outline-brand-500/80 text-text-secondary dark:text-slate-300 font-jakarta"
      >
        Last 7 days
      </button>
    </div>

    <div class="hidden md:block overflow-x-auto">
      <div class="bg-table-bg dark:bg-slate-900/50 rounded-2xl p-2">
        <table class="min-w-full text-sm bg-transparent rounded-2xl overflow-hidden">
          <thead class="border-b border-table-border dark:border-slate-700">
            <tr class="text-left text-text-muted dark:text-slate-400">
              <th
                v-for="col in columns"
                :key="col.key"
                class="py-[10px] px-4 font-semibold"
                :class="col.align === 'center' ? 'text-center' : ''"
              >
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody v-if="filtered.length" class="divide-y divide-table-border dark:divide-slate-700">
            <tr v-for="transfer in filtered" :key="transfer.id" class="hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <td v-for="col in columns" :key="col.key" class="py-[18px] px-4 text-slate-900 dark:text-slate-200" :class="col.align === 'center' ? 'text-center' : ''">
                <template v-if="col.key === 'amount'">
                  <span class="font-semibold" :class="transfer.amount < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-slate-50'">
                    {{ formatCurrency(transfer.amount) }}
                  </span>
                </template>
                <template v-else-if="col.key === 'status'">
                  <StatusBadge :status="transfer.status" />
                </template>
                <template v-else>
                  {{ transfer[col.key] }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
        <TransfersEmptyState v-if="!filtered.length" :icon="clockIcon" message="You don’t have any recent transfers yet." />
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
            <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ transfer.type }}</p>
            <p class="text-xs text-muted dark:text-slate-400 mt-0.5">{{ transfer.date }}</p>
          </div>
          <StatusBadge :status="transfer.status" />
        </div>
        <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p class="text-muted dark:text-slate-400">Method</p>
            <p class="font-semibold text-slate-900 dark:text-slate-100">{{ transfer.method }}</p>
          </div>
          <div>
            <p class="text-muted dark:text-slate-400">Account</p>
            <p class="font-semibold text-slate-900 dark:text-slate-100">{{ transfer.account }}</p>
          </div>
          <div>
            <p class="text-muted dark:text-slate-400">Amount</p>
            <p class="font-semibold" :class="transfer.amount < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-slate-50'">
              {{ formatCurrency(transfer.amount) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusBadge from '@/components/transfers/status-badge.vue'
import TransfersEmptyState from '@/components/transfers/transfers-empty-state.vue'
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

const columns = [
  { key: 'date', label: 'Date', align: 'left' },
  { key: 'type', label: 'Type', align: 'left' },
  { key: 'method', label: 'Method', align: 'left' },
  { key: 'account', label: 'Account', align: 'left' },
  { key: 'amount', label: 'Amount ($)', align: 'left' },
  { key: 'status', label: 'Status', align: 'center' }
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
