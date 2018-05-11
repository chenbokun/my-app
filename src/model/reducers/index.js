import {combineReducers } from 'redux'
import{
    addTodo_action,
    goPage
} from '../actions'

const initialState = {
    todo:'7',
    list:[]
}

function todo(state=initialState.todo,action){
    switch (action.type){
        case 'ADD_TODO':
            return state
        case 'GO_PAGE':
            return action.page
        default:
            return state
    }
}
function addTodo(state=initialState.list,action){
    console.log(action.type,state)
    switch (action.type){
        case 'ADD_TODO':
            return [...state,{text:action.text,completed:false}]
        default:
            return [...state]
    }
}
let reducers = combineReducers({
    todo,
    addTodo
})

export default reducers