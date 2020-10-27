<template>
	<view class="grace-body">
		<view v-show="title" class="grace-title grace-margin-top">
			<view class="grace-title-border"></view>
			<text class="grace-title-text grace-blue">{{ title }}</text>
		</view>
		<!-- 输入框 -->
		<view v-show="type == 'input' && !textarea" class="grace-form-item " :class=" noborder? '':'grace-border-b'">
			<view class="grace-form-label color-text"><text class="text" v-show="required">*</text>{{ name }}</view>
			<view class="grace-form-body main">
				<input :type="inputtype" class="grace-form-input view-value" name="name" :value="value"
					:maxlength="maxlength"
					:placeholder="placeholder"
					:password="password"
					:style="{'color': color }"
					@input="$emit('input', $event.target.value)"
					@blur="$emit('blur', $event.target.value)"
					@focus="$emit('focus', $event.target.value)"
					@click="$emit('click', $event.target.value)"
				/>
				<text class="grace-icons icon-close grace-form-icon grace-text-center icon" v-if="value != ''&& clear" @tap="clearInput"></text>
				<text v-if="!clear" class="perch"></text>
			</view>
		</view>
		
		<!-- 多行输入框 -->
		<view v-show="type == 'input' && textarea" class="grace-form-item mains grace-border-b" :class=" noborder? '':'grace-border-b'">
			<view class="grace-form-label color-text"><text class="text" v-show="required">*</text>{{ name }}</view>
			 <view class="uni-textarea">
				 <textarea auto-height :placeholder="placeholder" style="font-size: 28rpx;" :value="value"
					 :maxlength="maxlength"
					 @input="$emit('input', $event.target.value)"
					 @blur="$emit('blur', $event.target.value)"
					 @focus="$emit('focus', $event.target.value)"
					 @click="$emit('click', $event.target.value)"
				 />
			 </view>
			 <view class="grace-text-small grace-gray" 
				style="line-height:60rpx; text-align:right;">
					<text>{{value.length}}/</text>
					<text :class="[value.length >= maxWords ? 'grace-red' : '']">{{maxWords}}</text>
				</view>
		</view>
		
		<!-- 选择框 -->
		<view v-show="type == 'select'" class="grace-form-item" :class=" noborder? '':'grace-border-b'">
			<view class="grace-form-item ">
				<text class="grace-form-label color-text"><text class="text" v-if="required">*</text>{{ name }}</text>
				<view class="grace-list-body">
					<picker class="grace-form-picker" @change="bindPickerChange" :value="genderIndex" :range="list" :range-key="rant" name="gender">
						<text class="grace-text" :class="[genterValue? 'color_0' : 'color_2']">{{genterValue? genterValue: hint}}</text>
						<text class="grace-icons icon-arrow-down" style="margin-left:5px;"></text>
					</picker>
				</view>
			</view>
		</view>
		<!-- 文本 -->
		<view v-show="type == 'text'" class="grace-form-item grace-border-b">
			<view class="grace-form-item ">
				<view class="grace-list-body">
					<view class="grace-list-title" >
						<text class="grace-list-title-text">{{name}}</text>
						<text class="view-value">{{ value }}</text>
					</view>
				</view>
				<text class="perch"></text>
			</view>
		</view>
		<!-- 日期 -->
		<view v-show="type == 'date'"  class="grace-form-item" :class=" noborder? '':'grace-border-b'">
			<view class="grace-form-item ">
				<text class="grace-form-label color-text"><text class="text" v-if="required">*</text>{{ name }}</text>
				<view class="grace-list-body">
					<picker mode="date" class="grace-form-picker" :fields="fields" :value="date" :start="startTime" :end="endTime" @change="changeDate">
						<text class="uni-input" :class="[date? 'color_0' : 'color_2']">{{date? date: hint }}</text>
						<text class="grace-icons icon-arrow-down" style="margin-left:5px;"></text>
					</picker>
				</view>
			</view>
		</view>
		<!-- 跳转 -->
		<view v-show="type == 'view'">
			<view :class=" noborder? '':'grace-border-b'" class="grace-form-item">
				<view class="grace-list-body views" :style="{'padding': padding + ' 0' }" @click="$emit('click', $event.target.value)">
					<view class="grace-list-title" >
						<view v-if="isImage" class="main">
							<image :src="getImgUrl(image)" mode=""></image>
							<text class="grace-list-title-text">{{name}}</text>
						</view>
						
						<text class="view-value">{{ value }}</text>
					</view>
				</view>
				<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import gracePage from "../graceUI/components/gracePage.vue";
	
	export default {
		components: {
			gracePage
		},
		data() {
			return {
				pwd : '',
				pwdType  : 'password',
				
				
				// date: '',
				requestuserInfo: {
				  employeeCode: '',
				  mySelf: true,
				  mySelfEmployeeCode: '',
				  myself: true,
				},
				
				// 选择框
				genderIndex: 0,
				genterValue: '',
			}
		},
		props:{
			// 公共
			title: String,
			noborder: { // 清除图标
				type: Boolean,
				default: false,
			},
			type: { // 类型
				type: String,
				default: 'text',
			},
			name: { // 名称
				type: String,
				default: '标题',
			},
			value: { // 内容
				type: String,
				default: '',
			},
			required: { // 必选项
				type: [Boolean,String],
				default: false,
			},
			
			// 输入框
			placeholder: String, //框内提示
			password: Boolean,
			textarea: { // 
				type: Boolean,
				default: false,
			},
			inputtype: { //输入框类型
				type: String,
				default: 'text',
			},
			maxlength: { //最大长度
				type: [Number,String],
				default: 20,
			},
			clear: { // 清除图标
				type: Boolean,
				default: false,
			},
			color: { // 颜色
				type: String,
				default: '#333',
			},
			maxWords: { // 颜色
				type: Number,
				default: 200,
			},
			
			// 选择框
			list: {
				type: Array,
				default: () => [],
			},
			rant: {  // 对象名
				type: String,
				default: '',
			},
			index: {  // 
				type: Number,
				default: 0,
			},
			hint: {  // 默认值
				type: String,
				default: '',
			},
			default: { // 默认
				type: Boolean,
				default: false,
			},
			
			// 跳转
			isImage: { // 是否有图片
				type: Boolean,
				default: false,
			},
			image: { // 内容
				type: String,
				default: '',
			},
			padding: { // 内容
				type: String,
				default: '13rpx',
			},
			
			// 时间
			fields: { // 开始时间
				type: String,
				default: 'day',
			},
			date: { // 开始时间
				type: String,
				default: '',
			},
			startTime: { // 开始时间
				type: String,
				default: '1900-1-1',
			},
			endTime: { // 结束时间
				type: String,
				default: '2020-12-30',
			},
		},
		watch:{
			genderIndex : function(newVal, oldVal){
				this.$emit('change', newVal);
			},
			date : function(newVal, oldVal){
				this.$emit('change', newVal);
			},
		},
		created:function(){
			
			if(this.type == 'select'){
				if(this.default){
					console.log(this.value)
					console.log(this.list)
				}else {}
				this.genderIndex = this.index;
				// this.genterValue = this.value? this.value : this.list[0][this.rant];
				this.genterValue = this.value? this.value : '';
			}
			
		},
		methods: {
			clearInput : function(){
				this.value = '';
			},
			bindPickerChange:function(e){
			    this.genderIndex = e.detail.value;
				this.genterValue = this.list[e.detail.value][this.rant]
			},
			changeDate:function(e){
			    this.date = e.detail.value;
			},
			changeDates:function(e){
			    this.date = e;
			},
			showPwd : function () {
				this.pwdType = this.pwdType == "password" ? 'text' : 'password';
			},
			click(){
				this.$emit('click');
			},
			getImgUrl(icon){
			   return icon; 
			},
		}
	}	
