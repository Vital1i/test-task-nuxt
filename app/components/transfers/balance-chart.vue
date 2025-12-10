<template>
  <div class="card p-6 flex flex-col gap-4">
    <div class="flex items-center justify-between gap-3 flex-wrap">
      <div>
        <p class="text-md font-medium font-jakarta text-text-primary">
          Cash Available to Trade
        </p>
      </div>
      <button
        type="button"
        class="pill pill-ghost border border-border/80 dark:border-slate-700 px-3 py-[6px] text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 bg-pill-bg hover:bg-pill-hover hover:border-brand-200 focus-visible:outline-brand-500/80 text-text-secondary font-jakarta"
      >
        Last 90 days
      </button>
    </div>
    <div>
      <canvas ref="canvasEl" class="w-full h-72 md:h-80"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart, ChartData, ChartOptions } from 'chart.js/auto'

const props = defineProps<{
  labels: string[]
  values: number[]
}>()

const canvasEl = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const chartData = computed<ChartData<'line'>>(() => ({
  labels: props.labels,
  datasets: [
    {
      label: 'Balance',
      data: props.values,
      fill: true,
      borderColor: '#3552c9',
      backgroundColor: 'rgba(53, 82, 201, 0.08)',
      tension: 0,
      pointRadius: 5,
      pointHoverRadius: 6,
      pointBackgroundColor: '#3552c9',
      pointBorderColor: '#3552c9',
      pointBorderWidth: 2
    }
  ]
}))

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#0f172a',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#0f172a',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: { color: 'rgba(15, 23, 42, 0.08)' },
      ticks: { color: '#6b7280' }
    },
    y: {
      grid: { color: 'rgba(15, 23, 42, 0.08)' },
      ticks: {
        color: '#6b7280',
        callback: (value) => `$${value}K`
      },
      suggestedMin: 0
    }
  }
}

const renderChart = () => {
  if (!canvasEl.value) return
  if (chart) {
    chart.destroy()
  }

  chart = new Chart(canvasEl.value, {
    type: 'line',
    data: chartData.value,
    options: chartOptions
  })
}

watch(
  () => [props.labels, props.values],
  () => renderChart(),
  { deep: true }
)

onMounted(() => renderChart())
onBeforeUnmount(() => chart?.destroy())
</script>
