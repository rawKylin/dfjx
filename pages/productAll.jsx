import Layout from '../components/Layout'
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import productCss from '../css/productCss.scss'

import Link from 'next/link'

const anchor = {
    paddingLeft:20,
    fontSize: 15
}
const productAllCss = {
    padding: '10px 20px',
    productCard:{
        // flex:1;
        width:210,
        padding: 10,
        cursor: 'pointer',
        display: 'inline-block',
        marginRight: 10,
        // img:{
        //     width:'100%'
            
        // },
        imgContainer:{
            position:'relative'
        },
        imgCenter:{
            // position:'absolute',
            // top:'50%',
            // left:'50%',
            // transform:'translate(-50%,-50%)',
            width:210,
            height:210,
            overflow:'hidden'
        }
    }
}
const catory = {
    position: 'fixed',
    width:160,
    catoryItem:{
        color:'#000',
        fontSize:16,
        padding:10,
        marginLeft:20,
        height:24,
        LineHeight:24,
        display:'block',
        // border:'1px solid #999'
    }
}
const rel = {
    position: 'relative',
    display:'flex'
}
const detail = {
    flex:1,
    marginLeft:150
}

class ProductCeneter extends Component{
    constructor(props){
        super(props)
        this.renderProduct = this.renderProduct.bind(this)
    }
    renderProduct(){
        
        return (
            this.props.productInfo.map(item => {
                return (<div key={item.ename} id={item.ename}>
                    <div style={anchor}>{item.cname}</div>
                    <div style={productAllCss}>
                        {item.itemList ? item.itemList.map(item => {
                            return (
                                <Link href={`/productDetail?ename=${item.ename}`} key={item.ename}>
                                    <dl key={item.ename} style={productAllCss.productCard}> 
                                
                                        <dt style={productAllCss.productCard.imgContainer}><img src={item.imgList?`./static/images/${item.imgList[0]}`:''} alt="" style={productAllCss.productCard.imgCenter}/>
                                        </dt>
                                        <dd style={productAllCss.productCard.imgContainer}>{item.cname}</dd>
                                    </dl>
                                </Link>
                            
                            )
                        }):''}
                    </div>
                   
                </div>)
            })
            
        )
    }
    renderCatory(){
        return (
            this.props.productInfo.map(item => {
                return (<div key={item.ename}><a href={`/productAll#${item.ename}`} style={catory.catoryItem} >{item.cname}</a></div>)
            })
        )
    }
    render(){
        return (
        
        <Layout {...this.props} >
        <div style={rel}>
            <div style={catory}>{this.renderCatory()}</div>
            <div style={detail}>{this.renderProduct()}</div>
        </div>
           
        </Layout>
        )
    }
}

function mapStateToProps(state){
    const { productInfo } = state
    return { productInfo }
}

export default connect(mapStateToProps)(ProductCeneter)