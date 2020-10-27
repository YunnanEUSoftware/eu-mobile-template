<template>
	<view class="">
		<view class="grace-wrap grace-margin-top">
			<view class="demo grace-bg-blue" v-for="(item, index) in demoDate" :key="index">{{item}}</view>
		</view>
		<ePulloading :loadingType="isLoading"></ePulloading>
	</view>
</template>
<script>
export default {
	components:{
		'ePulloading': () => import("../../eudesign/components/e-pulloading.vue")
	},
	data() {
		return {
			demoDate: [ "C", 'O', 'D', 'E', 'R', 'D', 'E', 'M', 'O', 'T', 'E', 'S'],
			page : 1,    // 模拟页码
			pageMax : 3, // 最大页码
			isLoading: false,
		}
	},

	onReachBottom : function(){
		//上拉加载
		
		if (this.page <= this.pageMax){this.loadMoreFunc() ;}else{
			console.log(this.page) 
			this.isLoading = true
		}
	},
	methods:{
		//加载更多时执行的函数
		loadMoreFunc: function (){
			//追加数据(延迟1秒 模拟网络请求)
			setTimeout(() => {
				var arr = ["H", "C", 'O', 'D', 'E'];
				var len = arr.length;
				for (var i = 0; i < len; i++) {
					var randomIndex = Math.floor(Math.random() * (len - i));
					var itemAtIndex = arr[randomIndex];
					arr[randomIndex] = arr[i];
					arr[i] = itemAtIndex;
				}
				
				this.demoDate = this.demoDate.concat(arr);
				this.page++; //累加页码
			}, 1000);
		}
	},

}
</script>
<style>
.demo{border-radius:3px; height:200rpx; line-height:200rpx; text-align:center; width:346rpx; margin:15rpx; font-size:30rpx;}
</style>