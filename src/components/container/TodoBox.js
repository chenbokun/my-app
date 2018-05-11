import React,{Component} from 'react'
import TodoList from '../presentation/TodoList'
import AddTodo from '../presentation/AddTodo'
import {connect} from 'react-redux'
import {addTodo_action} from '../../model/actions'
class TodoBox extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:[...props.data,{name:'嘻嘻',state:false}]
		}
		this.addTodo = this.addTodo.bind(this)
		this.toggle = this.toggle.bind(this)
		this.delete = this.delete.bind(this)
	}
	addTodo(value){
		let flag = true
		this.state.data.map(v=>{
			console.log(v,v.name===value)
			if(v.name === value){
				flag = false
			}
		})
		if(flag)
		this.setState((preState,props)=>({data:[...preState.data,{name:value,state:false}]}))
	}
	toggle(name){
		console.log(name)
		this.state.data.map((v,i,data)=>{
			if(v.name===name){
				v.state = !v.state
				this.setState({data:data})
			}
		})
	}
	delete(name){
		let data = this.state.data.filter(item=>item.name!=name)
		this.setState({data:data})
	}
	render(){
		return (
			<div>
			<AddTodo addTodo={this.props.addTodo} />
			<ul><TodoList data={this.props.list} toggle={this.toggle} delete={this.delete}/></ul>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		list: state.addTodo
	}
}
const mapDispatchToProps = (dispatch, props) =>{
	return {
		addTodo: (text) => {
			dispatch(addTodo_action(text))
			return
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoBox)