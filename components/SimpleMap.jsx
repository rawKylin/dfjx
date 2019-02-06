import React, { Component } from 'react'
import {mapContainer} from '../css/componentCss.scss'

class SimpleMap extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            uniqueId : `map${+(new Date())}`,
            myMap:{}
        }
    }
    
    componentDidMount(){
        // 百度地图API功能
        this.state.myMap.map = new AMap.Map(this.state.uniqueId, {
            resizeEnable: true,
            center: [112.873676, 34.685174],
            zoom: 16
        });
        this.state.myMap.marker = new AMap.Marker({
            map: this.state.myMap.map,
            position: [112.873676, 34.685174]
        });
        //鼠标点击marker弹出自定义的信息窗体
       
           
        this.state.myMap.infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: '东风机械厂',
            offset: new AMap.Pixel(16, -25)
        });
        this.state.myMap.infoWindow.open(this.state.myMap.map, this.state.myMap.marker.getPosition());
       
    }
    componentWillUnmount(){
        this.state.myMap.map && this.state.myMap.map.destroy();
    }
    render(){
       
        return (
            
            <div id={this.state.uniqueId} className={mapContainer}>
               
            </div> 
        )
    }
}

export default SimpleMap