//該文件用於創建 Vuex 中最為核心的 store
import Vue from 'vue'
//引入 Vuex
import Vuex from 'vuex'
//應用 Vuex 插件
Vue.use(Vuex)

//準備 actions ——用於響應組件中的動作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被調用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被調用了')
		context.commit('JIAN',value)
	}, */
	jiaOdd(context, value) {
		console.log('actions中的jiaOdd被調用了')
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		console.log('actions中的jiaWait被調用了')
		setTimeout(() => {
			context.commit('JIA', value)
		}, 500)
	}
}
//準備 mutations ——用於操作數據（state）
const mutations = {
	JIA(state, value) {
		console.log('mutations中的JIA被調用了')
		state.sum += value
	},
	JIAN(state, value) {
		console.log('mutations中的JIAN被調用了')
		state.sum -= value
	},
	ADD_PERSON(state, value) {
		console.log('mutations中的ADD_PERSON被調用了')
		state.personList.unshift(value)
	}
}
//準備 state ——用於存儲數據
const state = {
	sum: 0, //當前的和
	school: '尚矽谷',
	subject: '前端',
	personList: [
		{ id: '001', name: '張三' }
	]
}
//準備 getters ——用於將 state 中的數據進行加工
const getters = {
	bigSum(state) {
		return state.sum * 10
	}
}

//創建並暴露 store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})