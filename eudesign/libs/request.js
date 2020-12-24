// import config from './config.js';
import app from '../../main.js';
export default {
	
	requestAPI: function(apiUrl, data, success,fail,isloading,method='POST',contentType="form") {
		var that = this;
		if(isloading){
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
					// if(res.data.data.token){
					// 	console.log(res.data.data.token)
					// 	this.setToken(res.data.data.token)
					// }
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
	
	},
	
	// 文件上传
	uploadFileAPI: function(apiUrl, path, data, success,fail,isloading) {
		console.log(isloading)
		if(isloading){
			uni.showLoading({
				title: '上传中...'
			});
		}
		var URL = app.globalData.URL + apiUrl;
		console.log('path:', path)
		if (path.size <= 2000000) {
			uni.uploadFile({
				url: URL,
				filePath: path.path,
				name: 'file',
				header: {
					'token': app.globalData.token
				},
				formData: data,
				success: res => {
					if (res.statusCode && res.statusCode != 200) {
						uni.showModal({
							content: "" + res.errMsg,
							showCancel: false
						})
					// 	return;
					}
					var res = JSON.parse(res.data)
					uni.hideLoading();
					if (res.code == 10000) {
						typeof success == "function" && success(res)
					}else{
						typeof fail == "function" && fail(res)
					}
				},
				fail(res) {
					uni.showModal({
						content: "" + res.errMsg,
						showCancel: false
					});
				},
				complete() {
					
					return;
				}
			})
		}else {
			var file = path;
			var qualitys = Math.floor(10000000/file.size)/10
			console.log(qualitys)
			const name = file.name; //文件名
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = e => {
			    const src = e.target.result;
			    
			    const img = new Image();
			    img.src = src;
			    img.onload = e => {
			        const w = img.width;
			        const h = img.height;
			        const quality = qualitys;  // 默认图片质量为0.92
			        // 生成canvas
			        const canvas = document.createElement('canvas');
			        const ctx = canvas.getContext('2d');
			        // 创建属性节点
			        const anw = document.createAttribute("width");
			        anw.nodeValue = w;
			        const anh = document.createAttribute("height");
			        anh.nodeValue = h;
			        canvas.setAttributeNode(anw);
			        canvas.setAttributeNode(anh);
			     
			        // 铺底色 PNG转JPEG时透明区域会变黑色
			        ctx.fillStyle = "#fff";
			        ctx.fillRect(0, 0, w, h);
			     
			        ctx.drawImage(img, 0, 0, w, h);
			        // quality值越小，所绘制出的图像越模糊
			        const base64 = canvas.toDataURL('image/jpeg', quality); // 图片格式jpeg或webp可以选0-1质量区间
	
					const text = window.atob(base64.split(',')[1]).split('')
					const buffer = new window.Uint8Array(text.length)
					 
					for (let i = 0, len = text.length; i < len; i++) {
						buffer[i] = text[i].charCodeAt(0)
					}
			        var file = new Blob([buffer], {type : 'image/jpg'});
			        file.name = name;
					file.path = base64;
					console.log('file:', file)
			        uni.uploadFile({
			        	url: URL,
			        	filePath: file.path,
			        	name: 'file',
			        	header: {
			        		'token': Token
			        	},
			        	formData: data,
			        	success: res => {
			        		if (res.statusCode && res.statusCode != 200) {
			        			uni.showModal({
			        				content: "" + res.errMsg,
			        				showCancel: false
			        			})
			        		// 	return;
			        		}
			        		var res = JSON.parse(res.data)
			        		if (res.code == 10000) {
			        			typeof success == "function" && success(res)
			        		}else{
			        			typeof fail == "function" && fail(res)
			        		}
			        	},
			        	fail(res) {
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
				img.onerror = e => {
					error(e);
				}
			}			     
		}
	},
}

