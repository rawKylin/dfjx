
import Link from 'next/link'
import componentCss from '../css/componentCss.scss'
import classsNames from 'classnames'
class ProductInfo extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            css:{
                info:{
                    width:this.props.width?this.props.width:750,
                    margin:'18px auto',
                    fontSize:15,
                    padding:'0 15px'
                }
            }
        }
    }
    renderInfo(infoDetail){
            if(Array.isArray(infoDetail)){
                return (
                    <div style={this.state.css.info}>
                    {infoDetail.map(i=>{
                        return (
                            <div key={i.titleName}>
                                <div>{i.titleName}</div>
                                {Array.isArray(i.content)?<ul>
                                    {i.content.map(j=><li key={j}>{j}</li>)}
                                </ul>:<div>{i.content}</div>}
                            </div>
                        )
                    })}
                    </div>
                )
            }
        return (
            <div style={this.state.css.info}>
                <p>
                 巩义市东风机械厂建于1984年，位于河南省巩义市回郭镇人民路，是集设计、生产、销售、服务为一体的机械产品专业厂家。铁路高速公路国道交叉通过，交通便利。
                </p>
                <p>
                 建厂三十多年来，凭借经验丰富的机电科研队伍，完整配套的加工手段，通过长期的技术储备和研制开发，已具备成套线缆设备的独立设计和制造能力。产品销往全国各地，多年来一直坚持诚实守信、开拓进取、兢兢业业、勇于竞争的经营方针取得了显著的效果。
                </p>
                <p>
                    如今的巩义市东风机械厂，生产设备精良，技术力量雄厚，产品质量可靠，性能优    先，生产各种型号合股机、成套成缆机系列、电线电缆成套设备（押出机，牵引机，各种收线系列，成套成圈机系列）、框绞机、盘绞机、瓦楞连锁铠装机、钢丝装铠机、笼绞机、叉绞机、管绞机、连拔机组、打卷复绕机系列、无轴收排线系列。
                    我厂引进舟山各种型号螺杆、机筒、高效耐磨、技术先进、质量上乘、服务一流。
                </p>
            </div>
        )
    }
    render(){
        return (
           this.renderInfo(this.props.infos&&this.props.infos.infoDetail)
            
        )
    }
}
export default ProductInfo