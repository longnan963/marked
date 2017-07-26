import React from 'react'
import logo from '../logo.svg'
export default function Header(){
	return(
		<div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="">
			        <img alt="Brand" src={logo} width="50" />
			      </a>
			    </div>
			    <div>react吐槽</div>
			  </div>
			</nav>
		</div>
	)
}