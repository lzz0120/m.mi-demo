<template>
  <div class="home" v-if="data.data">
<!--   <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		
		<van-row>
		  <van-col span="3"><img src="../assets/m.logo.png" style="height:18px;margin-top: 18px; "></van-col>
		  <van-col span="18"><van-search placeholder="搜索商品名"/></van-col>
		  <van-col span="3"><van-icon name="manager-o" size="30px" style="margin-top: 10px;" /></van-col>
		</van-row>
		
		<!-- 顶部导航栏 -->
		<van-tabs v-model="active">
		  <van-tab  v-for="item in data.data.tabs" :title="item.name"></van-tab> 
		</van-tabs>
	<div class="container" v-show="active==0">
		<!-- 轮播图 -->
		<van-swipe :autoplay="3000">
		<van-swipe-item v-for="(image, index) in data.data.data.sections[0].body.items" :key="index">
		<img class="full" :src="image.img_url_webp"/>
		</van-swipe-item>
		</van-swipe>
		
		<!-- 宫格 -->
		<van-grid icon-size="72px" :column-num="5">
		  <van-grid-item
			v-for="value in data.data.data.sections[1].body.items"
			:key="value.img_url_webp"
			:icon="value.img_url_webp"/>
		</van-grid>
		<van-grid icon-size="72px" :column-num="5">
		  <van-grid-item
			v-for="value in data.data.data.sections[2].body.items"
			:key="value.img_url_webp"
			:icon="value.img_url_webp"
		  />
		</van-grid>
		
		<!-- layout布局 -->
		<van-row>
			<van-col span="12"v-for="value in data.data.data.sections[4].body.items ">
					<img style="width: 100%;"  :src="value.img_url_webp" >
			</van-col>
		  <van-col span="24">
			  <img style="width: 100%;" :src="data.data.data.sections[6].body.items[0].img_url_webp" >
			  <img style="width: 100%;" :src="data.data.data.sections[8].body.items[0].img_url_webp" >
		  </van-col>
		 
		  <!--手机-->
		  <div>
			  <van-col span="12"v-for="value in data.data.data.sections[10].body.items ">
				  <img style="width: 100%;" :src="value.img_url_webp" >
				  <p>{{ value.product_name}}</p>
				  <p>{{ value.product_brief}}</p>
				  <p>￥{{ value.product_price}}</p>
				  <button class="button">立即购买</button>
			  </van-col>
			  
			  <van-col span="12"v-for="value in data.data.data.sections[12].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					   <button class="button">立即购买</button>
			  </van-col>
			  
			  
			  
			  <van-col span="24"v-for="value in data.data.data.sections[14].body.items ">
						  <p>{{ value.action_title}}>>></p>
			  </van-col> 
		  </div>
		 <div>
			 <van-col span="24">
			  <img style="width: 100%;"  :src="data.data.data.sections[16].body.items[0].img_url_webp" >
			  <img style="width: 100%;"  :src="data.data.data.sections[18].body.items[0].img_url_webp" >
			  </van-col>
			  
			  <!-- 电视  -->
			  <van-col span="12"v-for="value in data.data.data.sections[20].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					   <button class="button">立即购买</button>
			  </van-col>
			  <van-col span="12"v-for="value in data.data.data.sections[22].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					   <button class="button">立即购买</button>
					  </van-col>
			  <van-col span="12"v-for="value in data.data.data.sections[24].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					  <button class="button">立即购买</button>
			  </van-col>
			  
			  <div>
					  <van-col span="24"v-for="value in data.data.data.sections[26].body.items ">
						 <p>{{ value.action_title}}>>></p>
					  </van-col>
			  </div>
				 
			  <van-col span="24"> 
			  <img style="width: 100%;"  :src="data.data.data.sections[28].body.items[0].img_url_webp" >
			  <img style="width: 100%;"  :src="data.data.data.sections[30].body.items[0].img_url_webp" >
			  </van-col>
			  
			  <!-- 笔记本 -->
			 <van-col span="12"v-for="value in data.data.data.sections[32].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					  <button class="button">立即购买</button>
			  </van-col>
			  
			  <van-col span="24"> 
			  <img style="width: 100%;"  :src="data.data.data.sections[40].body.items[0].img_url_webp" >
			  <img style="width: 100%;"  :src="data.data.data.sections[42].body.items[0].img_url_webp" >
			  </van-col>
			 
			  <van-col span="12"v-for="value in data.data.data.sections[44].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					  <button class="button">立即购买</button>
			  </van-col>
			  
			  <!-- 家电 -->
			  <van-col span="12"v-for="value in data.data.data.sections[45].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					  <button class="button">立即购买</button>
			  </van-col>
			  
			  <van-col span="12"v-for="value in data.data.data.sections[46].body.items ">
					  <img style="width: 100%;"  :src="value.img_url_webp" >
					  <p>{{ value.product_name}}</p>
					  <p>{{ value.product_brief}}</p>
					  <p>￥{{ value.product_price}}</p>
					  <button class="button">立即购买</button>
			  </van-col>
				
			  <van-col span="24"v-for="value in data.data.data.sections[48].body.items ">
					 <p>{{ value.action_title}}>>></p>
			  </van-col>
			  
			  <van-col span="24"> 
			  <img style="width: 100%;"  :src="data.data.data.sections[50].body.items[0].img_url_webp" >
			  <img style="width: 100%;"  :src="data.data.data.sections[52].body.items[0].img_url_webp" >
			  </van-col>
			  
			 <!-- 智能产品 -->
			 <van-row>
					 <van-col span="12"v-for="value in data.data.data.sections[53].body.items ">
							  <img style="width: 100%;"  :src="value.img_url" >	  
					 </van-col>
					 <van-col span="12"v-for="value in data.data.data.sections[53].body.items ">
						  <p>{{ value.product_name}}</p>
						  <p>{{ value.product_brief}}</p>
						  <p>￥{{ value.product_price}}</p> 
					 </van-col>
			  </van-row>
			   
			  <van-row>
					  <van-col span="12"v-for="value in data.data.data.sections[54].body.items " >
						  <p>{{ value.product_name}}</p>
						  <p>{{ value.product_brief}}</p>
						  <p>￥{{ value.product_price}}</p>		  
					  </van-col>
					  <van-col span="12"v-for="value in data.data.data.sections[54].body.items ">
						 <img style="width: 100%;"  :src="value.img_url"> 
					  </van-col>
			  </van-row>
			 
					  <van-col span="12"v-for="value in data.data.data.sections[56].body.items ">
						<img style="width: 100%;"  :src="value.img_url" >
					  </van-col>
			 
					  <van-col span="12"v-for="value in data.data.data.sections[56].body.items ">
							<p>{{ value.product_name}}</p>
							<p>{{ value.product_brief}}</p>
							<p>￥{{ value.product_price}}</p>
					  </van-col>
					  
					  <van-col span="24"v-for="value in data.data.data.sections[56].body.items ">
						  <p>{{ value.action_title}}>>></p>
					  </van-col>
					  
					  <van-col span="12"v-for="value in data.data.data.sections[58].body.items ">
							  <img style="width: 100%;"  :src="value.img_url" >
							  <p>{{ value.product_name}}</p>
							  <p>{{ value.product_brief}}</p>
							  <p>{{ value.product_price}}</p>
							  
					  </van-col>
					  
					  <van-col span="12"v-for="value in data.data.data.sections[60].body.items ">
							  <img style="width: 100%;"  :src="value.img_url" >
							  <p>{{ value.product_name}}</p>
							  <p>{{ value.product_brief}}</p>
							 
							  
					  </van-col>
					  
					  <van-col span="12"v-for="value in data.data.data.sections[62].body.items ">
						<img style="width: 100%;"  :src="value.img_url" >
						<p>{{ value.product_name}}</p>
						<p>{{ value.product_brief}}</p>
					  </van-col>
					 
			  
			  <van-col span="24"> 
			  <img style="width: 100%;"  :src="data.data.data.sections[64].body.items[0].img_url_webp" > 
			  <img style="width: 100%;height: 120px;"  :src="data.data.data.sections[65].body.items[0].img_url_webp" >
			  </van-col>
			  <br>
			  <br>
	 </div>
	  
	</van-row>
	</div>
	
	<div class="container1" v-show="active==1">	
		<van-row>
		<!-- 限时秒杀 -->
			<van-col span="24">
				<img style="width: 100%;"  :src="data1.data.data.sections[0].body.items[0].img_url_webp" >
				<img style="width: 100%;"  :src="data1.data.data.sections[4].body.items[0].img_url_webp" >
			</van-col>
		</van-row>
		
		<van-swipe :loop="true" :width="200">
		  <van-swipe-item><img style="width: 100%;":src="data1.data.data.sections[6].body.items[0].img_url"></van-swipe-item>
		  <van-swipe-item><img style="width: 100%;" :src="data1.data.data.sections[6].body.items[1].img_url"></van-swipe-item>
		  <van-swipe-item><img style="width: 100%;" :src="data1.data.data.sections[6].body.items[2].img_url"></van-swipe-item>
		  <van-swipe-item><img style="width: 100%;" :src="data1.data.data.sections[6].body.items[3].img_url"></van-swipe-item>
		</van-swipe>
		
		
		
		<van-row>
		 <!-- 福利专区 -->	
		 <van-col span="24">
		  <img style="width: 100%;"  :src="data1.data.data.sections[8].body.items[0].img_url_webp" >
		  </van-col>
		</van-row>
		
		<van-row>
		    <van-col span="8" v-for="value in data1.data.data.sections[9].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
		    </van-col>
			<van-col span="8" v-for="value in data1.data.data.sections[10].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			</van-col>
			<van-col span="8" v-for="value in data1.data.data.sections[11].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			</van-col>
		</van-row>
		
	<div>
		<van-row>
		 <!-- 重磅新品 -->	
			 <van-col span="24">
				  <img style="width: 100%;"  :src="data1.data.data.sections[12].body.items[0].img_url_webp" >
				  <img style="width: 100%;"  :src="data1.data.data.sections[14].body.items[0].img_url_webp" >
			  </van-col>
		</van-row>
		<van-row>
			 <van-col span="24" v-for="value in data1.data.data.sections[16].body.items ">
				<img style="width: 100%;"  :src="data1.data.data.sections[16].body.items[0].img_url_webp">
			 </van-col>		 
		</van-row>
		<van-row>
			<van-col span="16" v-for="value in data1.data.data.sections[16].body.items ">
				<div class="con-text">
					<p>{{value.product_name}}</p>
					<p>{{value.product_brief}}</p>
					<p>￥{{value.product_price}}</p>
				</div>
			</van-col>
			<van-col span="8">
					 <button class="button" style="margin-top: 70px;">立即预约</button>
			</van-col>
		</van-row>
		
		<van-row>
			 <van-col span="24" v-for="value in data1.data.data.sections[18].body.items ">
				<img style="width: 100%;"  :src="data1.data.data.sections[18].body.items[0].img_url_webp" >
			 </van-col>
		</van-row>
		<van-row>
			 <van-col span="16" v-for="value in data1.data.data.sections[18].body.items ">	
				<div class="con-text">
					<p>{{value.product_name}}</p>
					<p>{{value.product_brief}}</p>
					<p>￥{{value.product_price}}</p>
				</div>
			 </van-col>
			<van-col span="8">
				<button class="button" style="margin-top: 70px;">立即预约</button>
			</van-col>
		</van-row>
		<van-row>
		    <van-col span="12" v-for="value in data1.data.data.sections[20].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
	</div>
	<div>
		<van-row>
		 <!-- 热销爆款-->	
			 <van-col span="24">
				  <img style="width: 100%;"  :src="data1.data.data.sections[22].body.items[0].img_url_webp" >
				  <img style="width: 100%;"  :src="data1.data.data.sections[24].body.items[0].img_url_webp" >
			  </van-col>
		</van-row>
		<van-row>
		    <van-col span="24" v-for="value in data1.data.data.sections[26].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
		
	</div>

	<div>
		<van-row>
		    <van-col span="12" v-for="value in data1.data.data.sections[28].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
		
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[30].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[32].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[34].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[36].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		
		<van-row>
		    <van-col span="24" v-for="value in data1.data.data.sections[38].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
		<van-row>
		    <van-col span="24" v-for="value in data1.data.data.sections[40].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
		<van-row>
		    <van-col span="12" v-for="value in data1.data.data.sections[42].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
		</van-row>
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[44].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12" v-for="value in data1.data.data.sections[46].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
		 <!-- 热销爆款-->	
			 <van-col span="24">
				  <img style="width: 100%;"  :src="data1.data.data.sections[63].body.items[0].img_url_webp" >
			 </van-col>
		</van-row>
		<br>
		<br>
		<br>	
	</div>
	</div>
	<div class="container2" v-show="active==2">
		<van-row>
			<van-col span="24">
				<img style="width: 100%;"  :src="data2.data.data.sections[0].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data2.data.data.sections[1].body.items[0].img_url_webp">
			</van-col>
		</van-row>
		<van-row>
			<van-col span="8" v-for="value in data2.data.data.sections[2].body.items ">
				<img style="width: 100%;" :src="value.img_url_webp" >
			</van-col>
		</van-row>
		<van-row>
			<van-col span="24">
				<img style="width: 100%;"  :src="data2.data.data.sections[3].body.items[0].img_url_webp">
			</van-col>
		</van-row>
		<van-row>
		  <van-col span="6" v-for="value in data2.data.data.sections[4].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
		  </van-col>
		</van-row>
		<van-row>
			<van-col span="24">
				<img style="width: 100%;"  :src="data2.data.data.sections[5].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data2.data.data.sections[6].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data2.data.data.sections[7].body.items[0].img_url_webp">
			</van-col>
		</van-row>
		<van-row>
		    <van-col span="8" v-for="value in data2.data.data.sections[8].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp">
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
		    </van-col>
			<van-col span="8" v-for="value in data2.data.data.sections[10].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
			<van-col span="8" v-for="value in data2.data.data.sections[12].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="8" v-for="value in data2.data.data.sections[14].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <div class="con-text">
				  <p>{{value.product_name}}</p>
				  <p>{{value.product_brief}}</p>
				  <p>{{value.product_price}}</p>
			  </div>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="24">
				<img style="width: 100%;"  :src="data2.data.data.sections[89].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data2.data.data.sections[91].body.items[0].img_url_webp">
			</van-col>
		</van-row>
		
		
	</div>
	<div class="container" v-show="active==3">
		<van-row>
			<van-col span="24">
				<img style="width: 100%;"  :src="data4.data.data.sections[0].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data4.data.data.sections[1].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data4.data.data.sections[2].body.items[0].img_url_webp">
				<img style="width: 100%;"  :src="data4.data.data.sections[3].body.items[0].img_url_webp">
			</van-col>
		</van-row>
		<van-row>
		    <van-col span="8" v-for="value in data4.data.data.sections[4].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <p>{{value.product_name}}</p>
			  <p>{{value.product_brief}}</p>
			  <p>{{value.product_price}}</p>
			  <button class="button">立即购买</button>
		    </van-col>
			<van-col span="8" v-for="value in data4.data.data.sections[6].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <p>{{value.product_name}}</p>
			  <p>{{value.product_brief}}</p>
			  <p>{{value.product_price}}</p>
			  <button class="button">立即购买</button>
			</van-col>
			<van-col span="8" v-for="value in data4.data.data.sections[8].body.items ">
			  <img style="width: 100%;" :src="value.img_url_webp" >
			  <p>{{value.product_name}}</p>
			  <p>{{value.product_brief}}</p>
			  <p>{{value.product_price}}</p>
			  <button class="button">立即购买</button>
			</van-col>
		</van-row>
		<br>
		<br>
		<br>
		
	</div>
	<div class="container" v-show="active==4">
		<h2>笔记本</h2>
	</div>
	<div class="container" v-show="active==5">
		<h2>家电</h2>
	</div>
	<div class="container" v-show="active==6">
		<h2>生活周边</h2>
	</div>
