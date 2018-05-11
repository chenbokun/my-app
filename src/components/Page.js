import React, {Component} from 'react'
import styles from './Page.css'
import {addTodo_action,asyncfunc, goPage} from '../model/actions'
import { connect } from 'react-redux';
class Page extends Component {
	constructor(props){
		super(props)
		this.goPage = this.goPage.bind(this)
		this.createPage = this.createPage.bind(this)
		this.toGo = this.toGo.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			page:this.props.curr
		}
	}
	handleChange(event){
		this.setState({
			page:event.target.value
		})
	}
	toGo(){
		let page = this.state.page
		console.log(page)
		if(page<=this.props.pages.total && page>=1){
			this.goPage(null,page)
		}else{
			console.log('超出范围')
		}
	}
	//点击页数后的事件
	goPage(e,page){
		if(!Number(page)){
			return
		}
		this.props.alert(page,page)
	}
	//根据传入的参数创建页数
	createPage({total,show_num},curr){
		let arr = new Array()
		let pre = Math.floor((show_num-4)/2)
		let next = show_num-pre-5
		if(total<=show_num){
			return Array(total).fill(0).map((v,i)=> i+1)
		}
		if(curr<=pre+3){
			for(let i=1;i<=show_num-2;i++){
				arr.push(i)
			}
			arr[arr.length]='...'
			arr[arr.length]=total
			return arr
		}
		if(curr>pre+3 && curr<total-next-2){
			arr[0] = '1'
			arr[1] = '...'
			for(let i=curr-pre;i<=curr+next;i++){
				console.log(i)
				arr.push(i)
			}
			arr[arr.length] = '...'
			arr[arr.length] = total
			return arr
		}
		if(curr>=total-next-2){
			arr[0] = '1'
			arr[1] = '...'
			for(let i=total-show_num+3;i<=total;i++){
				arr.push(i)
			}
			return arr
		}
	}
	render(){
		let page_arr = this.createPage(this.props.pages,this.props.curr)
		let name = this.props.name||'Go>>'
		console.log(styles)
		return (
			<ul className={styles.ul}>
				{this.props.curr>1 ? <li key="page_prev" onClick={(e)=>this.goPage(e,this.props.pages.curr-1)}>
					{'<<'}
				</li>:<li style={{visibility:'hidden'}} key="hide_1">.</li>}
					{page_arr.map((page,index)=>{
						return (<li className={page==this.props.curr?'active':''} name={page=='...'?'...':''} key={"page_" + index} onClick={(e)=>this.goPage(e,page)}>{page}</li>)
					})}
				{this.props.curr<this.props.pages.total ? <li key="page_next" onClick={(e)=>this.goPage(e,this.props.pages.curr+1)}>
					>>
				</li>:<li style={{visibility:'hidden'}} ke="hide_2">.</li>}
				<li>
					<div>
						{this.props.a}
						<input onChange={this.handleChange} />
						<input onClick={this.props.alert} type="submit" value={name} />
					</div>
				</li>
			</ul>
		)
	}
}
const mapStateToProps = (state, ownProps) => {
	return{
		haha: ownProps.pages.curr == 1
	}
}

const mapDsipatchToProps = (dispatch, ownProps) => {
	return {
		alert: (page,text) =>{
			console.log(dispatch(asyncfunc(page,text)))
		}
	}
}

const newPage = connect(
	mapStateToProps,
	mapDsipatchToProps
)(Page)
export default newPage