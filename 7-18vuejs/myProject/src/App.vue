<!-- 页面的结构 html-->

<template>
  <div class="app">
    <h1>{{message}}</h1>

    <ul>
      <li v-for='item in lists' :key='item'>
        你们请我吃{{item}}
      </li>
    </ul>
    <!--父级往子集传数据 1.给子集组件自定义属性 -->
    <!--子级往父集传数据 1.在子集组件中自定义事件 -->
    <Vheader :city="city" @parent='btnParent' />
    <Marked />
  </div>
</template>

<!-- 页面的业务逻辑 js -->

<script>
//先引入组件
  import Vheader from './Vheader.vue'
  import Marked from './Marked.vue'
  export default{
    name:'App',
    data(){

      // data() 什么操作都不做 只需要return一个对象
      return {
        message:'我是一个vueapp',
        lists:['鱼香肉丝','烤韭菜','大腰子'],
        city:['北京','上海','广州']

      }
    },
    methods:{
      /*子级往父集传数据 2.在父级中声明事件*/
      btnParent(str){
        alert(str);
      }
    },
    computed:{

    },
    //
    components:{
      Vheader,
      Marked
    }
  }
  
</script>

<!-- 页面的样式 style -->
<style>
  
</style>