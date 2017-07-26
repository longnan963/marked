import React from 'react'

import $ from 'jquery'
//导入Header
import Header from './components/Header.js'
//导入CommentList
import CommentList from './components/CommentList.js'

//导入CommentForm
import CommentForm from './components/CommentForm.js'

class App extends React.Component{
	//constructor只会被调用一次
	constructor(){
		super();
		this.state = {
			commentList:[]
		}
		this.formHandler = this.formHandler.bind(this);
	}
	//声明函数，接收从子集CommentForm传递过来的参数
	formHandler(data){
		$.ajax({
			url:'http://127.0.0.1:3100/api/comments',
			type:'post',
			data:data,
			success:(obj)=>{
				this.setState({
					commentList:obj
				});
			},
			error:function(err){
				console.log(err);
			}
		});
	}
	//组件加载完的状态，通过ajax请求改变列表commentList的值，再调用render方法。
	//如果将ajax请求放在render方法中，那么只要修改render方法中的内容就会发送请求，不合理
	componentDidMount(){
		$.ajax({
			url:'http://127.0.0.1:3100/api/comments',
			type:'get',
			success:(data)=>{
				this.setState({
					commentList:data
				});
			},
			error:function(err){
				console.log(err);
			}
		});
 	}
	
	render(){
		return(
			<div className="app container">
				<div className="row">
				<Header />
					<div className="col-md-6">
						<CommentList commentList={this.state.commentList}  />
					</div>
					<div className="col-md-6">
						<CommentForm formHandler = {this.formHandler} />
					</div>
				</div>
				
			</div>
		)
	}
}
export default App