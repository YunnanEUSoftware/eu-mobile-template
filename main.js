import Vue from 'vue'
import App from './App'
import API from './api.js'

Vue.config.productionTip = false
App.mpType = 'app'

// 接口路由
Vue.prototype.$API= API;



const app = new Vue({
    ...App
})
app.$mount()
