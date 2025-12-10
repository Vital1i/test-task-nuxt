<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span
          class="flex items-center justify-center w-12 h-12 rounded-[12px] p-[14px]"
          style="background-color: #E9E7EF;"
        >
          <img :src="wireIcon" alt="Wire" class="w-full h-full object-contain" />
        </span>
        <div>
          <p class="text-base font-semibold">Wire Accounts</p>
          <p class="muted">Linked wire accounts available for transfers.</p>
        </div>
      </div>
      <div class="space-y-3">
        <div
          v-for="account in wireAccounts"
          :key="account.id"
          class="flex items-center justify-between rounded-[16px] border border-border/70 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pr-6 pl-4"
        >
          <div class="flex items-center gap-3 flex-1">
            <span class="h-8 w-8 min-w-[32px] min-h-[32px] rounded-full bg-[#1C40BE] text-white flex items-center justify-center text-sm font-semibold">
              {{ account.name.charAt(0).toUpperCase() }}
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
      </div>
      <button
        type="button"
        class="text-brand-700 hover:text-brand-600 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <span class="text-lg leading-none">+</span>
        Add New Wire Account
      </button>
    </div>

    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span
          class="flex items-center justify-center w-12 h-12 rounded-[12px] p-[14px]"
          style="background-color: #E9E7EF;"
        >
          <img :src="plaidIcon" alt="Plaid" class="w-full h-full object-contain" />
        </span>
        <div>
          <p class="text-base font-semibold">Plaid Accounts (ACH)</p>
          <p class="muted">Connected Plaid accounts available for ACH transfers.</p>
        </div>
      </div>
      <div class="space-y-3">
        <div
          v-for="account in achAccounts"
          :key="account.id"
          class="flex items-center justify-between rounded-[16px] border border-border/70 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pr-6 pl-4"
        >
          <div class="flex items-center gap-3 flex-1">
            <span class="h-8 w-8 min-w-[32px] min-h-[32px] rounded-full bg-[#1C40BE] text-white flex items-center justify-center text-sm font-semibold">
              {{ account.name.charAt(0).toUpperCase() }}
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
      </div>
      <button
        type="button"
        class="text-brand-700 hover:text-brand-600 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <span class="text-lg leading-none">+</span>
        Connect New via Plaid
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import wireIcon from '@/../assets/img/wire.svg'
import plaidIcon from '@/../assets/img/palid.svg'

type Account = {
  id: string
  name: string
  last4: string
}

defineProps<{
  wireAccounts: Account[]
  achAccounts: Account[]
}>()
</script>
