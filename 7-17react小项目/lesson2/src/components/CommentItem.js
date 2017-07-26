import React from 'react'

export default class CommentItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h3>作者:{this.props.author}</h3>
				<p>内容:{this.props.comment}</p>
			</div>
		)
	}
}