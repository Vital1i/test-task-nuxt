<template>
  <aside
    class="hidden lg:flex flex-col items-center w-[112px] bg-sidebar-bg dark:bg-slate-800 pt-2 pb-4 gap-6 sticky top-12 h-[calc(100vh-48px)] justify-between border border-sidebar-border dark:border-slate-700"
  >
    <nav class="flex flex-col items-center gap-[12px] w-full flex-1">
      <button
        v-for="item in items"
        :key="item.label"
        class="flex flex-col items-center w-full rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/80 dark:hover:bg-slate-700/50"
      >
        <span
          class="flex items-center justify-center h-6 rounded-2xl"
          :class="item.active ? 'bg-brand-50 dark:bg-brand-900/30 px-4' : ''"
        >
          <img :src="item.icon" :alt="item.label" :class="item.active ? 'h-5 w-5' : 'h-5 w-5 dark:brightness-0 dark:invert'" />
        </span>
        <span
          class="text-sm font-medium font-jakarta"
          :class="item.active ? 'text-brand-700 dark:text-slate-100' : 'text-text-primary dark:text-slate-200'"
        >
          {{ item.label }}
        </span>
      </button>
    </nav>

    <div class="flex flex-col items-center gap-[16px] w-full">
      <button class="flex flex-col items-center gap-2 w-full rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/80 dark:hover:bg-slate-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 focus-visible:outline-brand-500/80">
        <span class="flex items-center justify-center h-6 w-6 rounded-2xl">
          <img :src="supportIcon" alt="Support" class="h-5 w-5 dark:brightness-0 dark:invert" />
        </span>
        <span class="text-sm font-medium font-jakarta text-text-primary dark:text-slate-200">
          Support
        </span>
      </button>
      <button class="flex flex-col items-center gap-2 w-full rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-white/80 dark:hover:bg-slate-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 focus-visible:outline-brand-500/80">
        <span class="flex items-center justify-center h-6 w-6 rounded-2xl">
          <img :src="disclosuresIcon" alt="Disclosures" class="h-5 w-5 dark:brightness-0 dark:invert" />
        </span>
        <span class="text-sm font-medium font-jakarta text-text-primary dark:text-slate-200">
          Disclosures
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import dashboardIcon from '@/../assets/img/dashboard.svg'
import positionsIcon from '@/../assets/img/positions.svg'
import analyticsIcon from '@/../assets/img/analytics.svg'
import transfersIcon from '@/../assets/img/transfers.svg'
import reportsIcon from '@/../assets/img/reports.svg'
import transactionsIcon from '@/../assets/img/transactions.svg'
import platformIcon from '@/../assets/img/platform.svg'
import referralsIcon from '@/../assets/img/referrals.svg'
import supportIcon from '@/../assets/img/support.svg'
import disclosuresIcon from '@/../assets/img/disclosures.svg'

type NavItem = {
  label: string
  icon: string
  active?: boolean
}

const items: NavItem[] = [
  { label: 'Dashboard', icon: dashboardIcon },
  { label: 'Positions', icon: positionsIcon },
  { label: 'Analytics', icon: analyticsIcon },
  { label: 'Transfers', icon: transfersIcon, active: true },
  { label: 'Reports', icon: reportsIcon },
  { label: 'Transactions', icon: transactionsIcon },
  { label: 'Platform', icon: platformIcon },
  { label: 'Referrals', icon: referralsIcon }
]
</script>
