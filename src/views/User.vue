<template>
	<div>
		<div class="user-header">
			<div class="seclect">
				<van-icon name="user-circle-o" color="#FFB500" size="55"/>
				<van-cell 
				title="登录"
				is-link to="/Index" 
				:border="false" 
				arrow-direction="left" 
				style="margin-top: 12px; color: white;border: 1px solid #EC7B10;background-color: #EC7B10;">
				</van-cell>
				<van-cell 
				title="注册"
				color="#EC7B10"
				is-link to="/Regist" 
				arrow-direction="left" 
				style="margin-left: -35px;margin-top: 12px; color: white;border: 1px solid #EC7B10;background-color: #EC7B10;">
				</van-cell>
			</div>
		</div>
		<div>
			<van-cell title="我的订单"is-link to="/" style="text-align: left;border-bottom: 1px solid #D9D9D9;">全部订单</van-cell>
			<br>
			<br>
			<van-grid clickable :column-num="3">
			  <van-grid-item icon="paid" size="100" text="待付款" to="/cat" />
			  <van-grid-item icon="logistics" text="待收货"  to="/"  />
			  <van-grid-item icon="setting-o" text="退换修" to="/cat" />
			</van-grid>
			<br>
			<div class="empyyDiv"></div>
			<br>
			<div class="seclect">
				<van-icon name="vip-card-o" color="#EC7B10"size="28"/>
				<van-cell id="cell"title="会员中心"is-link to="/" ></van-cell>
			</div>
			
			<div class="seclect">
				<van-icon name="pending-payment" color="#51BBE0" size="28"/>
				<van-cell id="cell" title="我的优惠"is-link  to="/"/>
			</div>
			
			<div class="empyyDiv"></div>
			<div class="seclect">
				
				<van-icon name="flower-o" color="#F96C5E" size="28"/>
				<van-cell title="服务中心"is-link to="/" id="cell"></van-cell>	
			</div>
			<div class="seclect">
				<van-icon name="wap-home-o" color="#FFB78A" size="28"/>
				<van-cell title="小米之家"is-link to="/" id="cell"></van-cell>
				<br>
			</div>
			
			<div class="empyyDiv"></div>
			
			<div class="seclect">
				<van-icon name="medel-o" color="#FFD064" size="28"/>
				<van-cell title="我的F码"is-link to="/"id="cell"></van-cell>
			</div>
			
			<div class="seclect">
				<van-icon name="shop-collect-o" color="#FFD064" size="28"/>
				<van-cell title="礼物券兑换"is-link to="/" id="cell"></van-cell>
			</div>
			
			<div class="empyyDiv"></div>
			<div class="seclect">
				<van-icon name="setting-o" color="#A5ADB6" size="28"/>
				<van-cell title="设置"is-link to="/" id="cell"></van-cell>
			</div>
			
		</div>
		
	</div>
	
</template>

<script>

export default{
	data(){
		return{	
		}
	},
	methods:{
		goLogin(path){
			this.$router.push(`/Index/${path}`)
		},
	}
	}
	
</script>

<style>
	.user-header{
		display: flex;
		height: 70px;
		text-align: center;
		background-color: #EC7B10;
	}
	.seclect{
		height: 50px;
		display: flex;
		margin-left: 12px;
	}
	/* .button{
		color: #EC7B10;
		background-color: #EC7B10;
	} */
	.empyyDiv{
		height: 10px;
		background-color: #e6e6e6;
	}
	#cell{
		text-align: left; 
		font-size:16px;
	}
	#buuu{
		color: white;
		border: 1px solid #EC7B10;
		background-color: #EC7B10;
	}
	
</style>
