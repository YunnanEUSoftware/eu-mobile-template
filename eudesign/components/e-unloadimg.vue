<template>
<!-- 	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body"> -->
			<graceSelectImg :maxFileNumber="maxFileNumber" :btnName="btnName":closeBtnColor="closeBtnColor"
			:imgMode="imgMode" @removeImg="removeImg" @change="change" :items="items"></graceSelectImg>
<!-- 		</view>
	</gracePage> -->
</template>
<script>
import gracePage from "../graceUI/components/gracePage.vue";
import graceSelectImg from "../graceUI/components/graceSelectImg.vue";
export default {
	data() {
		return {
			imgLists : []
		}
	},
	props:{
		maxFileNumber : {
			type : Number,
			default : 9
		},
		btnName : {
			type : String,
			default : "添加照片"
		},
		items : {
			type : Array,
			default : function () {
				return [];
			}
		},
		closeBtnColor : {
			type : String,
			default : "#666666"
		},
		imgMode:{
			type:String,
			default:'widthFix'
		}
	},
	created:function () {
		this.imgLists = this.items;
	},
	watch:{
		imgLists : function(newVal, oldVal){
			this.$emit('change', newVal);
		}
	},
	methods:{
		removeImg : function (e) {
			console.log('被删除的图片信息');
			console.log(e);
		},
		change(res){
			this.imgLists = res
		}
	},
	components:{
		gracePage, graceSelectImg
	}
}
</script>
<style>
</style>