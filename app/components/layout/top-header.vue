<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-header-bg text-white shadow-md h-12">
    <div class="h-full px-4 md:px-6 lg:px-8 py-[6px] flex items-center">
      <div class="flex items-center gap-[10px] w-[112px] h-[30px]">
        <img :src="logo" alt="Sage Trader" class="h-[30px] w-auto" />
        <div class="leading-none">
          <p class="text-md font-bold uppercase font-montserrat text-header-logo">
            SAGE
          </p>
          <p class="text-xs font-medium uppercase text-slate-100 font-montserrat">
            TRADER
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '@/../assets/img/logo.svg'
</script>
