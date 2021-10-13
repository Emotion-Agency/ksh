<template>
  <header
    class="navbar"
    :class="[
      color === 'black' && 'navbar--black',
      state === 'logo' ? 'navbar--logo' : 'navbar--dir',
      isOpen && 'open',
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
              <div v-if="item.items" class="nav__link dropdown">
                <div class="dropdown__btn">{{ item.name }}</div>
                <div class="dropdown__content">
                  <div class="dropdown__links">
                    <nuxt-link
                      v-for="link in item.items"
                      :key="link._id"
                      class="nav__link dropdown__link"
                      :to="link.to"
                      >{{ link.name }}</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <nuxt-link v-else class="nav__link" :to="item.to">{{
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
          <li
            v-for="item in navItems"
            :key="item._id"
            class="mobile-nav__item"
            @click="isOpen = false"
          >
            <div v-if="item.items">
              <nuxt-link
                v-for="link in item.items"
                :key="link._id"
                class="mobile-nav__link"
                :to="link.to"
                >{{ link.name }}</nuxt-link
              >
            </div>
            <nuxt-link v-else class="mobile-nav__link" :to="item.to">{{
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
          name: 'Projects',
          items: [
            {
              to: '/projects/private-residential',
              name: 'Private Residential',
              _id: keysGenerator(8),
            },
            {
              to: '/projects/commercial-interiors',
              name: 'Commercial interiors',
              _id: keysGenerator(8),
            },
          ],
        },
        {
          to: '/about',
          name: 'About',
          _id: keysGenerator(8),
        },
        {
          to: '/contact',
          name: 'Contact',
          _id: keysGenerator(8),
        },
      ],
      isOpen: false,
    }
  },

  mounted() {
    this.initDropdown()
  },

  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    async initDropdown() {
      const { default: Dropdown } = await import('~/scripts/Dropdown')

      const dropdown = new Dropdown({
        btn: '.dropdown__btn',
        items: '.dropdown__content',
        parent: '.dropdown',
      })
      dropdown.init()
    },
  },
}
</script>