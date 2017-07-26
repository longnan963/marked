// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//插入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex);
//创建仓库store
const store = new Vuex.Store({
	state:{

	},
	mutations:{

	}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //将创建好的仓库store挂载到vue实例中
  store,
  template: '<App/>',
  components: { App }
})
