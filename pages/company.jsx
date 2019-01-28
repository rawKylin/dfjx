import Layout from '../components/Layout'
import React,{ Component } from 'react';
import componentCss from '../css/componentCss.scss'

class Company extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        
        <Layout {...this.props} >
        <div className={componentCss.about}>
            <div className={componentCss.aboutTitle}>企业文化</div>
            <div className={componentCss.aboutContent}>
                <div className={componentCss.aboutContentLeft}>
                <img src="../static/images/company.png" alt=""/></div>
                <div className={componentCss.aboutContentRight}>
                    <dl>
                        <dt>企业理念</dt>
                        <dd>以质量求生存，以信誉求发展</dd>
                    </dl>
                    <dl>
                        <dt>企业文化</dt>
                        <dd>多元、包容、创新</dd>
                    </dl>
                    <dl>
                        <dt>企业核心价值</dt>
                        <dd>实力、信誉、责任、效率</dd>
                    </dl>
                    <dl>
                        <dt>企业社会责任观</dt> 
                        <dd>贡献全球，责任相伴</dd>
                    </dl>
                </div>
            </div>
        </div>
        </Layout>
        )
    }
}

export default Company