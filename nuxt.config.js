import webpack from 'webpack'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pembayaranspp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // {rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'},
          {rel : 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'}
  ],
  scripts:
  {src : 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', body:true}
},

ssr:true,
loading: {
  color: 'red',
  height: '10px',
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://berita-indo-api.vercel.app',
    // baseURL: 'http://127.0.0.1:3333/api',
    baseURL: "https://buigghlsgthlyorwmphi.supabase.co",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins:[
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
    
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post',propertyName: 'data.token'},
  //         user : { url: 'me', method : 'get', propertyName: 'data'},
  //         logout: false
  //       }
  //     }
  //   }
  // }
}
