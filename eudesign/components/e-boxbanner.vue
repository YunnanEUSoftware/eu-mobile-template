<template>
	<!-- <gracePage :customHeader="false"> -->
		<!-- <view class="grace-body" slot="gBody"> -->
			<!-- <view class="demo"> -->
				<view>
					<graceBoxBanner :items="items" @taped="taped"></graceBoxBanner>
				</view>
			<!-- </view> -->
		<!-- </view> -->
	<!-- </gracePage> -->
</template>
<script>
import gracePage from "../../eudesign/graceUI/components/gracePage.vue";
import graceBoxBanner from "../../eudesign/graceUI/components/graceBoxBanner.vue";
export default {
	components:{gracePage,graceBoxBanner},
    data() {
    	return {}
    },
	props:{
		items: { // 类型 -- warn(警告) -- primary(正常) -- default(默认)
			type: Array,
			default: [],
			index: '',
		}
	},
	watch:{
		index : function(newVal, oldVal){
			this.$emit('taped', newVal);
		}
	},
	methods: {
		taped : function (index) {
			this.index = index;
		}
	},
}
</script>
<style>
</style>