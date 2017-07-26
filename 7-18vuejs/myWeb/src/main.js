// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'

const store = new Vuex.Store({
	state:{
		notes:[],
		note:{
			id:'',
			title:'',
			content:'',
			time:'',
			updateTime:''
		}
	},
	mutations:{
		addOneNote(state,obj){		
           //  axios.get('http://127.0.0.1:3000/insertNote', {
           //    params: obj
           //  }).then(function (response) {
           //  　if(response.data.err==0){
           //    // alert(response.data.msg);
           //    state.notes.push(obj);

           // };
           //  }).catch(function (error) {
           //  　　alert(error);
           //  });
           axios({
           	method:'post',
			url:'http://127.0.0.1:3000/insertNote',
			data:obj
           }).then(function (response) {
		    if(response.data.err==0){
              alert(response.data.msg);
              state.notes.push(obj);

            };
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		},
		delOneNote(state,obj){
			for(var i = 0;i<state.notes.length;i++){
				if(state.notes[i].id==obj.id){
					console.log(state.notes[i].id);
					state.notes.splice(i,1);
				}
			}
		},
		updateNote(state,obj){
			state.note.id = obj.note.id;
			state.note.title = obj.note.title;
			state.note.content = obj.note.content;
			//state.note.time = obj.note.time;
		},
		updateNote1(state,obj){
			for(var i = 0;i<state.notes.length;i++){
				if(state.notes[i].id==obj.id){
					state.notes[i].title = obj.title;
					state.notes[i].content = obj.content;
					state.notes[i].updateTime = obj.updateTime;

				}
			}
		}
	}
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
