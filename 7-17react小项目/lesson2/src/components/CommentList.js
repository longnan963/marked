import React from 'react'

import CommentItem from './CommentItem.js'
export default class CommentList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		var lists = [];
		this.props.commentList.forEach((ele,index)=>{
			lists.push(
				<CommentItem key={index+"list"} author={ele.author} comment={ele.comment} />
			);
		});
		return(
			<div className='commentList'>
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">我是一个不一样的标题</h3>
				  </div>
				  <div className="panel-body">
					   {lists}
				  </div>
				</div>
			</div>
		)
	}
}