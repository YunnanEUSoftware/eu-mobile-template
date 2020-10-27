// import config from './config.js';
import app from '../../main.js';
export default {
	
	requestAPI: function(apiUrl, data, success,fail,isloading,method='POST',contentType="form") {
		var that = this;
		if(!isloading){
			uni.showLoading({
				title: '加载中...'
			});
		}
		var header;
		switch(contentType){
			case "form" :
				header = {
					'content-type' : 'application/x-www-form-urlencoded',
					token: app.globalData.token? app.globalData.token : ''
				};
			break;
			case "json" : 
				header = {
					'content-type' : 'application/json',
					token: app.globalData.token? app.globalData.token : ''
				};
			break;
			default :
				header = {
					'content-type' : 'application/json',
					token: app.globalData.token? app.globalData.token : ''
				};
		}
		var URL = app.globalData.URL + apiUrl;
		// console.log(URL)
		uni.request({ 
			url: URL,
			data: data,
			method: 'POST',
			header: header,
			success: res => {
				uni.hideLoading();
				if (res.statusCode && res.statusCode != 200) {
					uni.showModal({
						content: "网络异常,请稍后重试",// + res.errMsg,
						showCancel: false					
					})
					return;
				}
				if (res.data.code == 10000) {
					typeof success == "function" && success(res.data)
				}else {
					typeof fail == "function" && fail(res.data)
				}
			},
			fail(res) {
				uni.hideLoading();
				typeof fail == "function" && fail(res.data)
				uni.showModal({
					content: "" + res.errMsg,
					showCancel: false
				});
			},
			complete() {
				uni.hideLoading();
				return;
			}
		})
	}
}

