<template>
	<view>
		<eLabel type="input" :password="password" title="表单" v-model="value" name="标题一" @input="input" @click="click"></eLabel>
		<eLabel type="select" value="选择框" name="标题二" :list="list" @change="change"></eLabel>
		<eLabel type="text" value="文本" name="标题三"></eLabel>
		<eLabel type="view" value="跳转" name="标题四" @click="jumpPage"></eLabel>
		<eLabel type="view" isImage noborder :image="image" value="跳转" name="标题四" @click="jumpPage"></eLabel>
	</view>
</template>
<script>
export default {
	components: {
		'eLabel': () => import("../../eudesign/components/e-label.vue")
	},
	data() {
		return {
			value: '内容',
			list: ['请选择性别', '男', '女'],
			password: false,
			image: require("../../images/BUDGET.png")
		}
	},
	
	methods: {
		input(res){
			console.log(res)
		},
		click(res){
			console.log(res)
		},
		change(res){
			console.log(res)
		},
		jumpPage(e){
			console.log(e)
		},
	}
}
</script>