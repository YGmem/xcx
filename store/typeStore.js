import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from 'vuex-persist';
Vue.use(Vuex)

const typeStore = new Vuex.Store({
  state: {
    count: 0,
	typeList:[]
  },
  mutations: {
    increment (state) {
      state.count++
    },
	inieTypeList(state,payload){
		state.typeList = payload
	}
  },
  plugins:[ // 数据持久化插件
   new vuexPersist({
    localstorage: wx.setStorage(),
   }).plugin,
  ],
})

export default typeStore