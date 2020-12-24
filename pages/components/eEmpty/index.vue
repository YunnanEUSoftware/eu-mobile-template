<template>
	<view class="container">
		<view class="template">
			<e-empty marginTop="100" :show="isEmpty" mode="data"></e-empty>
		</view>
		<u-gap height="10" bg-color="#f5f5f5"></u-gap>
		<view class="code">{{ text }}
		</view>
		<view class="tips">
			通过text参数配置提示的文字内容
		</view>
		<view class="tips">
			通过mode(默认为data)参数配置要显示的图标
		</view>
		<view class="main">
			<view class="title">内置图标</view>
			<view class="tips">这些图标已内置，直接通过mode参数引用即可</view>
		</view>
		<u-table>
			<u-tr>
				<u-th>名称</u-th>
				<u-th>说明</u-th>
			</u-tr>
			<u-tr>
				<u-td>car</u-td>
				<u-td>购物车为空</u-td>
			</u-tr>
			<u-tr>
				<u-td>page</u-td>
				<u-td>页面不存在</u-td>
			</u-tr>
			<u-tr>
				<u-td>search</u-td>
				<u-td>没有搜索结果</u-td>
			</u-tr>
			<u-tr>
				<u-td>address</u-td>
				<u-td>没有收货地址</u-td>
			</u-tr>
			<u-tr>
				<u-td>wifi</u-td>
				<u-td>没有WiFi</u-td>
			</u-tr>
			<u-tr>
				<u-td>order</u-td>
				<u-td>订单为空</u-td>
			</u-tr>
			<u-tr>
				<u-td>coupon</u-td>
				<u-td>没有优惠券</u-td>
			</u-tr>
			<u-tr>
				<u-td>favor</u-td>
				<u-td>无收藏</u-td>
			</u-tr>
			<u-tr>
				<u-td>permission</u-td>
				<u-td>无权限</u-td>
			</u-tr>
			<u-tr>
				<u-td>history</u-td>
				<u-td>无历史记录</u-td>
			</u-tr>
			<u-tr>
				<u-td>news</u-td>
				<u-td>无新闻列表</u-td>
			</u-tr>
			<u-tr>
				<u-td>message</u-td>
				<u-td>消息列表为空</u-td>
			</u-tr>
			<u-tr>
				<u-td>list</u-td>
				<u-td>列表为空(通用)</u-td>
			</u-tr>
			<u-tr>
				<u-td>data</u-td>
				<u-td>数据为空(默认，通用)</u-td>
			</u-tr>
		</u-table>
		<view class="main">
			<view class="title">API</view>
			<u-table padding="2rpx">
				<u-tr>
					<u-th width="20%">参数</u-th><u-th>说明</u-th><u-th>默认值</u-th><u-th>可选值</u-th>
				</u-tr>
				<u-tr>
					<u-td>color</u-td><u-td>文字图标颜色</u-td><u-td>#c0c4cc</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>top</u-td><u-td>距上边距</u-td><u-td>500</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>size</u-td><u-td>图标大小</u-td><u-td>120</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>text</u-td><u-td>文字提示</u-td><u-td>无内容</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>src</u-td><u-td>图名称或路径</u-td><u-td>-</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>mode</u-td><u-td>内置图标</u-td><u-td>data</u-td><u-td>-</u-td>
				</u-tr>
				<u-tr>
					<u-td>show</u-td><u-td>是否显示组件</u-td><u-td>false</u-td><u-td>-</u-td>
				</u-tr>
			</u-table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmpty: true, // 是否显示
				text: '<e-empty></e-empty>'
			};
		},
		
		onLoad() {
			
		},
		
		methods:{

		}
	}
</script>

<style lang="scss">
	.container { padding: 20rpx; }
	.template { margin: 100rpx 0; }
	.code { text-align: center;line-height: 80rpx; }
	
	.tips { line-height: 20rpx; padding: 20rpx; }
	
	.title { font-weight: 700; line-height: 40rpx; padding: 10rpx ; }
</style>
