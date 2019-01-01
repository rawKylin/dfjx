import App, { Container } from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/getPageContext'
import React from 'react'
import widthReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class DFJXApp extends App{
    constructor(){
        super()
        this.pageContext = getPageContext()
    }
    componentDidMount(){
        const jssStyles = document.querySelector('#jss-server-side')
        if(jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render (){
        const { Component, pageProps, reduxStore } = this.props//来源于next的初始化
        return (
            <Container>
                <Provider store={reduxStore}>
                <div>
                    <Head>
                        <title>东风机械</title>
                    </Head>
                    <JssProvider registry={this.pageContext.sheetsRegistry} sheetsManger={this.pageContext.sheetsManger} >
                        <MuiThemeProvider theme={this.pageContext.theme} >
                        {/* sheetsManger={this.pageContext.sheetsManger} */}
                            <CssBaseline />
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </MuiThemeProvider>
                    </JssProvider>  
                    </div>          
                </Provider>
            </Container>

        )
    }
}

export default widthReduxStore(DFJXApp)