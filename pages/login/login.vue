<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src='../../images/hre.jpg'></image>
				<view>彩云人力资源服务SaaS</view>
				<view>Cloud Human Resources Service SaaS</view>
			</view>
			
			<!-- 主体表单 -->
			<view class="main">
				<eInput v-model="phoneData"	type="text"	maxlength="11" placeholder="手机号"></eInput>
				<eInput	v-model="passData"	type="password"	maxlength="11"	placeholder="密码"></eInput>
			</view>
			<eButton class="eButton" text="登 录" :rotate="isRotate" @click.native="startLogin()" bgColor="#1890ff"></eButton>
			
			<!-- 其他登录 -->
			<view class="other_login cuIcon">
				<view class="login_icon">
					<view class="cuIcon-weixin font" @tap="login_weixin"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-weibo font" @tap="login_weibo"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-github font" @tap="login_github"></view>
				</view>
			</view>
			
			<!-- 底部信息 -->
			<view class="footer">
				<navigator url="forget" open-type="navigate">找回密码</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import eInput from '../../eudesign/components/e-login/e-loginput.vue' //input
	import eButton from '../../eudesign/components/e-login/e-logbutton.vue'
	export default {
		components:{
			eInput,eButton,
		},
		data() {
			return {
				phoneData:'', //用户/电话
				passData:'', //密码
				isRotate: false, //是否加载旋转
			};
		},
		
		mounted() {
			_this= this;
		},
		methods: {
			input(res){
				console.log(res)
			},
		    startLogin(){
				//登录
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (!this.$tools.check_phone(this.phoneData)){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '手机号不正确'
					});
				}else if(!this.$tools.check_password(this.passData)){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不正确'
					});
				}else {
					_this.isRotate=true
					setTimeout(function(){
						_this.isRotate=false
					},3000)	
				}	
		    }
		}
	}
</script>

<style>
	@import url("../../eudesign/components/e-login/css/icon.css");
	@import url("./css/main.css");
</style>
