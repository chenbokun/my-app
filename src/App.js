import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import styles from './App.css';
import TodoBox from './components/container/TodoBox'
import Clock from './components/container/Clock'
import Page from './components/Page'
import { DatePicker} from 'antd'
class App extends Component {
  constructor(props){
    super(props)
    let date = new Date()
    this.state = {
      hours:date.getHours(),
      minutes:date.getMinutes(),
      seconds:date.getSeconds(),
      pages:{
        total:10,
        show_num:8
      },
      content:'1'
    }
    this.goPage = this.goPage.bind(this)
    setInterval(()=>{
      let date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()
      if(s<10){
        s = '0' + s
      }
      this.setState({hours:h,seconds:s,minutes:m})
    },1000)
  }
  goPage(page){
    this.setState({
      pages: Object.assign({},this.state.pages,{curr:page}),
      content: page
    })
  }
  render() {
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <h1 className={styles["App-title"]}>Welcome to React</h1>
        </header>
        <TodoBox data={[]}/>
        <Clock hours={this.state.hours} seconds={this.state.seconds} minutes={this.state.minutes}/>
        <p>{this.state.content}</p>
        <Page pages={this.state.pages} curr={this.props.currpage} goPage={this.goPage} />
        <DatePicker />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currpage : state.todo
})
export default connect(
  mapStateToProps,{}
)(App);
