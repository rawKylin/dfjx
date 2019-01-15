import React, { Component } from 'react'
import Swiper from 'swiper'

import  'swiper/dist/css/swiper.min.css'
import { log } from 'util';
const demoCss = {
    // height:'50px',
    // width:'1500px',
    marginBottom:'10px',
    overflow:'hidden'
}
const demoImg={
    width:'100%',
    height:'100%',
    maxHeight:300
}
const ib = {
    display:'inline-block',
    width:'720px',
    margin:'0 auto'
}
const demo = {
    width:'720px',
    margin:'0 auto',
    overflow:'hidden'
}
class SimpleSwiper extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            swiperId : `swiperId${+(new Date())}`,
            paginteId : `paginteId${+(new Date())}`
        }
    }
    
    componentDidMount(){
        
        var mySwiper = new Swiper(this.state.swiperId,{
            pagination:{
                el:this.state.paginteId
            },
            observer: true,
            autoplay:true,
        })
    }
    render(){
       
        return (
            
            <div className="wxchat-banner">
                <section className="new_custom swiper-container index_tab_con" style={demo}  ref={self => this.state.swiperId = self}>
                    <ul className="swiper-wrapper" style={demoCss} style={{width:this.props.list.length*720}} >
                        {this.props.list.map(item=>{
                            return <li className="swiper-slide" style={ib} key={item}><img src={item} alt="东风机械" style={demoImg}/></li>
                        })}
                    </ul>
                    <div className="swiper-pagination banner-pagination"  ref={self => this.state.paginateId = self}></div>
                </section>
            </div> 
        )
    }
}

export default SimpleSwiper