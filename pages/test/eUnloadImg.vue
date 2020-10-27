<template>
<!-- 	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body"> -->
			<eUnloadimg :maxFileNumber="9" @removeImg="removeImg" @change="imgsChange" :items="defaultItems"></eUnloadimg>
<!-- 		</view>
	</gracePage> -->
</template>
<script>
export default {
	components:{
		'eUnloadimg': () => import("../../eudesign/components/e-label.vue")
	},
	data() {
		return {
			// 如果不需要默认值 请将此变量设置为 [] 
			// 或者 组件不设置 items 属性
			defaultItems : ['blob:http://localhost:8080/75ad23c9-8819-4e04-b4da-38428e80c254']
		}
	},
	onLoad:function(){
	},
	methods:{
		imgsChange : function (imgs){
			console.log('选择的图片数据变化了');
			console.log(imgs);
		},
		removeImg : function (e) {
			console.log('被删除的图片信息');
			console.log(e);
		}
	},
	
}
</script>
<style>
</style>