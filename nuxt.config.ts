export default defineNuxtConfig({

  ssr: false,
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: 'smooth',
      strict: false,
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
