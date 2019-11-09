<template>
  <div class="classify">
	  <!-- 顶部导航栏 -->
    <div class="hearer">
		<van-nav-bar 
		title="分类" 
		left-arrow
		@click-left="onClickLeft"
		@click-right="onClickRight"
		>
		  <van-icon name="search" slot="right" />
		</van-nav-bar>
	</div>
	<div class="content">
		<!-- Layout 布局 -->
		<van-row>
		  <van-col span="6">
			  <!-- Sidebar 侧边导航 -->
			  <van-sidebar v-model="activeKey">
			    <van-sidebar-item :title="item.category_name" v-for="item in classify.data" :key="item.category_name" />
			  </van-sidebar>
		  </van-col>
		  <van-col span="18">
			  
			  <div v-for="(item,index) in classify.data" v-show="activeKey==index" >
				  <div v-for="item1 in item.category_list">
					  <div v-if="item1.view_type=='cells_auto_fill'">
						  <img :src="item1.body.items[0].img_url_webp" alt="" style="width: 100%;" >
					  </div>
					  <div v-else-if="item1.view_type=='category_title'" style="width: 50%;margin: 0 auto;">
						  
						  <van-divider> {{ item1.body.category_name }} </van-divider>
					  </div>
					  <div v-else-if="item1.view_type=='category_group'">
						  
						  <!-- 宫格 -->
						  <van-grid :column-num="3" icon-size="57">
						    <van-grid-item
						      v-for="item2 in item1.body.items"
						      :key="item2.img_url_webp"
						      :icon="item2.img_url_webp"
						      :text="item2.product_name"
							  
							 @click="goTOProduct(item2.action.path)"
						    />
							<!-- 分类页进入商品详情页 -->
						  </van-grid>
					  </div>
					  
				  </div>
			  </div>
	
		  </van-col>
		  
		</van-row>

	</div>
	
	
	
  </div>
</template>

<script>
import {classify} from '../data.js'
export default{
	data(){
		return{
			activeKey:0,
			classify:classify
		}
	},
	
	methods:{
		goTOProduct(path){
			this.$router.push(`/product/${path}`)
		},
		onClickLeft() {
			  this.$router.go(-1);
		},
		onClickRight() {
		  this.$toast('搜索您喜欢的商品');
		},		
	}
		
}
</script>

