import React,{Component} from 'react'

function withSubscription(WrappedComponent, selectData){
	return class extends Component{
		constructor(props){
			super(props)
			this.state ={data:0}
		}
		componentDidMount(){
			this.setState({
				data:selectData + 1
			})

		}
		componentWillUnmount(){
		}
		handleChange(){
		}
		render(){
			console.log('haha')
			return <WrappedComponent data={this.state.data} {...this.props} />
		}
	}
}

export default withSubscription