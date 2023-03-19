<template>
	<view class="content">
		<Search/>
		<view class="default" />
		<Banner/>
	</view>
</template>

<script setup>
import Search from './search/index.vue'
import Banner from './banner/index.vue'

</script>

<style scoped>
	.content{
		padding: 0 20rpx;
	}
	.default{
		width: 100%;
		height: 20rpx;
	}
</style>
