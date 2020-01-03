import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';

// 登陆页面背景的例子效果
import VueParticles from 'vue-particles'  ;
Vue.use(VueParticles);
Vue.config.productionTip = false
Vue.use(ElementUI);


import '@/assets/less/global.less';

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
