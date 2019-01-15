import Layout from '../components/Layout'
import React,{ Component } from 'react';
import Card from '../components/Card'
import  SimpleSwiper from "../components/SimpleSwiper";
import axios from 'axios'
class About extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        axios.get('/static/product/demo.json').then(res=>{
            console.log(res,11111);
            if(res.data){
                this.setState({...res.data})
                // this.state = {...res.data}
            }
        })
    } 
    render(){
        return (
        <Layout {...this.props} >
            {/* <span>{this.state.name}</span> */}

            {this.state.imgList?<SimpleSwiper list={this.state.imgList}></SimpleSwiper>:''}
            <Card title='公司简介' moreLink='/about' footer='巩义市东风机械厂建于1984年，位于河南省巩义市回郭镇人民路，是集设计、生产、销售、服务为一体的机械产品专业厂家。铁路高速公路国道交叉通过，交通便利'></Card>
            <Card title='新闻中心' moreLink='/' footer='东风机械厂以质量创声誉，以态度赢人心'></Card>
        </Layout>
        )
    }
}

export default About