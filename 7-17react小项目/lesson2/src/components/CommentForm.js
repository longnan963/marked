import React from 'react'

export default class CommentForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:'我点你，你敢回应吗？',
			author:'',
			comment:''
		}
		this.titleHandler = this.titleHandler.bind(this);

		this.authorHandler = this.authorHandler.bind(this);

		this.commentHandler = this.commentHandler.bind(this);

		this.submitHandler = this.submitHandler.bind(this);
	}
	titleHandler(){
		this.setState({
			title:'添加一条吐槽'
		});
	}
	//input 中的onChange方法采用的代理类似于事件对象e
	authorHandler(e){
		this.setState({
			author:e.target.value
		});
	}
	commentHandler(e){
		this.setState({
			comment:e.target.value
		});
	}
	submitHandler(e){
		e.preventDefault();
		var obj = {
			author:this.state.author,
			comment:this.state.comment
		}
		this.props.formHandler(obj);
		this.setState({
			title:'我点你，你敢回应吗？',
			author:'',
			comment:''
		});
	}
	render(){
		return(
			<div className='commentForm'>
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">{this.state.title}</h3>
				  </div>
				  <div className="panel-body">
					  <form className="form-horizontal" onSubmit={this.submitHandler}>
						  <div className="form-group">
						    <label htmlFor="author" className="col-sm-2 control-label">作者：</label>
						    <div className="col-sm-10">
						      <input type="text" value={this.state.author} className="form-control" id="author" onFocus={this.titleHandler} onChange={this.authorHandler} />
						    </div>
						  </div>
						  <div className="form-group">
						    <label htmlFor="comment" className="col-sm-2 control-label">内容</label>
						    <div className="col-sm-10">
						      <input type="text" value={this.state.comment} className="form-control" id="comment" onChange={this.commentHandler} />
						    </div>
						  </div>
						  <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10">
						      <button type="submit" className="btn btn-default">添加</button>
						    </div>
						  </div>
						</form>
				  </div>
				</div>
			</div>
		)
	}
}