<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>
        {{title}}
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['title', 'visible'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .dialogWrapper
    position fixed
    background hsla(0,0%,0%,0.25)
    left 0 
    right 0 
    top 0
    bottom 0
    margin 0
    display flex
    justify-content center
    align-items center
  .dialog 
    background white
    min-height 4em 
    min-width 10em
    header
      padding 16px 
      display flex 
      justify-content space-between 
    main 
      padding 16px
</style>