</script>

<style lang="scss">
	.grace-form-item { width: 100%; justify-content: space-between; }
	.grace-form-body { width: auto; }
	.grace-form-label { width: auto; }
	.grace-form-icon { width: 40rpx; }
	.grace-list-arrow-right { width: 40rpx; margin-right: 24rpx; }
	.grace-list-body { margin-left: 0; }
	.text { width: 4rpx; color: #f5222d; margin-right: 12rpx; }
	.perch { width: 40rpx; }
	
	.main { display: flex; line-height: 100rpx; }
	.icon { margin-top: 8rpx; }
	.view-value { font-size: 26rpx; }
	.color-text { color: #333333; }
	
	/* 标题 */
	.title {display: flex; font-size: 28rpx; color: #aaa;padding: 10rpx 40rpx; line-height: 60rpx; background-color: #fff;}
	.title :first-child { width: 8rpx; line-height: 60rpx; margin-right: 10rpx;}
	.title .remark { font-size: 24rpx;}
	/* .grace-list-body { margin-left: 46rpx !important; } */
	
	/* .label { display: flex; justify-content: space-between; position: relative; width: 86%; padding: 20rpx 48rpx; font-size: 28rpx; line-height: 48rpx; color: #333; border-bottom: 2rpx solid #f5f5f5;} */
	
	.label { display: flex; justify-content: space-between; position: relative; width: 86%; padding: 20rpx 48rpx; font-size: 28rpx; line-height: 48rpx; color: #333; border-bottom: 2rpx solid #f5f5f5;}
	.label input { font-size: 28rpx; text-align: right; color: #1890ff; }
	
	.picker { width: 400rpx; text-align: right; }
	
	.button { position: fixed;bottom: 20rpx; width: 100%; }
	// button { margin-left: 5%; height: 80rpx; width: 90%; }
	/* .main { display: flex; } */
	.grace-list-body image { width: 50rpx; height: 50rpx; margin: -10rpx 20rpx 0 0; }
	.views image { width: 50rpx; height: 50rpx; margin: -6rpx 20rpx 0 0; }
	.mains { display: initial; 
	.uni-textarea { border-bottom: 2rpx solid #f5f5f5; padding-bottom: 20rpx;}
		
	}
	.uni-textarea textarea { width: 100%;
		height: auto;
		word-wrap : break-word;
	}
</style>
