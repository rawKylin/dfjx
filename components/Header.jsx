import Head from 'next/head'
import Link from 'next/link'
import Logo from './Logo'
import headerFooter from '../css/headerFooter.scss'
const linkStyle = {
    marginRight: 15
}

const LinkArr = (LinkItem)=>(
    <Link href={LinkItem.href} key={LinkItem.title}><a  className={headerFooter.headerLink}>{LinkItem.title}</a></Link>
)
const linkArray = [
    {href:'/',title:'index'},
    {href:'/about',title:'about'},
]
const Header = (props) => (
    <div className={headerFooter.dfjxHeader}>
        <Head>
            <title>东风机械{props.title?`-${props.title}`:''}</title>
            <meta name="viewport" content="initial-scale=1.0,width=device-width,height=device-height" key="viewport"/>
            <meta name="keywords" content={'东风机械,机械设备,郑州'+props.keywords} />
            <meta name="description" content={'东风机械,机械设备,郑州'+props.description} />
        </Head>
        <Logo></Logo>
        <div>
            {linkArray.map(item=>LinkArr(item))}
        </div>
    </div>
)
export default Header