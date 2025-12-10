<template>
  <div class="min-h-screen flex bg-surface dark:bg-slate-950">
    <SidebarNav />

    <main class="flex-1 flex flex-col min-w-0">
      <header>
        <div class="border-b border-border/70 dark:border-slate-700 mx-4 sm:mx-6 lg:mx-8 py-3 sm:py-4">
          <div class="flex flex-col gap-3 sm:gap-4">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:gap-8 min-w-0">
                <h1 class="text-xl sm:text-2xl font-medium text-text-primary dark:text-slate-100 font-jakarta whitespace-nowrap">
                  Money Transfers
                </h1>
                <div class="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 scrollbar-hide">
                  <button
                    v-for="tab in headerTabs"
                    :key="tab"
                    type="button"
                    class="pill text-sm sm:text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 font-jakarta whitespace-nowrap flex-shrink-0"
                    :class="tab === 'Overview' ? 'pill-active px-3 sm:px-4 py-[8px] sm:py-[10px] font-semibold' : 'pill-ghost'"
                  >
                    {{ tab }}
                  </button>
                </div>
              </div>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full border border-border/70 dark:border-slate-700 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 whitespace-nowrap flex-shrink-0 self-start sm:self-auto"
                @click="toggleTheme"
              >
                <span class="h-4 w-4 sm:h-5 sm:w-5 rounded-full border border-border/70 dark:border-slate-700 flex items-center justify-center text-xs">
                  {{ isDark ? '🌙' : '☀️' }}
                </span>
                <span class="hidden sm:inline">{{ isDark ? 'Dark' : 'Light' }} mode</span>
                <span class="sm:hidden">{{ isDark ? 'Dark' : 'Light' }}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section class="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-8 sm:space-y-10 lg:space-y-12">
        <div>
          <h2 class="text-lg sm:text-xl font-medium text-text-primary dark:text-slate-100 mb-4 sm:mb-6 font-jakarta">
            Account balance
          </h2>
          <BalanceChart :labels="weeks" :values="balances" />
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-medium text-text-primary dark:text-slate-100 mb-4 sm:mb-6 font-jakarta">
            Connected Accounts
          </h2>
          <ConnectedAccounts :wire-accounts="wireAccounts" :ach-accounts="achAccounts" />
        </div>

        <div>
          <h2 class="text-lg sm:text-xl font-medium text-text-primary dark:text-slate-100 mb-4 sm:mb-6 font-jakarta">
            Recent Transfers
          </h2>
          <TransfersTable :transfers="transfers" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SidebarNav } from '@/components/layout'
import { BalanceChart, ConnectedAccounts, TransfersTable } from '@/components/transfers'
import {
  HEADER_TABS,
  WEEKS,
  BALANCES,
  WIRE_ACCOUNTS,
  ACH_ACCOUNTS,
  TRANSFERS
} from '@/mocks/transfers'

definePageMeta({
  title: 'Money Transfers — Overview'
})

const headerTabs = [...HEADER_TABS]
const weeks = [...WEEKS]
const balances = [...BALANCES]
const wireAccounts = WIRE_ACCOUNTS
const achAccounts = ACH_ACCOUNTS
const transfers = TRANSFERS

const isDark = useState('isDarkMode', () => {
  if (process.client) {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      return stored === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
})

const syncThemeClass = () => {
  if (process.client) {
    const root = document.documentElement
    if (isDark.value) {
      root.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  syncThemeClass()
}

onMounted(() => {
  syncThemeClass()
  // Watch for system theme changes
  if (process.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('darkMode')) {
        isDark.value = e.matches
        syncThemeClass()
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    onBeforeUnmount(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }
})
</script>

