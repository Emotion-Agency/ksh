<template>
  <header
    class="navbar"
    :class="[
      color === 'black' && 'navbar--black',
      state === 'logo' ? 'navbar--logo' : 'navbar--dir',
    ]"
  >
    <div class="container navbar__container">
      <div class="navbar__left">
        <ul class="navbar__dirs">
          <li class="navbar__dir">Interior design</li>
          <li class="navbar__dir">Architecture</li>
        </ul>
        <nuxt-link to="/" class="navbar__name">KSH Design</nuxt-link>
      </div>
      <div class="navbar__right">
        <nav class="navbar__nav nav">
          <ul class="nav__items">
            <li v-for="item in navItems" :key="item._id" class="nav__item">
              <nuxt-link class="nav__link" :to="item.to">{{
                item.name
              }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        aria-label="navigation burger"
        class="navbar__burger burger"
        :class="[isOpen && 'active']"
        @click="toggleNav"
      >
        <span class="burger__line burger__line--1"></span>
        <span class="burger__line burger__line--2"></span>
        <span class="burger__line burger__line--3"></span>
      </button>
    </div>
    <div class="mobile-menu" :class="[isOpen && 'open']">
      <nav class="mobile-menu__nav mobile-nav">
        <ul class="mobile-nav__items">
          <li v-for="item in navItems" :key="item._id" class="mobile-nav__item">
            <nuxt-link class="mobile-nav__link" :to="item.to">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { keysGenerator } from '~/scripts/utils/keysGenerator'
export default {
  props: {
    color: {
      type: String,
      default: 'white',
    },
    state: {
      type: String,
      default: 'logo',
    },
  },
  data() {
    return {
      navItems: [
        {
          to: '/',
          name: 'Projects',
          _id: keysGenerator(8),
        },
        {
          to: '/',
          name: 'About',
          _id: keysGenerator(8),
        },
        {
          to: '/',
          name: 'Contact',
          _id: keysGenerator(8),
        },
      ],
      isOpen: false,
    }
  },

  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>