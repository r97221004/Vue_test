//引入 Vue
import Vue from 'vue'
//引入 App
import App from './App.vue'
//關閉 Vue 的生產提示
Vue.config.productionTip = false

	/ 建vm
new Vue({
	el: '#app',
	render: h => h(App),
	/* mounted() {
		setTimeout(()=>{
			this.$destroy()
		},3000)
	}, */
})