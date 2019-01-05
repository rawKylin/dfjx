import Head from 'next/head'
import Link from 'next/link'
import headerFooter from '../css/headerFooter.scss'
const logoStyle = {
    height:'50px',
    marginBottom:'10px'
}
const imgStyle = {
    height:'100%'
}
const borderStyle = {
    height:'100%',
    display:'inline-block',
    width:'1px',
    backgroundColor:'#e3e3e3',
    margin:'0 10px'
}

const LinkArr = (LinkItem)=>(
    <Link href={LinkItem.href} key={LinkItem.title}><a  className={headerFooter.headerLink}>{LinkItem.title}</a></Link>
)
const linkArray = [
    {href:'/',title:'首页'},
    {href:'/about',title:'关于我们'},
]
const Header = (props) => (
    <div className={headerFooter.dfjxHeader}>
        <Head>
            <title>东风机械{props.title?`-${props.title}`:''}</title>
            <meta name="viewport" content="initial-scale=1.0,width=device-width,height=device-height" key="viewport"/>
            <meta name="keywords" content={'东风机械,机械设备,郑州'+props.keywords} />
            <meta name="description" content={'东风机械,机械设备,郑州'+props.description} />
        </Head>
        <div style={logoStyle}><img src="/static/images/logo.jpg" style={imgStyle} alt="logo"/><span style={borderStyle}></span><img src="/static/images/companyName.png" style={imgStyle} alt="东风机械"/></div>
        <div>
            {linkArray.map(item=>LinkArr(item))}
        </div>
    </div>
)
export default Header