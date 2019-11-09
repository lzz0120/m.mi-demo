<template>
  <div id="app">
   <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
   <!-- </div> -->
    <router-view/>
	
	<van-tabbar route v-show="$route.meta.show==true"  v-model="active">
	  <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
	  <van-tabbar-item to="/classify" icon="search">分类</van-tabbar-item>
	  <van-tabbar-item to="/cat" icon="shopping-cart-o">购物车</van-tabbar-item>
	  <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
	</van-tabbar>
	
	
  </div>
</template>c
<script>
	export default {
	  data() {
	    return {
	      active: 0
	    }
	  }
	}
	
	
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
