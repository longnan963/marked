<template>
  <div class="vnote">
    <div class="container note" >
    	<div class="row">
    		<div class="col-md-4">
    			<VnoteList />
    		</div>
    		<div class="col-md-8">
    			<Vmarked />
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import VnoteList from './VnoteList.vue'
import Vmarked from './Vmarked.vue'
export default {
  name: 'Vnote',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	VnoteList,
  	Vmarked
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.vnote{
		margin-top: 30px;
	}
	.note{width: 100%}
</style>
