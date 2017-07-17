<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer-HCC</span>
      <div class="actions">
        <!--如果已经登陆，有用户id显示-->
        <div class="userActions" v-if="logined">
          <span class="welcome">您好，{{user.username}}</span>
          <a href="javascript:;" class="button" @click.prevent="signOut">登出</a>
        </div>
        <!--没有登陆-->
        <div class="userActions" v-else>
          <a href="javascript:;" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <a href="javascript:;" class="button" @click.prevent="signInDialogVisible = true">登录</a>
        </div>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
    <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <sign-up-form @success="signIn($event)"></sign-up-form> 
    </myDialog>
    <myDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
      <sign-in-form @success="signIn($event)"></sign-in-form> 
    </myDialog>
  </div>
</template>

<script>
import myDialog from './Dialog';
import signUpForm from './SignUpForm';
import signInForm from './SignInForm';
import AV from '../lib/leancloud';
export default {
  name: 'Topbar',
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    logined() {
      return this.user.id
    }
  },
  components: {
    myDialog,
    signUpForm,
    signInForm
  },
  methods: {

    // 退出
    signOut(){
       AV.User.logOut()
       this.$store.commit('removeUser')
    },
    // 登录
    signIn(user){
        this.signUpDialogVisible = false
       this.signInDialogVisible = false
        this.$store.commit('setUser', user)
      }
  }
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
    .wrapper 
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      .logo
        font-size: 24px;
        color: #000000;
      .button 
        width 72px
        height 32px 
        border none
        cursor pointer
        font-size 18px 
        background #ddd
        color #222  
        text-decoration none
        display inline-flex
        justify-content center
        align-items center
        vertical-align middle
        &:hover
          box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50)  
        &.primary 
          background #02af5f
          color white  

  .actions 
    display flex
    .userActions 
      margin-right 3em    
      .welcome 
        maring-right .5em
</style>
