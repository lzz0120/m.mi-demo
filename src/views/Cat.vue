<template>
	<!-- 顶部搜索框 -->
	<div class="hearer">
		<van-nav-bar style="background-color: #F2F2F2;"
		title="购物车" 
		left-arrow
		@click-left="onClickLeft"
		@click-right="onClickRight"
		>
		  <van-icon name="search" slot="right" />
		</van-nav-bar>
		
		<div>
			<van-swipe-cell>
			  <van-cell style="height: 46px; font-size: 16px;text-align: center;" :border="false" title="登陆后享受更多优惠"is-link to="/Index" value="去登录 " />
			</van-swipe-cell>
		</div>
		<div >
			<van-row >
				<div class="emptyCart">
					<van-col  span="24">
						  <p style="margin-top: 25px;">购物车还是空的 <button style="height: 27px; font-size: 13px;">去逛逛</button></p>
					</van-col>
				</div>
			  <img style="width: 100%;" :src="cat.data.header.body.items[0].img_url" >
			</van-row>
			
			<van-grid :column-num="2" icon-size="150" gutter=12>
			  <van-grid-item
			    v-for="item in cat.data.recom_list "
			    :key="item.image_url"
				:icon="item.image_url"
			    :text="item.name"

				@click="goTOProduct(item.action.path)"
			  />				  
				<!-- 点击商品跳转到商品详情页 -->						
			</van-grid>
			
			<br>
			<br>
			<br>
			
			
		</div>
		
		
	</div>
	
</template>

<script>
import {cat} from '../data.js'
export default{
	data(){
		return{
			data:[],
			cat:cat
		}
	},
	methods:{
		goTOProduct(path){
			this.$router.push(`/product/${path}`)
		},
		goShopping(path){
			this.$router.push(`/${path}`)
		},
		onClickLeft() {
			  this.$router.go(-1);
		},
		onClickRight() {
		  this.$toast('搜索管理购物车内的商品');
		},		
	}
}
</script>

<style>
	.emptyCart{
		height:70px;
		background-color: #e6e6e6;
	}
	
</style>
