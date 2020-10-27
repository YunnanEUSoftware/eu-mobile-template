<template>
	<view class="">
		<eFooter :footerItems="footerItems" @change="changeFooter"></eFooter>
	</view>
</template>
<script>
export default {
	components:{
		'eFooter': () => import("../../eudesign/components/e-footer.vue")
	},
    data() {
        return {
			footerCurrent : 1,
			footerItems : [
				{ name: '首页', checkPath: require("../../images/personal_on.png"),noCheckPath: require("../../images/personal.png"),tag: 7},
				{ name: 'qq', checkPath: require("../../images/personal_on.png"),noCheckPath: require("../../images/personal.png"),tag: 2},
				{ name: '微信', checkPath: require("../../images/personal_on.png"),noCheckPath: require("../../images/personal.png"),},
				{ name: '个人中心', checkPath: require("../../images/personal_on.png"),noCheckPath: require("../../images/personal.png")},
			]
		}
    },
    methods: {
		changeFooter : function (index) {
			console.log(index)
		}
    },
    
}
</script>
<style>
</style>