import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './components/button.js'
import About from './components/About.js'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/presentation/index_nav.js'
import { Provider } from 'react-redux'
import store from './model'

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<div>
			<Nav list={[{url:'/',name:'首页'},{url:'about',name:'关于'}]}></Nav>
			<Route exact path="/" component={App}/>
			<Route exact path="/about" component={About}/>
			</div>
		</BrowserRouter>
	</Provider>
	)
	, document.getElementById('root'));
registerServiceWorker();
