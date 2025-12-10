<template>
  <aside
    class="hidden lg:flex flex-col items-center w-[112px] bg-[#F3F4F6] pt-6 pb-10 gap-6 sticky top-12 h-[calc(100vh-48px)] justify-between border border-[#E5E7EB]"
  >
    <nav class="flex flex-col items-center gap-[16px] w-full flex-1">
      <button
        v-for="item in items"
        :key="item.label"
        class="flex flex-col items-center gap-2 w-full transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <span
          class="flex items-center justify-center h-6 rounded-2xl"
          :class="item.active ? 'bg-brand-50 px-4' : ''"
        >
          <img :src="item.icon" :alt="item.label" class="h-5 w-5" />
        </span>
        <span
          class="text-[12px] leading-4 font-medium"
          :class="item.active ? 'text-brand-700' : 'text-[#1B1B21]'"
          style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.15px;"
        >
          {{ item.label }}
        </span>
      </button>
    </nav>

    <div class="flex flex-col items-center gap-[16px] w-full">
      <button class="flex flex-col items-center gap-2 w-full transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">
        <span class="flex items-center justify-center h-6 w-6 rounded-2xl">
          <img :src="supportIcon" alt="Support" class="h-5 w-5" />
        </span>
        <span
          class="text-[12px] leading-4 font-medium text-[#1B1B21]"
          style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.15px;"
        >
          Support
        </span>
      </button>
      <button class="flex flex-col items-center gap-2 w-full transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">
        <span class="flex items-center justify-center h-6 w-6 rounded-2xl">
          <img :src="disclosuresIcon" alt="Disclosures" class="h-5 w-5" />
        </span>
        <span
          class="text-[12px] leading-4 font-medium text-[#1B1B21]"
          style="font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; letter-spacing: 0.15px;"
        >
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
