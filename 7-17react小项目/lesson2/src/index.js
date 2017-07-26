//引入两位带头大哥
import React from 'react'
import ReactDom from 'react-dom'

//引入css样式
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.js'

//ReactDom 控制页面的内容

//第一个参数是渲染的dom元素，第二个参数是渲染的位置
//render渲染的dom元素必须放在闭合标签中
ReactDom.render(
	//给dom元素加class名需要用className
	//label中的for属性用htmlFor
	<App />,
	
	document.getElementById('root')
)

//jsx == js+x = javascripr + xml
//将htnl中的dom元素在javascript代码中识别

//添加的元素中的data-reactoot使添加的元素变成虚拟dom
//页面中只有一root的div