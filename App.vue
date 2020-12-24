<script>
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易'
		},
		onLaunch() {
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
		},
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	// @import "common/demo.scss";
	/*每个页面公共css */
	
	.container { padding: 20rpx; }
	.template { margin: 100rpx 0; }
	
	.titles { font-weight: 700; line-height: 40rpx; padding: 10rpx ; font-size: 36rpx; }
	.title { font-weight: 700; line-height: 40rpx; padding: 10rpx ; }
	
	.code { margin: 0 10rpx 40rpx 10rpx; line-height: 40rpx; background-color: #f5f5f5; padding: 8rpx 4rpx;  font-size: 20rpx ;  }
	.code > view { display: flex; }
	.word1 { width: 40rpx;}
	.word2 { width: 80rpx; }
	.word3 { width: 120rpx; }
	
	.tips { line-height: 40rpx; padding: 10rpx 20rpx; }
	.tips view { line-height: 50rpx; font-weight: 700; }
	.remark { line-height: 40rpx; padding: 0 20rpx; color: #808080 }
	
	
</style>