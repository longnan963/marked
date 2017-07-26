<template>
	<li :nodeId='note.id' @click='update(note)'>
		<h3>
      {{note.title}} 
      <span id='time'>{{note.time}}</span>
       <i>X</i>
      <span class='noteTime'><!-- {{times}} -->{{ new Date(Date.parse(note.time)).getFullYear()+'-'+((new Date(Date.parse(note.time)).getMonth()+1)<10?'0'+(new Date(Date.parse(note.time)).getMonth()+1):''+(new Date(Date.parse(note.time)).getMonth()+1))+'-'+(new Date(Date.parse(note.time)).getDate()<10?'0'+new Date(Date.parse(note.time)).getDate():''+new Date(Date.parse(note.time)).getDate())}}</span>
     
    </h3>
		<p>{{ note.content}}</p>
    <div class="del">
      <p>确定要删除这条笔记吗？</p>
      <p><button class="confirm" @click='sure(note.id)'>确定</button><button class="cancel">取消</button></p>
    </div>
	</li>
</template>
<script>
import axios from 'axios'
function toDou(num){
    return num<10? '0'+num:''+num;
  }
 var str = document.getElementById('time');
 //console.log(str+'---');
  var time = new Date(Date.parse(str)).getFullYear()+'-'+toDou(new Date(Date.parse(str)).getMonth()+1)+'-'+toDou(new Date(Date.parse(str)).getDate());
 
 /*$(function(){
    var str =  $('#time').html();
    time = new Date(Date.parse(str)).getFullYear()+'-'+toDou(new Date(Date.parse(str)).getMonth()+1)+'-'+toDou(new Date(Date.parse(str)).getDate());
    console.log(time);
  })*/
$(function(){
  /*$('li').on('click','i',function(){
    alert(1);
  });*/
  $('i').click(function(ev){
    ev.stopPropagation();
    $(this).parent().nextAll('.del').css('display','block');
   })
  $('.cancel').click(function(ev){
     ev.stopPropagation();
    $(this).parents('.del').css('display','none');
  })
  $('.confirm').click(function(ev){
     ev.stopPropagation();
    $(this).parents('.del').css('display','none');
  })
})
 
 
export default {
  name: 'VnoteItme',
  data () {
    return {
      //times:time
    }
  },
  methods:{
    sure(id){
      this.$store.commit('delOneNote',{'id':id});
       axios.get('http://127.0.0.1:3000/delNote', {
    　　params: { 
           id:id,
        }
        }).then(function (response) {
        　if(response.data.err==0){
              alert(response.data.msg);
          };
        }).catch(function (error) {
        　　alert(error);
        });
    },
    update(note){
      this.$store.commit('updateNote',{'note':note});
    }
  },
  computed:{
    
  },
  props:{
  	note:Object,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li{list-style: none;border-bottom: 1px solid #555;padding: 15px;position: relative;}
	*{margin: 0;padding: 0}
	h3{border-bottom: 1px dashed #ccc;margin-bottom: 10px;padding-bottom: 10px;overflow: hidden;}
  #time{float: right;display: none}
  .noteTime{float: right;font-size: 14px;margin-right: 15px}
  i{float: right;font-style: normal;font-size: 14px;width: 20px;height: 20px;border-radius: 50%;background: #ccc;text-align: center;line-height: 20px;opacity: 0;cursor: pointer;}
  li:hover i{opacity: 1;}
  .del{position: absolute;left: 20%;top:10px;width: 60%;height: 70px;background: #888;padding: 5px 20px;display: none}
  .del p:last-child{margin-top: 10px;float: right;}
  .del button{margin-left: 10px}
</style>
