import Layout from '../components/Layout'
import React,{ Component } from 'react';
import Card from '../components/Card'
import  SimpleSwiper from "../components/SimpleSwiper";
import axios from 'axios'
// import { wrap } from 'module';
const card = {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
}
class About extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        axios.get('/static/json/index.json').then(res=>{
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
            <div style={card}>
                <Card title='公司概况' moreLink='/about' contentImg="./static/images/house.jpg" footer='巩义市东风机械厂建于1984年，位于河南省巩义市回郭镇人民路，是集设计、生产、销售、服务为一体的机械产品专业厂家。铁路高速公路国道交叉通过，交通便利'></Card>
                <Card title='新闻中心' moreLink='/' contentImg="./static/images/newCenter.png" footer='东风机械厂以质量创声誉，以态度赢人心'></Card>
                <Card title='产品中心' moreLink='/' contentImg="./static/images/news.jpg" footer='东风机械厂以质量创声誉，以态度赢人心'></Card>
            </div>
           
        </Layout>
        )
    }
}

export default About