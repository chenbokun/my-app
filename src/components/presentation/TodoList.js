import React,{Component} from 'react'

function TodoList(props){
	let list = []
	props.data.map(item=>{
		list.push(<li key={item.text}>
			<input type='checkbox' onClick={()=>props.toggle(item.text)} />
			{item.text}{item.state?'已完成':'未完成'}<button onClick={()=>props.delete(item.name)}>x</button></li>)
	})
	return list
}

export default TodoList