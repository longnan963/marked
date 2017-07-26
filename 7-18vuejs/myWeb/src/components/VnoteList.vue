<template>
 <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">笔记列表</h3>
    </div>
    <div class="panel-body noteList">
      <ul>
       <VnoteItme v-for='(ele,index) in getNotes' :note='ele' />
      </ul>
    </div>
  </div>
</template>

<script>
import VnoteItme from './VnoteItem.vue'
export default {
  name: 'VnoteList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	VnoteItme
  },
  computed:{
    getNotes(){
      return this.$store.state.notes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul{padding-left: 0px}
  .noteList{padding:0px;}
</style>
