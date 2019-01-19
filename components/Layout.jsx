import React from 'react'
import { viewChange } from '../store'
import ReduxHandler from '../components/reduxHandler'

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
        // margin:'150px auto',
        // backgroundColor:'#fff'
    }
})

// import {window} from '../utils/window'
import Header from './Header'
import Footer from './Footer'
import '../css/normalize.css'
import '../css/reset.css'

class Layout extends React.Component{
   
    static getInitialProps({reduxStore,req}){
        const isPc = !!req ? 'pc':'h5'
        reduxStore.dispatch(viewChange(isPc))
        return {}
    }
    
    state = {
        open: false,
    }
    
    componentDidMount(){
        
    }

    componentWillUnmount(){

    }

    render(){
        const { classes } = this.props
        const { open } = this.state
        const contentComponent = this.props.contentComponent ? this.props.contentComponent : null
        console.log(contentComponent);
        
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

export default withStyles(styles)(Layout)