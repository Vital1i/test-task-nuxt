<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-[#1B243D] text-white shadow-md h-12">
    <div class="h-full px-4 md:px-6 lg:px-8 py-[6px] flex items-center">
      <div class="flex items-center gap-[10px] w-[112px] h-[30px]">
        <img :src="logo" alt="Sage Trader" class="h-[30px] w-auto" />
        <div class="leading-none">
          <p
            class="text-[16px] leading-[18px] font-[700] uppercase"
            style="font-family: 'Montserrat', 'Inter', sans-serif; color: #477BFF; letter-spacing: 0;"
          >
            SAGE
          </p>
          <p
            class="text-[10px] leading-[12px] font-[500] uppercase text-slate-100"
            style="font-family: 'Montserrat', 'Inter', sans-serif; letter-spacing: 0.05em;"
          >
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
