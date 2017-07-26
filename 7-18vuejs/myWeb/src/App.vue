<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="" width="30px">
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
           <!--  <li :class="{active:'首页'==changeName}" @click='btnClick'><router-link to="/" class="router">首页</router-link></li>
           <li :class="{active:'笔记'==changeName}" @click='btnClick'><router-link to="/note" class="router">笔记</router-link></li> -->
           <li class="ele" v-for='(item,index) in items' :class="{active:isActive==index}" @click='btnClick(index)'><router-link :to="item.url" class="router">{{item.title}}</router-link></li>
          <!--  <li class="ele" :class="{active:'biji'==changeName}" @click='btnClick'><router-link to="/note" class="router">biji</router-link></li>  -->
             <li :class="{active:'我的博客'==changeName}" @click='btnClick'><a href="https://longnan963.github.io/" class="router" target="_blank">我的博客</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {getCookie,setCookie} from './cookie'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return{
      items:[
        {url:'/',title:'首页'},
        {url:'/note',title:'笔记'}
      ],
      isActive:0
    }
  },
  //钩子函数 页面加载完成的时候
  mounted(){
    var _this = this;
    axios.get('http://127.0.0.1:3000/selectAll')
    .then(function (response) {
      _this.$store.state.notes = response.data;

    })
    .catch(function (error) {
      console.log(error);
    });
  },
   //钩子函数 页面创建的时候
  created(){
    document.body.parentNode.style.height = '100%';
    document.body.style.height = '100%';
      /*if(getCookie('name')){
        this.isActive = getCookie('name');
      }else{
         this.isActive=0;
      }*/
      console.log(window.location.pathname);
      for(let i = 0;i<this.items.length;i++){
          if(window.location.pathname==this.items[i].url){
              this.isActive = i;
          }
      }
  },
  beforeDestroy(){
    removeCookie(this.isActive);
  },
  methods:{
    btnClick(index){
      this.isActive = index;
      setCookie('name',this.isActive,'');
      //this.isActive=ss
    }
  },
  computed:{
    changeName:function(){
      return this.isActive
    }
  }
}
</script>

<style scoped>
  #app{width: 100%;height: 100%;}
  nav{margin-bottom: 0px}
</style>
