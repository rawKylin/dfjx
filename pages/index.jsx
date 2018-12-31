import React from 'react'
import { connect } from 'react-redux'
import { viewChange } from '../store'
import ReduxHandler from '../components/reduxHandler'


// import {window} from '../utils/window'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/normalize.css'
import '../css/reset.css'

class Index extends React.Component{
    static getInitialProps({reduxStore,req}){
        const isPc = !!req ? 'pc':'h5'
        reduxStore.dispatch(viewChange(isPc))
        return {}
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){

    }

    render(){
        return (
        <React.Fragment>
            <Header></Header>
            东风机械
            <ReduxHandler></ReduxHandler>
            <Footer></Footer>
        </React.Fragment>
        )
    }
}

export default Index