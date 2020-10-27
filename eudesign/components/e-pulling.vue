<template>
	<!-- <gracePage :customHeader="false"> -->
		<view slot="gBody" class="grace-body">
			<graceLoading :loadingType="isLoading"></graceLoading>
		</view>
	<!-- </gracePage> -->
</template>
<script>
import gracePage from "../graceUI/components/gracePage.vue";
import graceLoading from '../graceUI/components/graceLoading.vue';

var page = 1; // 模拟页码
export default {
	data() {
		return {
			isLoading: 1,
		}
	},
	props:{
		loadingType: {
			type: Number,
			default: 1,
		}
	},
	watch:{
		loadingType : function(newVal, oldVal){
			console.log(this.loadingType)
			this.isLoading = ( this.loadingType == 1? 1 : 3 );
		}
	},
	created:function(){
		// console.log(this.loadingType)
		this.isLoading = ( this.loadingType == 1? 1 : 3 );
	},
	methods:{
	},
	components:{
		gracePage, graceLoading
	}
}
</script>
<style>
</style>