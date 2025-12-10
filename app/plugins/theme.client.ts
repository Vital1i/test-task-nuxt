export default defineNuxtPlugin(() => {
  const stored = localStorage.getItem('darkMode')
  const isDark = stored === 'true' || (stored === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

