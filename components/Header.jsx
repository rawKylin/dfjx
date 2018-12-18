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
const Header = () => (
    <div className={headerFooter.dfjxHeader}>
        <Logo></Logo>
        <div>
            {linkArray.map(item=>LinkArr(item))}
        </div>
    </div>
)
export default Header