import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Button extends Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(){
		if(this.props.handle)
		this.props.handle()
	else return
	}
  componentDidMount(){
    //this.timerID = setInterval(()=> console.log(this.refs.button.click()),1000)
  }
  componentWillUnMount(){
  	alert(1)
  }
	render(){
		return <button ref="button" onClick={this.handleChange}>{this.props.name}{this.props.data}</button>
	}
}
Button.propTypes = {
	name:PropTypes.number
}
export default Button