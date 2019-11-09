<template>
	<div>
		<p>当前商品id为: {{this.$route.params.id}}</p>
		
		<!-- 轮播图 -->
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item, index) in product.data.goods_info[0].gallery_v3" :key="index">
		    <img :src="item.img_url" style="width: 100%;" />
		  </van-swipe-item>
		</van-swipe>
		
		<!-- GoodsAction 商品导航栏 -->
		<van-goods-action>
		  <van-goods-action-icon to="/" icon="wap-home-o" text="首页" />
		  <van-goods-action-icon to="/cat" icon="cart-o" text="购物车" info="5" />
		  <van-goods-action-button to="/cat" type="danger" text="立即抢购" />
		</van-goods-action>
		
		<!-- 顶部返回+分享 -->
		<van-icon @click="$router.go(-1)" name="arrow-left" size=30 style="position: fixed; left: 20px; top: 20px;"></van-icon>
	</div>
</template>

<script>
import {product} from '../data.js'
export default{
	data(){
		return{
			product:product,
			num:this.$store.state.goods[0].num
		}
	}
}
</script>

<style>
	

</style>
