<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-header-bg dark:bg-slate-900 text-white shadow-md h-12">
    <div class="h-full px-4 md:px-6 lg:px-8 py-[6px] flex items-center gap-3">
      <button
        type="button"
        class="lg:hidden p-2 -ml-2 rounded-lg hover:bg-white/10 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
        @click="toggleSidebar"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="flex items-center gap-[10px] h-[30px]">
        <img :src="logo" alt="Sage Trader" class="h-[30px] w-auto" />
        <div class="leading-none">
          <p class="text-md font-bold uppercase font-montserrat text-header-logo dark:text-brand-400">
            SAGE
          </p>
          <p class="text-xs font-medium uppercase text-slate-100 dark:text-slate-300 font-montserrat">
            TRADER
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '@/../assets/img/logo.svg'

const sidebarOpen = useState('sidebarOpen', () => false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
