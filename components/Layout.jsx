import React from 'react'
import { connect } from 'react-redux'

import { viewChange, productGet } from '../store'
import ReduxHandler from '../components/reduxHandler'
import axios from 'axios'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme =>({
    root: {
        textAlign: 'left',
        // paddingTop: theme.spacing.unit * 20,
    },
    content:{
        // height:parseFloat(document.body.clientHeihgt)-200,
        // overflow:'scroll',
        // position:'relative',
        // top:150,
        margin:'0 auto 110px',
        // backgroundColor:'#fff'
    }
})

// import {window} from '../utils/window'
import Header from './Header'
import Footer from './Footer'
import '../css/normalize.css'
import '../css/reset.css'

class Layout extends React.Component{
   
    // static getInitialProps({reduxStore,req}){
    //     const isPc = !!req ? 'pc':'h5'
    //     reduxStore.dispatch(viewChange(isPc))
    //     console.log(12312);
        
    //     axios.get('/static/json/product.json').then(res=>{
    //         console.log(res,'info1');
            
    //         reduxStore.dispatch(productGet(res))
    //     })
    //     return {}
    // }
    constructor(props){
        super(props)
        this.changeit = this.changeit.bind(this)
    }
    state = {
        open: false,
        info: []
    }
    changeit = () => {
        
        const { dispatch } = this.props
        axios.get('/static/json/product.json').then(res=>{
            console.log(res,'info1');
            // this.setState({info:res.data})
            dispatch(productGet(res.data))
        })
    }
    componentDidMount(){
        
        this.changeit()

    }

    componentWillUnmount(){

    }

    render(){
        const { classes } = this.props
        const { open } = this.state
        const contentComponent = this.props.contentComponent ? this.props.contentComponent : null
        
        return (
            <div  className={classes.root}>
                <Header></Header>
                {/* <Button color="primary" onClick={this.handleClick}>click me</Button> */}
                <div className={classes.content}>
                    {/* <ReduxHandler></ReduxHandler> */}
                    {/* {contentComponent} */}
                    {this.props.children}
                </div>
                
                <Footer></Footer>
            </div>

        )
    }
}
Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    width:PropTypes.string.isRequired,
}
function mapStateToProps(state){
    const { info } = state
    return { info }
}
export default connect(mapStateToProps)(withStyles(styles)(Layout))