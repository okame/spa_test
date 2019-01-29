<template>
  <li class="box level">
    <span class="level-left">
      {{ item.text }}
    </span>
    <a class="delete level-right" @click="destroy" />
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
