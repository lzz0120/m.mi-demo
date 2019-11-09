import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cookie from 'js-cookie'
export default new Vuex.Store({
  state: {
	  goods:[
		  {
			  id:1000110,
			  num:1
		  }
	  ]
  },
  mutations: {
	  setLog(state,log){
	  	state.isLog=log;
	  		if(log){
	  			cookie.set("isLog",true);
	  		}
	  		else{
	  			cookie.remove("isLog")
	  		}
	  		
	  }
  },
  actions: {
  },
  modules: {
  }
})
