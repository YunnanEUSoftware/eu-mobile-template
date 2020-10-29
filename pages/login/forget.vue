<template>
	<view class="forget">
		
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src='../../static/hre.jpg'></image>
				<view>彩云人力资源服务SaaS</view>
				<view>Cloud Human Resources Service SaaS</view>
			</view>
			<!-- 主体 -->
			<view class="main">
				<view class="tips">若你忘记了密码，可在此重置新密码。</view>
				<eInput v-model="phoneData" type="text" maxlength="11" placeholder="请输入手机号码"></eInput>
				<eInput v-model="passData" type="password" maxlength="11" placeholder="请输入新密码" isShowPass></eInput>
				<eInput v-model="verCode" type="number" maxlength="4" placeholder="验证码" isShowCode
					codeText="获取重置码" setTime="30" ref="runCode" @setCode="getVerCode()"></eInput>
			</view>
			
			<eButton class="eButton" text="重置密码" :rotate="isRotate" @click.native="startRePass()" bgColor="#1890ff"></eButton>

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
				phoneData: "", //电话
				passData: "", //密码
				verCode:"", //验证码
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			eInput,eButton
		},
		mounted() {
			_this= this;
		},
		methods: {
			getVerCode(){
				//获取验证码
				console.log(this.phoneData)
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
			startRePass() {
				//重置密码
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
				}else if(!this.$tools.check_vc(this.verCode,6)){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '验证码不正确'
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

