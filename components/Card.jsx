
import Link from 'next/link'
import componentCss from '../css/componentCss.scss'
import classsNames from 'classnames'
class Cardbox extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            css:{
                cardBox:{
                    display: 'inline-block',
                    width:this.props.width?this.props.width:370,
                    height:this.props.height?this.props.height:370,
                    overflow: 'hidden',
                    padding:10,
                }
            }
        }
    }
    render(){
        return (
            // <div className={componentCss.container}>
                <div className={componentCss.cardBox}>
                <div className={componentCss.cardBoxTitle}>
                    <div className={componentCss.cardBoxTitleLeft}>{this.props.title}</div>
                    {this.props.moreLink?<div className={componentCss.cardBoxTitleRight}>
                        <Link href={this.props.moreLink}><span>更多></span></Link>
                    </div>:''}
                </div>
                <div className={componentCss.cardBoxContent}>
                    <img src={this.props.contentImg?this.props.contentImg:'/static/images/logo.jpg'} alt={this.props.contentImgAlt?this.props.contentImgAlt:'东风机械'}/>
                </div>
                <div className={componentCss.cardBoxFooter}>
                    {this.props.footer}
                </div>
            </div>
            // </div>
            
        )
    }
}
export default Cardbox