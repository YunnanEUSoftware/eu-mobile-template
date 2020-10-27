<template>
	<view class="">
		<eFlex title="业务入口" :list="list" @click="click"></eFlex>
	</view>
</template>
<script>
export default {
	components:{ 
		'eFlex': () => import("../../eudesign/components/e-flex.vue")
	},
	data() {
		return {
			list: [  
				{ menuName: '标题一',menuLogoPath: "https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190415/b82b568d66e1080a7235701969c4c082.png", tag: 8 },
				{ menuName: '标题二',menuLogoPath: "https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190415/b82b568d66e1080a7235701969c4c082.png" },
				{ menuName: '标题三',menuLogoPath: "https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190415/b82b568d66e1080a7235701969c4c082.png", tag: 2},
				{ menuName: '标题四',menuLogoPath: "https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190415/b82b568d66e1080a7235701969c4c082.png" },
				{ menuName: '标题五',menuLogoPath: "https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20190415/b82b568d66e1080a7235701969c4c082.png", tag: 5 },
			]
		}
	},
	methods:{
		click(res){
			console.log(res)
		}
	},
	
}
</script>
<style>
</style>