</div>	
</template>
<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
import {data1,data2,data3,data4} from '../data.js'
export default{
	data(){
		return{
			active:0,
			data:[],
			data1:[],
			data2:[],
			data3:[],
			data4:[],
		}
	},
	created(){
		this.getRecommendData();
		this.data1=data1;
		this.data2=data2;
		this.data3=data3;
		this.data4=data4;
	},
	methods:{
		getRecommendData(){
			if(localStorage.getItem("data")){
				this.data= JSON.parse(localStorage.getItem("data"))
			}
			else
			{
				this.$http({
					url: 'http://biger.applinzi.com/page.php?page',
					method: 'get'
				}).then(res=>{
					this.data=res.data;
					localStorage.setItem("data",JSON.stringify(this.data))
				})
			}
		}
	}
		
}
		
</script>
<style>
	.full{
		width: 100%;
	}
	
	.van-grid-item__content{
		padding: 0;
	}
	.button{
		
		color: white;
		height: 30px;
		border-radius: 5px;
		background-color: red;
		
	}
	.container1{
		background-color:#250168;
	}
	.con-text{
		color: white;
		text-align: center;
		
	}
	.container2{
		background-color:#250168;
	}
	.phoneshow{
		height: 100px;
		background-color: white;
	}
	
	
</style>

	
 


