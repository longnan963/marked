<template>
	<div>
		<img :src="logo" alt="">
		 <!--子级往父集传数据 3.在子集中定义事件 -->
		<button @click='btnParent'>子集往父级传递数据</button>
		<ul>
			<li v-for='city in city'>{{city}}</li>
		</ul>
	</div>
</template>
<script>
	import logo from './assets/logo.png'
	export default{
		name:'Vheader',
		data(){
			//一定要有return，可以不写数据
			return{
				logo:logo,
			}
		},
		methods:{
			 /*子级往父集传数据 4.在子集声明的事件中调用父级事件，并传递数据*/
			btnParent(){
				//调用父级中的方法，parent对应父级中子集组件的自定义事件名
				this.$emit('parent','子集往父级传递数据');
			}
		},
		/*父级往子集传数据 2用props接收数据，需要验证类型*/
		props:{
			//需要验证
			city:Array
		}
	}
</script>
<style></style>