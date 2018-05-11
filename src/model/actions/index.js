export function addTodo_action(text){
    return {
        type:'ADD_TODO',
        text
    }
}

export function goPage(page){
    return {
        type:'GO_PAGE',
        page
    }
}

export const asyncfunc = (page) => (dispatch,getState) =>{
    dispatch(goPage(page))
}