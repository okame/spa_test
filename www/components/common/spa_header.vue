<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" :class="activeClass" @click="toggleMenu">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu" :class="activeClass">
          <div class="navbar-end">
            <div class="tabs is-right">
              <ul>
                <nuxt-link tag="li" to="/" active-class="is-active" exact="exact">
                  <a>
                    トップ
                  </a>
                </nuxt-link>
                <nuxt-link tag="li" to="/todos" active-class="is-active" exact="exact">
                  <a>
                    TODO
                  </a>
                </nuxt-link>
                <nuxt-link tag="li" to="/login" active-class="is-active" exact="exact">
                  <a>
                    ログイン
                  </a>
                </nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_active: false
    }
  },

  computed: {
    activeClass() {
      return {
        'is-active': this.menu_active
      }
    }
  },

  methods: {
    toggleMenu() {
      this.menu_active = !this.menu_active
    }
  }
}
</script>
