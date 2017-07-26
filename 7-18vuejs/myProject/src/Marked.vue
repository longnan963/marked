<template>
	<div id="marked">
		<div class="left">
			<textarea cols="20" rows="20" v-model='text'></textarea>
		</div>
		<div class="right" v-html='markedText'>
			
		</div>
		<div class="sss">
			{{sss}}
		</div>
	</div>
</template>
<script>
	var marked = require('marked');
	export default{
		name:'Marked',
		data(){
			return{
				text:''
			}
		},
		methods:{

		},
		computed:{
			markedText:function(){
				return marked(this.text);
			},
			sss:function(){
				var tokens = marked.lexer(this.markedText);
				console.log(marked.parser(tokens));
				return (marked.parser(tokens)+'-----'+this.text)
			}
		}
	};
</script>
<style scoped>
	*{margin: 0;padding: 0}
	.left,.right,.sss{
		float: left;
	}
	.right,.sss{
		width: 400px;
		height: 300px;
		border: 1px solid red;
	}
</style>