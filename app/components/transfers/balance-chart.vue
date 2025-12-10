<template>
  <div class="card p-4 sm:p-5 md:p-6 flex flex-col gap-4">
    <div class="flex items-center justify-between gap-3 flex-wrap">
      <div>
        <p class="text-md font-medium font-jakarta text-text-primary dark:text-slate-100">
          Cash Available to Trade
        </p>
      </div>
      <button
        type="button"
        class="pill pill-ghost border border-border/80 dark:border-slate-700 px-3 py-[6px] text-base font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 bg-pill-bg dark:bg-slate-800 hover:bg-pill-hover dark:hover:bg-slate-700 hover:border-brand-200 dark:hover:border-brand-600 focus-visible:outline-brand-500/80 text-text-secondary dark:text-slate-300 font-jakarta"
      >
        Last 90 days
      </button>
    </div>
    <div>
      <canvas ref="canvasEl" class="w-full h-64 sm:h-72 md:h-80"></canvas>
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

const isDark = useState('isDarkMode', () => false)

const chartData = computed<ChartData<'line'>>(() => ({
  labels: props.labels,
  datasets: [
    {
      label: 'Balance',
      data: props.values,
      fill: true,
      borderColor: '#3552c9',
      backgroundColor: isDark.value ? 'rgba(53, 82, 201, 0.15)' : 'rgba(53, 82, 201, 0.08)',
      tension: 0,
      pointRadius: 5,
      pointHoverRadius: 6,
      pointBackgroundColor: '#3552c9',
      pointBorderColor: '#3552c9',
      pointBorderWidth: 2
    }
  ]
}))

const chartOptions = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: isDark.value ? '#1e293b' : '#0f172a',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: isDark.value ? '#334155' : '#0f172a',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: { color: isDark.value ? 'rgba(148, 163, 184, 0.1)' : 'rgba(15, 23, 42, 0.08)' },
      ticks: { color: isDark.value ? '#94a3b8' : '#6b7280' }
    },
    y: {
      grid: { color: isDark.value ? 'rgba(148, 163, 184, 0.1)' : 'rgba(15, 23, 42, 0.08)' },
      ticks: {
        color: isDark.value ? '#94a3b8' : '#6b7280',
        callback: (value) => `$${value}K`
      },
      suggestedMin: 0
    }
  }
}))

const renderChart = () => {
  if (!canvasEl.value) return
  if (chart) {
    chart.destroy()
  }

  chart = new Chart(canvasEl.value, {
    type: 'line',
    data: chartData.value,
    options: chartOptions.value
  })
}

watch(
  () => [props.labels, props.values, isDark.value],
  () => renderChart(),
  { deep: true }
)

onMounted(() => renderChart())
onBeforeUnmount(() => chart?.destroy())
</script>
