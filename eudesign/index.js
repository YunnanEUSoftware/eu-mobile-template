
// 全局挂载引入http相关请求拦截插件
import http from './libs/request'


// 全局挂载预览插件
import previewImage from './libs/previewImage'

// 全局挂载预览插件
import ddLogin from './libs/ddLogin'

// 规则检验
import test from './libs/test.js'

import imgToBase from './libs/imgToBase.js' // 图片转base64
import hrefValue from './libs/hrefValue.js' // 获取链接地址中的参数
import timestampToTime from './libs/timestampToTime.js' // 将时间戳转换成时间

const $eu = {
	api: http.requestAPI,
	uploadFile: http.uploadFileAPI,
	previewImage,
	ddLogin: ddLogin.login,
	test,
	imgToBase,
	hrefValue,
	timestampToTime,
}

// const Loading={
// 　　install:function(Vue){ //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
// 　　　　Vue.component('e-empty',eEmpty);
// 　　}
// };
const install = Vue => {
	Vue.prototype.$eu = $eu;
}
export default install;
