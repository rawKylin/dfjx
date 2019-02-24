import Layout from '../components/Layout'
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import ProductInfo from '../components/productInfo'
import SimpleSwiper from '../components/SimpleSwiper'


const productName = {
    margin:'0 auto',
    textAlign:'center',
    fontSize:16,
    padding:10
}
class ProductCeneter extends Component{
    constructor(props){
        super(props)
        this.renderProduct = this.renderProduct.bind(this)
        this.state = {
            ename:''
        }
    }
    static async getInitialProps({query}){
        
        // this.setState({ename:query.ename || ''})
        // this.state.ename = query.ename || ''
        return {query}
    }
    renderProduct(){
        let pLenth = this.props.productInfo.length;
        let productInfos = [...this.props.productInfo]
        let infos = {};
        
        for(var i=0;i<pLenth;i++){
            for(var j=0;j<productInfos[i].itemList.length;j++){
                if(productInfos[i].itemList[j].ename==this.props.query.ename){
                    infos=productInfos[i].itemList[j];
                    break;
                }
            }
        }
        
        // infos.imgList = infos.imgList.map(i=>{return imgPath+i})
        return (
            <>
                <SimpleSwiper list={infos.imgList||[]}></SimpleSwiper>
                <div style=
                {productName}>{infos.cname}</div>
                <ProductInfo infos={infos}></ProductInfo>  
            </> 
        )
    }
    render(){
        return (
        
        <Layout {...this.props} >
            {this.renderProduct()}
        </Layout>
        )
    }
}

function mapStateToProps(state){
    const { productInfo } = state
    
    return { productInfo }
}

export default connect(mapStateToProps)(ProductCeneter)