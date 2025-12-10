<template>
  <div class="min-h-screen flex bg-surface dark:bg-slate-950">
    <SidebarNav />

    <main class="flex-1 flex flex-col">
      <header>
        <div class="border-b border-border/70 dark:border-slate-800 mx-4 md:mx-6 lg:mx-8 py-4">
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-8">
                <h1
                  class="text-[24px] leading-[32px] font-medium text-[#1B1B21]"
                  style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0;"
                >
                  Money Transfers
                </h1>
                <div class="flex items-center gap-2 overflow-x-auto">
                  <button
                    v-for="tab in headerTabs"
                    :key="tab"
                    type="button"
                    class="pill text-[14px] leading-[20px] font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    :class="tab === 'Overview' ? 'pill-active px-4 py-[10px] font-semibold' : 'pill-ghost'"
                    style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.1px;"
                  >
                    {{ tab }}
                  </button>
                </div>
              </div>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full border border-border/70 dark:border-slate-700 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                @click="toggleTheme"
              >
                <span class="h-5 w-5 rounded-full border border-border/70 dark:border-slate-700 flex items-center justify-center text-xs">
                  {{ isDark ? '🌙' : '☀️' }}
                </span>
                <span>{{ isDark ? 'Dark' : 'Light' }} mode</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section class="px-4 md:px-6 lg:px-8 py-6 space-y-12">
        <div>
          <h2
            class="text-[22px] leading-[28px] font-medium text-[#1B1B21] mb-6"
            style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0;"
          >
            Account balance
          </h2>
          <BalanceChart :labels="weeks" :values="balances" />
        </div>
        <div>
          <h2
            class="text-[22px] leading-[28px] font-medium text-[#1B1B21] mb-6"
            style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0;"
          >
            Connected Accounts
          </h2>
          <ConnectedAccounts :wire-accounts="wireAccounts" :ach-accounts="achAccounts" />
        </div>

        <div>
          <h2
            class="text-[22px] leading-[28px] font-medium text-[#1B1B21] mb-6"
            style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0;"
          >
            Recent Transfers
          </h2>
          <TransfersTable :transfers="transfers" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import SidebarNav from '@/components/layout/SidebarNav.vue'
import BalanceChart from '@/components/transfers/BalanceChart.vue'
import ConnectedAccounts from '@/components/transfers/ConnectedAccounts.vue'
import TransfersTable from '@/components/transfers/TransfersTable.vue'

definePageMeta({
  title: 'Money Transfers — Overview'
})

const headerTabs = ['Overview', 'Deposit', 'Withdraw', 'History']

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12']
const balances = [22, 14, 26, 20, 23, 9, 25, 26, 24, 19, 27, 28]

const wireAccounts = [
  { id: 'wire-1', name: 'BMO Harris Bank', last4: '6222' }
]

const achAccounts = [
  { id: 'ach-1', name: 'Bank of America', last4: '3456' },
  { id: 'ach-2', name: 'Chase', last4: '1122' }
]

const transfers = [
  {
    id: 't-1',
    date: 'Nov 4, 2025 12:15 PM',
    type: 'Deposit',
    method: 'ACH',
    account: '****3456',
    amount: 40000,
    status: 'Pending'
  },
  {
    id: 't-2',
    date: 'Nov 3, 2025 4:16 PM',
    type: 'Withdrawal',
    method: 'Wire',
    account: '****6222',
    amount: -8888.08,
    status: 'Completed'
  },
  {
    id: 't-3',
    date: 'Nov 3, 2025 3:23 PM',
    type: 'Withdrawal',
    method: 'Wire',
    account: '****6222',
    amount: -8888.08,
    status: 'Rejected'
  }
]

const isDark = useState('isDarkMode', () => false)

const syncThemeClass = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  syncThemeClass()
}

onMounted(syncThemeClass)
</script>

