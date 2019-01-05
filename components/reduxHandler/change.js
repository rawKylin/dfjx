import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewChange } from '../../store'
import { withStyles } from '@material-ui/core/styles'

class ChangeView extends Component{
    constructor(props){
        super(props)
        this.state = {...this.props}
        this.changeit = this.changeit.bind(this)
    }
    changeit = () => {
        
        const { dispatch } = this.props

        dispatch(viewChange(this.state.clientViewport=='pc'?'h5':'pc'))
    }
    componentWillReceiveProps(nextProps){//父组件值更新更改子组件
        if(nextProps.clientViewport != this.props.clientViewport){
            this.setState({clientViewport:nextProps.clientViewport})
        }
    }

    render(){
        return (
            <div>
                clientViewport:{this.state.clientViewport}
                <button onClick={this.changeit}>change viewport</button>
                {/* 更改视图测试用 */}
            </div>
        )
    }
}
function mapStateToProps(state){
    const { clientViewport } = state
    return { clientViewport }
}
export default connect(mapStateToProps)(ChangeView)