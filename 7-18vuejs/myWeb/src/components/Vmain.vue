<template>
  <div class="vmain">
    <p>{{msg}}</p>    
  </div>
</template>

<script>
export default {
  name: 'Vmain',
  data () {
    return {
      msg: 'vuejs+nodejs开发好麻烦啊！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vmain{
    width: 100%;
    height: 100%;
    background: url(../assets/main.jpg);
  }
  p{
    color: #fff;
    position: absolute;
    right: 100px;
    top: 250px;
    font-size: 40px;
    font-weight: bold;
  }
</style>
