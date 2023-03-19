<template>
	<view class="content">
		<view class="left" @click="controlPopup">
			<image src="../../../static/img/menu.png" mode=""></image>
		</view>
		<view class="middle">
			<view class="search">
				<view class="search-icon">
					<van-icon name="search" size='50rpx'/>
				</view>
				<view class="search-title">
					在你身边 ( 女声key版 )
				</view>
			</view>
		</view>
		<view class="right">
			<image src="../../../static/img/yuyin.png" mode=""></image>
		</view>
	</view>
	<!-- 弹出层 -->
	<van-popup
	  :show="isShow"
	  position="left"
	  overlay="{{ true }}"
	  @click-overlay='controlPopup'
	>
	  <view class="popup-container">
	  	<view class="popup-header">
			<view class="via">
				<image src="../../../static/img/1.png" mode=""></image>
			</view>
			<view class="name">
				infatuation--Y 
			</view>
			<view class="saoma">
				<van-icon name="scan" size='40rpx'/>
			</view>
	  	</view>
		<view class="popup-VIP">
			<image src="../../../static/img/vip.png" mode=""></image>
		</view>
		<view class="popup-top">
			1
		</view>
		<view class="popup-middle">
			2
		</view>
		<view class="popup-bottom">
			3
		</view>
	  </view>
	</van-popup>
</template>

<script setup>
import { ref } from "vue";
	// 控制弹出层
	let isShow = ref(false)
	function controlPopup () {
		isShow.value = !isShow.value
	}
	
</script>

<style scoped>
	.content{
		/* background-color: aqua; */
		display: flex;
		height: 70rpx;
	}
	.left{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.left>image{
		width: 50%;
		height: 70%;
	}
	.middle{
		flex: 5;
		display: flex;
		justify-content: center;
		font-size: 32rpx;
		color: #676767;
	}
	.middle>.search{
		border: 1px solid #efefef;
		padding-left: 35rpx;
		width: 95%;
		height: 100%;
		border-radius: 50rpx;
		background-color: #efefef;
		display: flex;
		align-items: center;
		justify-content: start;
	}
	.middle>.search>.search-title{
		margin-left: 20rpx;
	}
	.right{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right>image{
		width: 50%;
		height: 70%;
	}
	
	/* 弹出层样式 */
	.popup-container{
		width: 600rpx;
		height: 1350rpx;
		padding: 20rpx;
		background-color: #ebebeb;
	}
	.popup-header{
		height: 60rpx;
		/* background-color: pink; */
		display: flex;
		align-items: center;
		justify-content: start;
	}
	.popup-header>.via{
		height: 60rpx;
		width: 60rpx;
	}
	.popup-header>.via>image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.popup-header>.name{
		font-size: 28rpx;
		margin-left: 30rpx;
		margin-right: 250rpx;
	}
	.popup-VIP{
		margin-top: 20rpx;
	}
	.popup-VIP>image{
		height: 200rpx;
		width: 100%;
	}
	.popup-top{
		width: 100%;
		height: 300rpx;
		background-color: pink;
	}
	.popup-middle{
		width: 100%;
		height: 600rpx;
		background-color: aqua;
		margin: 30rpx 0;
	}
	.popup-bottom{
		width: 100%;
		height: 90rpx;
		background-color: aquamarine;
		margin-bottom: 10rpx;
	}
</style>