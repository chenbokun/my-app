import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import { createLogger} from 'redux-logger'


import reducers, {initialState } from './reducers'
let my_mid = store =>next => action =>{
    console.log('this is my own mid')
    next(action)
    console.log(action,'action')
    console.log('this is end')
}
let enhancer = applyMiddleware(thunk,my_mid)
if(process.env.NODE_ENV === 'development') {
    enhancer = compose(
        applyMiddleware(thunk,my_mid,createLogger()),
    )
}

console.log(enhancer)
const store = createStore(
    reducers,
    initialState,
    enhancer
)

if(process.env.NODE_ENV === 'development') {
    if(module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
}

export default store;