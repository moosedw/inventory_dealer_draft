<template>
  <div class="sokal-container sokal-py-3">
    <div v-if="loading">Loading makes...</div>

    <div v-else-if="error">
      Error loading makes.
    </div>

    <div v-else class="sokal-flex sokal-flex-row sokal-flex-wrap sokal-gap sokal-items-center sokal-justify-center">
      <a v-for="make in makes" :key="make" class="sokal-btn sokal-btn-secondary has-border-radius" :href="`/vehicles?make=${encodeURIComponent(make)}`">
        <div class="sokal-flex sokal-flex-row sokal-gap sokal-items-center sokal-justify-center">
          <span class="sokal-btn-copy">Shop {{ make }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1.6em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right sokal-utility-icon">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ShopMakesSample',
  props: {
    apiBase: { type: String, default: '/ajax' } // optional, allows passing base URL
  },
  setup(props) {
    const makes = ref([])
    const loading = ref(true)
    const error = ref(false)

    onMounted(async () => {
      try {
        const res = await fetch(`${props.apiBase}/makes`, {
          credentials: 'same-origin' // important for Rails cookies/auth
        })

        if (!res.ok) throw new Error('/ajax/makes request failed')

        const data = await res.json()
        makes.value = data
      } catch (e) {
        console.error(e)
        error.value = true
      } finally {
        loading.value = false
      }
    })

    return { makes, loading, error }
  }
}
</script>
