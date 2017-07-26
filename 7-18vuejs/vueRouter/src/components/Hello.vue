<template>
  <div class="hello">
  <img v-bind:src="img1" alt="" />
  </div>
</template>

<script>
//在vue中导入照片需要用模块化
import ss from '../assets/0.jpg'
export default {
  name: 'Hello',
  data(){
    return{
      img1:ss
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
