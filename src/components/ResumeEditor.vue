<template>
  <div id="resumeEditor">
    <!--对应的按钮样式-->
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <!--编辑内容区域-->
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="submit" v-for="(submit,idx) in resume[item.field]">
            <!--循环一个对象，不用写死对象的属性-->
            <div class="resumeField" v-for="(value,key) in submit">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${idx}.${key}`,$event)">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <!--下面使用value会报错-->
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'resumeEditor',
  computed: {
    // 通过计算属性的get和set来改变状态
    selected: {
      get(){
        return this.$store.state.selected
      },
      // 传递额外的参数value给mutations
      set(value){
        return this.$store.commit('switchTab', value)
      }
    },
    resume() {
      return this.$store.state.resume
    }
  },
  methods: {
    changeResumeField(path,event){
      this.$store.commit("updateResume",{path,event})
    }
  }
}
</script>

<style lang="stylus" scoped>
#resumeEditor
  background:#ffffff;
  box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  display flex
  flex-direction row
  overflow auto
  p 
    white-space pre-line
  nav 
    width 80px 
    background black
    color white 
    ol 
      li 
        height 48px 
        display flex
        justify-content center
        align-items center
        margin-top 16px
        margin-bottom 16px 
        &.active 
          background white 
          color black 
        svg.icon 
          width 24px 
          height 24px  
  .panels
    list-style none  
    flex-grow 1
    li  
      padding 24px 
    .resumeField
      label 
        display block
      input[type=text] 
        margin 16px 0
        border 1px solid #ddd
        box-shadow inset 0 1px 3px 0 rgba(0,0,0,25)
        width 100%
        height 40px 
        padding 0 8px        

  hr 
    border none 
    border-top 1px solid #ddd
    margin 24px 0
</style>
