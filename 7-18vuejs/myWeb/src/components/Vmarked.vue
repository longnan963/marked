<template>
 <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">添加笔记</h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <label for="title">标题:</label>
          <input type="text" class="title" v-model='title'/>
          <p class="titleP">{{titleP}}</p>
          <p class="updateTitle">{{updateTitle}}</p>
        </div>
      </div>
      <div class="row contentList">
         <div class="col-md-6">
            <textarea name="textarea" rows="20" cols="54" v-model='textarea'></textarea>
        </div>
        <div class="col-md-6" >
          <div class="content" v-html='markedText'>
          </div>
          <div class="updateContent" v-html='updateContent'>
            
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-info reseteNote" @click='reseteNote'>重置</button>
        <button class="btn btn-danger addNote" @click='updateNote'>更新</button>
        <button class="btn btn-success addNote" @click='addNote'>添加</button>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'
import qs from 'qs'
/*$(function(){
  $(document).click(function(){
    var ss = $('.content').html();
  })
  
});*/
var date = new Date();
var time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
export default {
  name: 'Vmarked',
  data () {
    return {
      title:'',
      textarea: ''
      /*title:this.$store.state.note.title,
      textarea: this.$store.state.note.content*/
    }
  },
  components:{
  	
  },
  methods:{
    addNote(){
      /*var title = $('.titleP').html();
      var content = $('.content').html();
       if(this.$store.state.note.id!=''){
        var id=this.$store.state.note.id
           axios.get('http://127.0.0.1:3000/updateNote', {
        　　params: { 
               id:id,
               title:title,
               content: content,
               updateTime:time
            }
          }).then(function (response) {
          　if(response.data.err==0){
              alert(response.data.msg);
          };
          }).catch(function (error) {
          　　alert(error);
          });
        }else{
           this.$store.commit('addOneNote',{'title':title,'content':content,'time':time});
            axios.get('http://127.0.0.1:3000/insertNote', {
          　　params: { 
                 title:title,
                 content: content,
                 time:time
              }
            }).then(function (response) {
            　if(response.data.err==0){
              alert(response.data.msg);
           };
            }).catch(function (error) {
            　　alert(error);
            });
            $('input').val('');
            $('textarea').val('');
            $('.content').html('');
          }*/
          var title = $('.titleP').html();
          var content = $('.content').html();
           this.$store.commit('addOneNote',{'title':title,'content':content,'time':time});
            $('input').val('');
            $('textarea').val('');
            $('.content').html('');
            // $.ajax({
            //   url:'http://127.0.0.1:3000/insertNote',
            //   type:'get',
            //   data:{
            //     title:title,
            //     content: content,
            //     time:time
            //   },
            //   success:function(data){
            //     if(data.err==0){
            //       alert(data.msg);
            //     }
            //   }
            // })
          },
    updateNote(){
      var title = $('.titleP').html();
      var content = $('.content').html();
      var id=this.$store.state.note.id;
           /*axios.('http://127.0.0.1:3000/updateNote', {
        　　params: { 
               id:id,
               title:title,
               content: content,
               updateTime:time
            }
          }).then(function (response) {
          　if(response.data.err==0){
              alert(response.data.msg);
          };
          }).catch(function (error) {
          　　alert(error);
          });*/
          this.$store.commit('updateNote1',{'id':id,'title':title,'content': content,'updateTime':time});
          axios({
            method:'post',
            url:'http://127.0.0.1:3000/updateNote',
            data:{
              id:id,
               title:title,
               content: content,
               updateTime:time
            }
            }).then(function (response) {
              if(response.data.err==0){
                    alert(response.data.msg);
                    $('input').val('');
                    $('textarea').val('');
                    $('.content').html('');
                }
            })
            .catch(function (error) {
              console.log(error);
            });
      },
      reseteNote(){
         $('input').val('');
         $('textarea').val('');
         $('.content').html('');
      }
  },
  computed:{
    markedText(){
      //if(this.$store.state.note.id!=''){
        //if(this.textarea==''){
           //this.textarea = this.$store.state.note.content;
        //}
      //}
      return marked(this.textarea)
    },
    titleP(){
     // if(this.$store.state.note.id!=''){
        //if(this.title==''){
         //this.title = this.$store.state.note.title;
        //}
      //}
      return this.title
    },
    updateTitle(){
      this.title = this.$store.state.note.title;
      return this.$store.state.note.title
    },
    updateContent(){
      this.textarea = this.$store.state.note.content;
      return this.$store.state.note.content
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label{font-size: 18px}
	.title{width: 60%;margin-left: 10px;height: 40px}
  .contentList{margin-top: 30px}
  .content,.updateContent{border: 1px solid #ccc;width: 100%;height: 405px}
  .addNote,.reseteNote{float: right;margin-left: 20px}
  .titleP,.updateContent,.updateTitle{display: none}
</style>
