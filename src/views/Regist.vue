<template>
	<div>
		<h2>注册</h2>
		用户名：<input type="text" v-model="user.name"><br>
		密码：	<input type="password" v-model="user.pwd1"><br>
		重复密码: <input type="password" v-model="user.pwd2"><br>
		邮箱：<input type="email" v-model="user.email"><br>
		<button @click="reGist">点我注册</button>
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:{
					name:'',
					pwd1:'',
					pwd2:'',
					email:'',
				}
			}
		},
		methods:{
			reGist(){
				
				if(this.user.name==""||this.user.pwd1==""||this.user.pwd2==""||this.user.email=="")
				{
					alert('所有数据均为必填项');
				}
				else if(this.user.pwd1!=this.user.pwd2)
				{
					alert('两次输入不一致')
				}
				else{
					this.$http({
						url:'http://www.520mg.com/member/reg_new2.php ',
						method:'post',
						data:`userid=${this.user.name}&userpwd=${this.user.pwd1}&email=${this.user.email}`,
						withCredentials:true,
					}).then(res=>{
						console.log(res)
						if(res.data.status==1){
							console.log(res.data)
							this.$router.push('/index')
						}
						else{
							
						}
					}).catch(err=>{
						
					})
				}
			}
		}
	}
</script>

<style>
</style>

