import React, { Component } from 'react'
import Swiper from 'swiper'

import  'swiper/dist/css/swiper.min.css'
const simpleContentCss = {
    // height:'50px',
    // width:'1500px',
    marginBottom:'10px',
    overflow:'hidden'
}
const simpleContentImg={
    width:'100%',
    height:'100%',
    // maxHeight:300
}
const ib = {
    display:'inline-block',
    width:'750px',
    margin:'0 auto'
}
const simpleContent = {
    width:'750px',
    margin:'0 auto',
    overflow:'hidden'
}
class SimpleSwiper extends Component{
    constructor(props){
        super(props)
        // let mySwiper;
        
        this.state = {
            swiperId : `swiperId${+(new Date())}`,
            paginteId : `paginteId${+(new Date())}`,
            mySwiper:''
        }
    }
    
    componentDidMount(){
        
        this.setState({mySwiper : new Swiper(this.state.swiperId,{
            pagination:{
                el:this.state.paginteId
            },
            observer: true,
            autoplay:true,
        })
    })
    }
    componentWillUnmount(){
        this.state.mySwiper.destroy(false)
    }
    render(){
        const imgPath = './static/images/'
       
        return (
            
            <div>
                <section className="swiper-container" style={simpleContent}  ref={self => this.state.swiperId = self}>
                    <ul className="swiper-wrapper" style={simpleContentCss} style={{width:this.props.list.length*750}} >
                        {this.props.list.map(item=>{
                            return <li className="swiper-slide" style={ib} key={item}><img src={imgPath+item} alt="东风机械" style={simpleContentImg}/></li>
                        })}
                    </ul>
                    <div className="swiper-pagination banner-pagination"  ref={self => this.state.paginateId = self}></div>
                </section>
            </div> 
        )
    }
}

export default SimpleSwiper