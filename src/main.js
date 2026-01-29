import { createApp } from 'vue'
import ShopMakesSample from './components/ShopMakesSample.vue'

// Progressive enhancement: mount components to existing DOM elements
const mountComponents = () => {
  const shopMakesElements = document.querySelectorAll('[data-component="shop-makes-sample"]')

  shopMakesElements.forEach(element => {
    const apiBase = element.getAttribute('data-api-base') || '/ajax'
    createApp(ShopMakesSample, { apiBase }).mount(element)
  })
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountComponents)
} else {
  mountComponents()
}
