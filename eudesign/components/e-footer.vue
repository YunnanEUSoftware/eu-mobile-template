<template>
	<gracePage :customHeader="false">
		<view class="grace-footer grace-grids grace-nowrap" slot="gFooter">
			<view class="grace-grids-items grace-relative"  v-for="(item, index) in footerItems" :key="index" @tap="changeFooter(index)">
				<image class="grace-grids-icon-img" :src="footerCurrent == index? item.checkPath : item.noCheckPath"></image>
				<text class="grace-grids-text">{{item.name}}</text>
				<view v-if="item.tag>0" class="grace-badge grace-bg-red grace-badge-absolute grace-white" style="top:15rpx; right:15rpx;">{{item.tag}}</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../graceUI/components/gracePage.vue';
export default {
	components:{ gracePage },
    data() {
        return {
			footerCurrent : 0,
		}
    },
	props:{
		footerItems: {
			type: Array,
			default: [],
		},
	},
	created:function(){
		this.width = 100/this.footerItems.length + '%';
	},
	watch:{
		footerCurrent : function(newVal, oldVal){
			this.$emit('change', newVal);
		}
	},
    methods: {
		changeFooter : function (index) {
			this.footerCurrent = index;
		}
    },
	
    
}
</script>
<style>
/* 调整宫格大小 grace-grids-items */
.grace-grids-items{width:20%; }
.grace-grids { justify-content: space-around; }
.grace-grids-text{line-height:30rpx; font-size:20rpx; margin-top:2px; color:#6B7375;}
</style>