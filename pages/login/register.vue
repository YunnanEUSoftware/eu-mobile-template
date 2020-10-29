<template>
	<view class="register">
	
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src='../../static/hre.jpg'></image>
				<view>彩云人力资源服务SaaS</view>
				<view>Cloud Human Resources Service SaaS</view>
			</view>
			<!-- 主体 -->
			<view class="main">
				<eInput v-model="phoneData" type="text" maxlength="11" placeholder="手机号"></eInput>
				<eInput v-model="passData" type="password" maxlength="11" placeholder="登录密码" isShowPass></eInput>
				<eInput v-model="verCode" type="number" maxlength="4" placeholder="验证码" isShowCode ref="runCode" @setCode="getVerCode()"></eInput>
			</view>
				
			<eButton class="eButton" text="注 册" :rotate="isRotate"  @click.native="startReg()" bgColor="#1890ff"></eButton>
			
			<!-- 底部信息 -->
			<view class="footer">
				<text @tap="isShowAgree" class="cuIcon" :class="showAgree?'cuIcon-radiobox':'cuIcon-round'"> 同意</text>
				<!-- 协议地址 -->
				<navigator url="" open-type="navigate" class="navigator">《协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import eInput from '../../eudesign/components/e-login/e-loginput.vue' //input
	import eButton from '../../eudesign/components/e-login/e-logbutton.vue' //button
	export default {
		data() {
			return {
				phoneData:'', // 用户/电话
				passData:'', //密码
				verCode:"", //验证码
				showAgree:true, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			eInput,eButton,
		},
		mounted() {
			_this= this;
		},
		methods: {
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (this.$tools.check_phone(this.phoneData)){
					this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '模拟倒计时触发'
					});
					
					setTimeout(function(){
						_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
						uni.showToast({
						    icon: 'none',
							position: 'bottom',
						    title: '模拟倒计时终止'
						});
					},3000)
				}else {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '手机号不正确'
					});
				}
			},
		    startReg() {
				//注册
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (!this.showAgree) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '请先同意《协议》'
				    });
				}else if(!tools.check_phone(this.phoneData)){
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '手机号不正确'
					});
				}else if(!tools.check_password(this.passData)){
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '密码不正确'
					});
				}else if(!tools.check_vc(this.verCode,4)){
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '验证码不正确'
					});
				}else {
					console.log("注册成功")
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