<template>
  <div class="card p-4 sm:p-5 md:p-6 space-y-4">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div class="flex items-center overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 scrollbar-hide">
        <div class="flex items-center border border-filter-border dark:border-slate-600 rounded-full overflow-hidden divide-x divide-filter-border dark:divide-slate-600 min-w-max">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="flex items-center justify-center gap-2 px-4 sm:px-5 py-[2px] text-sm sm:text-base-tall font-medium text-center align-middle transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 font-jakarta whitespace-nowrap"
            :class="activeFilter === tab.key ? 'bg-filter-active-bg dark:bg-brand-900/30 text-text-primary dark:text-text-primary hover:bg-filter-active-hover dark:hover:bg-brand-900/50' : 'text-text-primary dark:text-slate-200 bg-transparent hover:bg-filter-hover dark:hover:bg-slate-700/50 hover:text-text-primary dark:hover:text-slate-100'"
            @click="activeFilter = tab.key"
          >
            <span v-if="activeFilter === tab.key" class="text-filter-active-indicator dark:text-brand-400 text-base sm:text-lg">✓</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>
      </div>
      <button
        type="button"
        class="pill pill-ghost border border-border/80 dark:border-slate-700 px-3 py-[6px] text-sm sm:text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 bg-pill-bg dark:bg-slate-800 hover:bg-pill-hover dark:hover:bg-slate-700 hover:border-brand-200 dark:hover:border-brand-600 text-text-secondary dark:text-slate-300 font-jakarta whitespace-nowrap flex-shrink-0 self-start sm:self-auto"
      >
        Last 7 days
      </button>
    </div>

    <!-- Desktop/Tablet Table View -->
    <div class="hidden sm:block overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0 scrollbar-hide">
      <div class="bg-table-bg dark:bg-slate-900/50 rounded-2xl p-2">
        <div v-if="!filtered.length" class="p-8">
          <TransfersEmptyState :icon="clockIcon" message="You don't have any recent transfers yet." />
        </div>
        <table v-else class="w-full text-sm bg-transparent rounded-2xl overflow-hidden">
          <thead class="border-b border-table-border dark:border-slate-700">
            <tr class="text-left text-text-muted dark:text-slate-400">
              <th
                v-for="col in columns"
                :key="col.key"
                class="py-[10px] px-3 sm:px-4 font-semibold whitespace-nowrap"
                :class="col.align === 'center' ? 'text-center' : ''"
              >
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-table-border dark:divide-slate-700">
            <tr v-for="transfer in filtered" :key="transfer.id" class="hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <td v-for="col in columns" :key="col.key" class="py-[18px] px-3 sm:px-4 text-slate-900 dark:text-slate-200 whitespace-nowrap" :class="col.align === 'center' ? 'text-center' : ''">
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
      </div>
    </div>

    <!-- Mobile Card View -->
    <div v-if="!filtered.length" class="sm:hidden">
      <TransfersEmptyState :icon="clockIcon" message="You don't have any recent transfers yet." />
    </div>
    <div v-else class="grid gap-3 sm:hidden">
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
import { StatusBadge, TransfersEmptyState } from '@/components/transfers'
import clockIcon from '@/../assets/img/clock.svg'
import type { Transfer, TransferFilter } from '@/types/transfers'
import { TRANSFER_TABS, TRANSFER_COLUMNS } from '@/mocks/transfers-table'

const props = defineProps<{
  transfers: Transfer[]
}>()

const tabs = TRANSFER_TABS
const columns = TRANSFER_COLUMNS

const activeFilter = ref<TransferFilter>('all')

const filtered = computed(() => {
  if (activeFilter.value === 'all') return props.transfers
  return props.transfers.filter((t) => t.method === activeFilter.value)
})

const formatCurrency = (value: number) => {
  const formatted = Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return value < 0 ? `- ${formatted}` : formatted
}
</script>
