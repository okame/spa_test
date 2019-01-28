<template>
  <li class="box level">
    <span class="level-left">
      {{ item.text }}
    </span>
    <a @click="destroy" class="delete level-right" />
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    destroy() {
      this.$emit('destroy', this.item)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
