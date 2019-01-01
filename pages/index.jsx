import React from 'react'
import { connect } from 'react-redux'
import { viewChange } from '../store'
import ReduxHandler from '../components/reduxHandler'

import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme =>({
    root: {
        textAlign: 'left',
        // paddingTop: theme.spacing.unit * 20,
    }
})

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
        return (
            <div className={classes.root} >
                
                <Header></Header>
                {/* <Button color="primary" onClick={this.handleClick}>click me</Button> */}
                <ReduxHandler></ReduxHandler>
                <Footer></Footer>
            </div>

        )
    }
}
Index.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)