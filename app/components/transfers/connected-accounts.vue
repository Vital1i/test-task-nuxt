<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-12 h-12 rounded-[12px] p-[14px] bg-account-icon">
          <img :src="wireIcon" alt="Wire" class="w-full h-full object-contain" />
        </span>
        <div>
          <p class="text-base font-semibold">Wire Accounts</p>
          <p class="muted">Linked wire accounts available for transfers.</p>
        </div>
      </div>
      <div class="space-y-3">
        <AccountRow v-for="account in wireAccounts" :key="account.id" :account="account" />
      </div>
      <button
        type="button"
        class="text-brand-700 hover:text-brand-600 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 rounded-lg px-3 py-2 hover:bg-brand-50 focus-visible:outline-brand-500/80"
      >
        <span class="text-lg leading-none">+</span>
        Add New Wire Account
      </button>
    </div>

    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-12 h-12 rounded-[12px] p-[14px] bg-account-icon">
          <img :src="plaidIcon" alt="Plaid" class="w-full h-full object-contain" />
        </span>
        <div>
          <p class="text-base font-semibold">Plaid Accounts (ACH)</p>
          <p class="muted">Connected Plaid accounts available for ACH transfers.</p>
        </div>
      </div>
      <div class="space-y-3">
        <AccountRow v-for="account in achAccounts" :key="account.id" :account="account" />
      </div>
      <button
        type="button"
        class="text-brand-700 hover:text-brand-600 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 rounded-lg px-3 py-2 hover:bg-brand-50 focus-visible:outline-brand-500/80"
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
import AccountRow from '@/components/transfers/account-row.vue'

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
