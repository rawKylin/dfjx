import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const dfjxInitialState = {
    clientViewport:'pc',
    productInfo:[]
}

export const actionTypes = {
    CHANGEVIEW: 'CHANGEVIEW',
    GETPRODUCT: 'GETPRODUCT'
}

export const reducer = (state = dfjxInitialState, action) => {
    switch (action.type){
        case actionTypes.CHANGEVIEW: return {...state,clientViewport:action.cv};
        case actionTypes.GETPRODUCT:
         return {...state,productInfo:action.info}
        default: return state
    }
}

export const viewChange = (cv) => dispatch => {
    return dispatch({type:actionTypes.CHANGEVIEW,cv})
}
export const productGet = (info) => dispatch => {
    return dispatch({type:actionTypes.GETPRODUCT,info})
}
export function initializeStore(initialState = dfjxInitialState){
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}