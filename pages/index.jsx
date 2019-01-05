import Layout from '../components/Layout'
import React,{ Component } from 'react';
import Card from '../components/Card'

class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        
        <Layout {...this.props} >
            <Card title='公司简介' moreLink='/' footer='巩义市东风机械厂建于1984年，位于河南省巩义市回郭镇人民路，是集设计、生产、销售、服务为一体的机械产品专业厂家。铁路高速公路国道交叉通过，交通便利'></Card>
        </Layout>
        )
    }
}

export default About