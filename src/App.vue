<template>
  <div class="page">
    <header>
      <Topbar></Topbar>
    </header>
    <main>
      <ResumeEditor></ResumeEditor>
      <ResumePreview></ResumePreview>
    </main>
  </div>
</template>

<script>
// 引入重置样式
import 'normalize.css/normalize.css';
import './assets/reset.css';

import Topbar from './components/Topbar';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';
import icons from './assets/icons';

export default {
  name: 'app',
  data() {
    return {
      text: '你好'
    };
  },
  created() {
    document.body.insertAdjacentHTML('afterBegin', icons);
  },
  components: {
    Topbar,
    ResumeEditor,
    ResumePreview
  }
};
</script>

<style lang="stylus">
.page 
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: #EAEBEC;
  main 
    flex: 1;
  main  
    max-width: 1440px;
    min-width: 1024px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
    align-self: center;

#resumeEditor 
  width: 35%;
  background: #444;


#resumePreview 
  width: 61.66667%;
  background: #777;
  flex-grow: 1;
  margin-left: 16px;

svg.icon 
  height 1em
  width 1em
  fill currentColor
  vertical-align: -0.1em;
  font-size:16px;
</style>
