<template>
	<view class="container">
		<swiper 
			class="swiper" 
			circular
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="interval"
			:duration="duration">
			<swiper-item v-for="item in banners" :key="item.encodeId">
				<image :src="item.imageUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getBannerApi } from '../../api/index.js'
	
let interval = ref(4000)
let duration = ref(500)


// 获取轮播图
let banners = reactive([])
let params = reactive({
	url:'/banner',
	method:'GET',
	type:'2'
})
async function getBanner () {
	const res = await getBannerApi(params)
	let arr = res.data.banners
	arr.forEach((item)=>{
		banners.push(item)
	})
}
getBanner()

</script>

<style scoped>
	.container{
		background-color: aqua;
		border-radius: 10rpx;
	}
</style>
