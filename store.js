import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const dfjxInitialState = {
    clientViewport:'pc'
}

export const actionTypes = {
    CHANGEVIEW: 'CHANGEVIEW'
}

export const reducer = (state = dfjxInitialState, action) => {
    switch (action.type){
        case actionTypes.CHANGEVIEW: return {...state,clientViewport:action.cv};
        default: return state
    }
}

export const viewChange = (cv) => dispatch => {
    return dispatch({type:actionTypes.CHANGEVIEW,cv})
}

export function initializeStore(initialState = dfjxInitialState){
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}