import React from 'react'
import { initializeStore } from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState){
    //在服务端每次创建一个新的服务
    if(isServer){
        return initializeStore(initialState)
    }
    //客户端共用一个,没有就创建
    if(!window[__NEXT_REDUX_STORE__]){
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
    }
    return window[__NEXT_REDUX_STORE__]
}

export default App => {
    return class AppWithRedux extends React.Component{
        static async getInitialProps(appContext){

            const reduxStore = getOrCreateStore()
            //提供给页面初始的getInitialProps
            appContext.ctx.reduxStore = reduxStore
            
            let appProps = {}
            if(typeof App.getInitialProps === 'function'){
                appProps = await App.getInitialProps(appContext)
            }

            return {
                ...appProps,
                initialReduxState: reduxStore.getState()
            }
        }

        constructor(props){
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }
        
        render(){
            return <App {...this.props} reduxStore={this.reduxStore} />
        }
    }
}