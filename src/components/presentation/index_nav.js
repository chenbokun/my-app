import React,{Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
function Li(props){
	console.log(props)
	return props.list.map(i=><li key={i.name}><Link to={i.url}>{i.name}</Link></li>)
}
class Nav extends Component {
	constructor(props){
		super(props)

	}
	render(){
		return <ul><Li list={this.props.list}/></ul>
	}
}
export default Nav