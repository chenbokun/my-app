import React,{Component} from 'react'

class AddTodo extends Component {
	constructor(props){
		super(props)
		this.state = {value:''}
		this.handleChange = this.handleChange.bind(this)
		this.addTodo = this.addTodo.bind(this)
	}

	handleChange(event){
		this.setState({value: event.target.value})
	}

	addTodo(event){
		console.log(event)
		this.props.addTodo(this.state.value)
		event.preventDefault()
	}

	render(){
		return (
			<form>
			<input value={this.state.value} onChange={this.handleChange} /><button onClick={this.addTodo}>确定</button>
			</form>
		)
	}
}

export default AddTodo