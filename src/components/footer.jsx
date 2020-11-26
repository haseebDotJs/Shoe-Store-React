import { memo } from 'react'
import './footer.css'
const Footer = () => {
    console.log('footer compo - rendering');
    return (
        <footer>
            <p className='footer__title'>@Copyrights Abdul Haseeb</p>
        </footer>
    )
}
export default memo(Footer)