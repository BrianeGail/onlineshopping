// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineNuxtPlugin } from '#app'

// Styles
import 'vuetify/styles'

// Create Vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true, // Enable SSR support for Vuetify
  })

  nuxtApp.vueApp.use(vuetify)
})
