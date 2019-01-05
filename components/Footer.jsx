import headerFooter from '../css/headerFooter.scss'

const Footer = () => (
    <div className={headerFooter.dfjxFooter}>
        <div >Copyright @2010-{(new Date()).getFullYear()} </div>
        <div >联系人：李老板 13603827392</div>
        <div >联系地址：河南省巩义市回郭镇人民路 </div>
    </div>
)
export default Footer