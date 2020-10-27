import Vue from 'vue'
import App from './App'
import API from './utils/api.js'

Vue.config.productionTip = false
App.mpType = 'app'

// 请求函数
import request from './eudesign/jsTools/request.js'
Vue.prototype.$e = request;

// 封装工具
import tools from './eudesign/jsTools/tools.js'
Vue.prototype.$tools = tools;

// 接口路由
Vue.prototype.$API= API;

 //项目全局变量 2.0
var globalData = {

	URL: 'http://192.168.1.116:12000/cirmStudentWpApi/',
	// URL: 'https://test.yneusoft.com/cirmStudentWpApi/',
	// URL: 'https://cirmsaas.yneusoft.com/cirmStudentWpApi/',

    // 全局信息 

    token: '',

};

Vue.prototype.$globalData = globalData;
Vue.prototype.setToken = function(data){
	globalData.token = data;
}

// 组件引用
import eEmpty from 'eudesign/components/e-empty/e-empty.vue';
Vue.component('eEmpty',eEmpty);		// 空数据提示


const app = new Vue({
    ...App
})
app.$mount()

export default {
	globalData:globalData
}
