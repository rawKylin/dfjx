import headerFooter from '../css/headerFooter.scss'

const Footer = () => (
    <div className={headerFooter.dfjxFooter}>
        <div >Copyright @2010-{(new Date()).getFullYear()} </div>
    </div>
)
export default Footer