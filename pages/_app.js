import App, { Container } from 'next/app'
import React from 'react'
import widthReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class DFJXApp extends App{
    render (){
        const { Component, pageProps, reduxStore } = this.props//来源于next的初始化
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>

        )
    }
}

export default widthReduxStore(DFJXApp)