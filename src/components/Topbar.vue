<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer-HCC</span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  #topbar 
    background: #ffffff;
    box-shadow: 0 1px 3px 0px rgba(0,0,0,0.25);
    .wrapper 
      max-width: 1440px;
      min-width: 1024px;
      margin: 0 auto;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
    .logo
      font-size: 24px;
      color: #000000;
    button 
      width 72px
      height 32px 
      border none
      cursor pointer
      font-size 18px 
      background #ddd
      color #222
      &:hover
        box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50)  
      &.primary 
        background #02af5f
        color white  
</style>
