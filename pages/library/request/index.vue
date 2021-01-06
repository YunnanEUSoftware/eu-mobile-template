<template>
	<view class="container">
		<u-gap height="10" bg-color="#f5f5f5"></u-gap>
		<view class="code">
			<view>{{ text }}</view>
			<view><view class="word1"></view>{{ text2 }}</view>
			<view><view class="word1"></view>{{ text3 }}</view>
			<view><view class="word1"></view>{{ text4 }}</view>
			<view>{{ text5 }}</view>
		</view>
		<view class="tips">this.$eu.api(apiUrl, data, success,fail,isloading)</view>
		<view class="main">
			<view class="title">说明</view>
			<u-table padding="2rpx">
				<u-tr>
					<u-th>参数</u-th><u-th>说明</u-th><u-th>类型</u-th>
				</u-tr>
				<u-tr>
					<u-td>apiUrl</u-td><u-td>请求地址</u-td><u-td>string</u-td>
				</u-tr>
				<u-tr>
					<u-td>data</u-td><u-td>请求参数</u-td><u-td>object</u-td>
				</u-tr>
				<u-tr>
					<u-td>success</u-td><u-td>成功回调</u-td><u-td>function</u-td>
				</u-tr>
				<u-tr>
					<u-td>fail</u-td><u-td>失败回调</u-td><u-td>function</u-td>
				</u-tr>
				<u-tr>
					<u-td>isloading</u-td><u-td>是否显示加载中</u-td><u-td>boolean</u-td>
				</u-tr>
			</u-table>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				text: 'getList(){',
				text2: 'var that = this;',
				text3: 'this.$eu.api(this.$API.apiUrl.address,{},function(res){',
				text4: '})',
				text5: '},',
			}
		},
		methods: {
			// 获取列表
			getList(){
				var that = this;
				this.$eu.api(this.$API.apiUrl.address,{},function(res){
					that.list = res.data
				},function(res){ console.log('失败') },true)	
			},
		}
	}
</script>

<style>

</style>
