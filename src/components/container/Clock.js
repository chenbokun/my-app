import React,{Component} from 'react'

function Clock(props){
	return <div>{props.hours}:{props.minutes}:{props.seconds}</div>
}

export default Clock