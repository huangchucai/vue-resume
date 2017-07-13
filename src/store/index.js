import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: 'hcc',
        title: 'resumer',
        city: '广州',
        birthday: '1992-11-01'
      },
      workHistory: [
        {
          company: '鸡飞狗跳公司', 
          content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                    我的主要工作如下:
                    1. 完成既定产品需求。
                    2. 修复 bug。`
        },
        {
          company: '狗急跳墙责任有限公司', 
          content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                    我的主要工作如下:
                    1. 完成既定产品需求。
                    2. 修复 bug` 
        },
      ],
      education: [
        { school: '黄志诚警官大学', content: '本科' },
        { school: '韩琛古惑仔高中'},
      ],
      projects: [
        { name: '定制定购', content: '完成公司的定制定购的小模块' },
        { name: '高仿饿了么', content: '基于饿了么ui实现了基本的功能' }
      ],
      awards: [
        { name: '杰出青年奖', content: '恭喜黄楚才先生荣获中国杰出青年奖' },
        { name: '三好能力奖', content: '由于黄楚才的能力出众，恭喜获得三好能力奖' },
      ],
      contacts: [
        { contact: 'qq', content: '425205839' },
        { contact: 'phone', content: '13902245865' },
      ]
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    }
  }
});
