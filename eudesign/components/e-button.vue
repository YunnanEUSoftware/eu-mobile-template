<template>
	<gracePage :customHeader="false">
		<view class="grace-body" slot="gBody">
			<view class="demo">
				<view :style="{'width': size + '%'}">
					<button 
						:type="type" class="grace-button" :loading="loading" :disabled="disabled" :plain="plain" 
						@click="$emit('click', $event.target.value)"
						>
						<view :class="_rotate?'rotate_loop':''">
							<text v-show="_rotate" class="cuIcon cuIcon-loading1 "></text>
							<text v-show="!_rotate">{{ text }}</text>
						</view>
					</button>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../graceUI/components/gracePage.vue";
export default {
	components:{gracePage},
    data() {
    	return {
			texts: ''
		}
    },
	props:{
		text: { // 文字
			type: String,
			default: '确定',
		},
		type: { // 类型 -- warn(警告) -- primary(正常) -- default(默认)
			type: String,
			default: 'primary',
		},
		loading: { // 是否加载中
			type: Boolean,
			default: false,
		},
		disabled: { // 是否禁用
			type: Boolean,
			default: false,
		},
		size:  { // 大小 - default(正常) -- default(默认)
			type: String,
			default: '100',
		},
		plain: { // 是否透明
			type: Boolean,
			default: false,
		},
		
		rotate:{
			//是否启动加载
			type: [Boolean,String],
			default: false,
		}, 
	},
	watch:{
		text : function(newVal, oldVal){
			this.text = newVal
		},
	},
	created:function(){
		// this.texts = this.text;
	},

	computed:{
		_rotate() {
			//处理值
			return String(this.rotate) !== 'false'
		},
	},
	methods:{
		change(e){
			this.text = e
		}
	},
}
</script>
<style>
	@import url("./css/icon.css");
	
.demo { display:flex; flex-wrap:nowrap; border-left:1px solid #F8F8F8;}
.demo > view{ text-align:center; margin:10rpx;}

.color { background-color: #1890ff; }

.dlbutton {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 30rpx;
		white-space:nowrap;
		overflow: hidden;
		width:80%;
		height:100rpx;
		background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6));
		box-shadow:0rpx 0rpx 13rpx 0rpx rgba(164,217,228,0.4);
		border-radius:2.5rem;
		margin-top: 0rpx;
	}
	.dlbutton_loading {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 30rpx;
		width:100rpx;
		height:100rpx;
		background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6));
		box-shadow:0rpx 0rpx 13rpx 0rpx rgba(164,217,228,0.4);
		border-radius:2.5rem;
		margin-top: 0rpx;
	}
	.buttonBorder{
	    border: none ;
	    border-radius: 2.5rem ;
	    -webkit-box-shadow: 0 0 60rpx 0 rgba(0,0,0,.2) ;
	    box-shadow: 0 0 60rpx 0 rgba(0,0,0,.2) ;
	    -webkit-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -moz-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -ms-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -o-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	}

/* 旋转动画 */
	.rotate_loop{
		-webkit-transition-property: -webkit-transform;
	    -webkit-transition-duration: 1s;
	    -moz-transition-property: -moz-transform;
	    -moz-transition-duration: 1s;
	    -webkit-animation: rotate 1s linear infinite;
	    -moz-animation: rotate 1s linear infinite;
	    -o-animation: rotate 1s linear infinite;
	    animation: rotate 1s linear infinite;
	}
	@-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
	    to{-webkit-transform: rotate(360deg)}
	}
	@-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
	    to{-moz-transform: rotate(359deg)}
	}
	@-o-keyframes rotate{from{-o-transform: rotate(0deg)}
	    to{-o-transform: rotate(359deg)}
	}
	@keyframes rotate{from{transform: rotate(0deg)}
	    to{transform: rotate(359deg)}
	}
</style>