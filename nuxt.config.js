import { fi } from './gulp-src/fonts-include.js'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default {
  target: 'static',

  server: {
    port: '3000',
    host: '0.0.0.0',
  },

  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com',
    },
    imgix: {
      baseURL: 'https://emotionagency.imgix.net',
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8', hid: 'charset' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'KSH Design Buro | Private Residential and Commercial Interiors',
      },
      {
        name: 'twitter:description',
        content:
          'We create interior design and architecture. We work in two directions: private residences and commercial interiors. From the development of layout and rough sketch to designing one-off home decor items',
      },
      {
        name: 'twitter:image',
        content: '/twitter.png',
      },
      {
        property: 'og:image',
        content: '/twitter.png',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'KSh Design',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#221E1D' },
    ],
    title: 'KSH Design Buro | Private Residential and Commercial Interiors',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, ...fi],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/index.scss'],

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
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ],
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#FDFAF3',
    },
    icon: {
      fileName: 'icon.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.glsl$/,
        exclude: '/node_modules/',
        loader: 'webpack-glsl-loader',
      })
    },
  },
  generate: { fallback: true },
}
