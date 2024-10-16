// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Include both Tailwind and Vuetify CSS
  css: [
    "~/src/input.css", // Tailwind CSS
    "vuetify/styles" // Vuetify CSS
    // '@fortawesome/fontawesome-free/css/all.css'  // Font Awesome
  ],

  build: {
    transpile: ["vuetify"]
  },
  modules: [
    // ...
    "@pinia/nuxt"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Vite configuration for Vuetify
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },

  // Add any Vuetify plugins here if needed
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        } // Font Awesome
      ]
    }
  },

  modules: ["@pinia/nuxt"]
});
