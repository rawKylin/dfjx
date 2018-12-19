// const Card = () => (
//     <div>this is a card</div>
// )
import Link from 'next/link'
import componentCss from '../css/componentCss.scss'
class Cardbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {...this.props}
    }
    render(){
        return (
            <div className={componentCss.cardBox}>
                <div className={componentCss.cardBoxTitle}>
                    <div className={componentCss.cardBoxTitleLeft}>this.state.title</div>
                    {this.state.moreLink?<div className={componentCss.cardBoxTitleRight}>
                        <Link href={this.state.moreLink}>更多></Link>
                    </div>:''}
                </div>
                <div className={componentCss.cardBoxContent}>
                    <img src={this.state.contentImg?this.state.contentImg:'/static/images/logo.png'} alt={this.state.contentImgAlt?this.state.contentImgAlt:'东风机械'}/>
                </div>
                <div className={componentCss.cardBoxFooter}>
                    {this.state.footer}
                </div>
            </div>
        )
    }
}
export default Cardbox