//引入 Vue
import Vue from 'vue'
//引入 App
import App from './App.vue'
//關閉 Vue 的 生產提示
Vue.config.productionTip = false

//創建 vm
new Vue({
	el: '#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})