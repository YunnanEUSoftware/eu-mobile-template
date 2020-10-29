import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'


// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 引入全局eudesign
import euDesign from 'eudesign'
Vue.use(euDesign)

// 引入uView对小程序分享的mixin封装
// let mpShare = require('uview-ui/libs/mixin/mpShare.js');
// Vue.mixin(mpShare)

import pageNav from 'components/page-nav/page-nav.vue';
Vue.component('pageNav',pageNav);		// 

const app = new Vue({
	...App
})

app.$mount()
