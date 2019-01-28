import Layout from '../components/Layout'
import React,{ Component } from 'react';
import componentCss from '../css/componentCss.scss'
import SimpleMap from '../components/SimpleMap'

const lineHeight = {
    hieght:'40px',
    lineHeight:'40px'
}

class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        
        <Layout {...this.props} >
        <div className={componentCss.about}>
            <div className={componentCss.aboutTitle}></div>
            <div className={componentCss.aboutContent}>
                <div className={componentCss.aboutContentLeft}>
                <SimpleMap></SimpleMap>

                </div>
                <div className={componentCss.aboutContentRight}>
                    <p style={lineHeight}>巩义市东风机械厂</p>
                    <p style={lineHeight}>地址：河南省巩义市回郭镇人民路</p>
                    <p style={lineHeight}>李厂长：13603827392  </p>
                    <p style={lineHeight}>李经理：13663836189</p>
                </div>
            </div>
        </div>
        </Layout>
        )
    }
}

export default About