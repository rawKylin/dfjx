import Layout from '../components/Layout'
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import productCss from '../css/productCss.scss'

import Link from 'next/link'


class ProductCeneter extends Component{
    constructor(props){
        super(props)
        this.renderProduct = this.renderProduct.bind(this)
    }
    renderProduct(){
        
        return (
            this.props.productInfo.map(item => {
               
                return (<div key={item.ename} id={item.ename}>
                    <div className={productCss.anchor}>{item.cname}</div>
                    <div className={productCss.productAllCss}>
                        {item.itemList ? item.itemList.map(item => {
                            return (
                                <Link href={`/productDetail/${item.ename}`} key={item.ename}>
                                    <dl key={item.ename} className={productCss.productCard}> 
                                
                                        <dt><img src={item.imgList?`./static/images/${item.imgList[0]}`:''} alt=""/>
                                        </dt>
                                        <dd>{item.cname}</dd>
                                    </dl>
                                </Link>
                            
                            )
                        }):''}
                    </div>
                   
                </div>)
            })
            
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